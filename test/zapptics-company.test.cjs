'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const loadTs = require('./load-ts.cjs');
const { validateHireManifest } = loadTs('src/shared/hire.ts');

const DIR = path.resolve(__dirname, '..', 'companies', 'zapptics');
const org = JSON.parse(fs.readFileSync(path.join(DIR, 'org.json'), 'utf8'));
const slugs = new Set(org.employees.map((e) => e.slug));
const gateIds = new Set(org.approvalGates.map((g) => g.id));

test('every Zapptics manifest passes the runtime hire validator with no consent prompts', () => {
  const files = fs.readdirSync(path.join(DIR, 'manifests')).filter((f) => f.endsWith('.hire.json'));
  assert.equal(files.length, org.employees.length, 'one manifest per employee, no strays');
  const names = new Set();
  for (const file of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(DIR, 'manifests', file), 'utf8'));
    const v = validateHireManifest(raw);
    assert.ok(v.ok, `${file}: ${v.errors.join('; ')}`);
    assert.deepEqual(v.consentRequired ?? [], [], `${file} should only enable safe-readonly MCP servers`);
    assert.ok(!names.has(v.manifest.name), `${file}: duplicate name ${v.manifest.name}`);
    names.add(v.manifest.name);
    assert.match(v.manifest.goal, /ZAPPTICS OPERATING RULES/, `${file} must carry the approval rules`);
  }
});

test('org chart: manifests exist, managers exist, and every chain reaches the founder', () => {
  assert.equal(slugs.size, org.employees.length, 'slugs are unique');
  for (const e of org.employees) {
    assert.ok(fs.existsSync(path.join(DIR, e.manifest)), `${e.slug}: missing ${e.manifest}`);
    assert.equal(e.manifest, `manifests/${e.slug}.hire.json`);
    const title = JSON.parse(fs.readFileSync(path.join(DIR, e.manifest), 'utf8')).name;
    assert.equal(e.title, title, `${e.slug}: org title must match manifest name`);
    assert.ok(e.reports_to === 'founder' || slugs.has(e.reports_to), `${e.slug}: unknown manager ${e.reports_to}`);
    assert.ok(org.departments.some((d) => d.id === e.dept), `${e.slug}: unknown department ${e.dept}`);
    const seen = new Set();
    for (let cur = e; cur.reports_to !== 'founder'; cur = org.employees.find((x) => x.slug === cur.reports_to)) {
      assert.ok(!seen.has(cur.slug), `${e.slug}: reporting cycle`);
      seen.add(cur.slug);
    }
  }
  for (const d of org.departments) assert.ok(slugs.has(d.head), `${d.id}: unknown head ${d.head}`);
});

test('workflows only name real employees and real gates, and the docs list them', () => {
  const workflowsMd = fs.readFileSync(path.join(DIR, 'WORKFLOWS.md'), 'utf8');
  const approvalsMd = fs.readFileSync(path.join(DIR, 'APPROVALS.md'), 'utf8');
  for (const g of gateIds) assert.ok(approvalsMd.includes(`**${g}**`), `APPROVALS.md must describe ${g}`);
  for (const w of org.workflows) {
    assert.ok(slugs.has(w.owner), `${w.id}: unknown owner ${w.owner}`);
    assert.ok(workflowsMd.includes(`## ${w.id} · ${w.name}`), `WORKFLOWS.md is missing ${w.id}`);
    for (const s of w.steps) {
      assert.ok(slugs.has(s.owner), `${w.id}: unknown step owner ${s.owner}`);
      if (s.gate) assert.ok(gateIds.has(s.gate), `${w.id}: unknown gate ${s.gate}`);
    }
  }
});
