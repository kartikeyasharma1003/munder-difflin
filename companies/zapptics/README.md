# Zapptics: a complete company on Munder Difflin

A ready-made team of 28 AI employees for **Zapptics**, a software and brand company.
Each employee is a Munder Difflin [hire manifest](../../docs/hires/spec/HIRE_SPEC.md),
wired into one org chart, ten automatic workflows and one approval policy that keeps
**you** in control of every decision that matters.

| File | What it is |
|---|---|
| [`manifests/`](./manifests) | One `.hire.json` per employee: role, goal, model, budget, skills |
| [`org.json`](./org.json) | Source of truth: departments, reporting lines, approval gates, workflows |
| [`APPROVALS.md`](./APPROVALS.md) | What needs your approval, the request template, how to answer |
| [`WORKFLOWS.md`](./WORKFLOWS.md) | The ten workflows, step by step |
| [`MICHAEL_BRIEF.md`](./MICHAEL_BRIEF.md) | Standing instructions to paste into Michael, the god agent |

## Org chart

```text
Founder (you): approves gated decisions
├── Chief of Staff
    ├── CTO
        ├── Frontend Engineer
        ├── Backend Engineer
        ├── Mobile Engineer
        ├── DevOps Engineer
        ├── QA Engineer
        ├── Security Engineer
        ├── Code Reviewer
        ├── Data Engineer
    ├── Product Manager
        ├── UX/UI Designer
        ├── Technical Writer
        ├── Research Analyst
    ├── Brand Director
        ├── Brand Designer
        ├── Content Writer
        ├── SEO Specialist
        ├── Social Media Manager
        ├── Growth Marketer
        ├── PR & Communications
    ├── Operations Lead
        ├── Finance Manager
        ├── Legal & Compliance
        ├── People Ops
    ├── Sales Lead
    ├── Customer Success Manager
        ├── Customer Support
```

Michael, the god agent Munder Difflin always runs, sits above the floor as the router
between agents and you. He is not a manifest; he gets his Zapptics brief from
[`MICHAEL_BRIEF.md`](./MICHAEL_BRIEF.md).

## The team

| Department | Role | What they do | Reports to | Model |
|---|---|---|---|---|
| Leadership | **Chief of Staff** | Runs the company day to day: plans, routes work, tracks approvals, reports to the founder | Founder | `claude-opus-5-5` |
| Leadership | **CTO** | Owns technology: architecture, engineering standards, technical roadmap and the engineering team | Chief of Staff | `claude-opus-5-5` |
| Engineering | **Frontend Engineer** | Builds the web app and marketing site UI: fast, accessible, tested and on-brand | CTO | `claude-sonnet-5-5` |
| Engineering | **Backend Engineer** | Builds APIs, services and data models that are correct, secure and observable | CTO | `claude-sonnet-5-5` |
| Engineering | **Mobile Engineer** | Builds the Zapptics mobile apps for iOS and Android | CTO | `claude-sonnet-5-5` |
| Engineering | **DevOps Engineer** | Owns CI/CD, infrastructure, monitoring, uptime and incident response | CTO | `claude-sonnet-5-5` |
| Engineering | **QA Engineer** | Guards quality: test plans, automated tests, regression checks and release sign-off | CTO | `claude-sonnet-5-5` |
| Engineering | **Security Engineer** | Keeps Zapptics and its customers secure: reviews, audits, threat models and incident handling | CTO | `claude-opus-5-5` |
| Engineering | **Code Reviewer** | Reviews every pull request for correctness, clarity and test coverage before merge | CTO | `claude-opus-5-5` |
| Engineering | **Data Engineer** | Builds analytics: event tracking, data pipelines, dashboards and product metrics | CTO | `claude-sonnet-5-5` |
| Product & Design | **Product Manager** | Owns what Zapptics builds: roadmap, specs, prioritization and success metrics | Chief of Staff | `claude-opus-5-5` |
| Product & Design | **UX/UI Designer** | Designs product flows, screens and the component library, shipped as working prototypes | Product Manager | `claude-opus-5-5` |
| Product & Design | **Technical Writer** | Writes product docs, help center articles, API reference and release notes | Product Manager | `claude-sonnet-5-5` |
| Product & Design | **Research Analyst** | Researches the market, competitors, customers and trends with cited findings | Product Manager | `claude-sonnet-5-5` |
| Brand & Marketing | **Brand Director** | Owns the Zapptics brand and leads marketing: positioning, voice, identity and campaigns | Chief of Staff | `claude-opus-5-5` |
| Brand & Marketing | **Brand Designer** | Creates and guards the Zapptics visual identity and all marketing visuals | Brand Director | `claude-opus-5-5` |
| Brand & Marketing | **Content Writer** | Writes on-brand copy: website, blog, email, product and campaign content | Brand Director | `claude-sonnet-5-5` |
| Brand & Marketing | **SEO Specialist** | Grows organic traffic through keyword strategy, on-page and technical SEO | Brand Director | `claude-sonnet-5-5` |
| Brand & Marketing | **Social Media Manager** | Runs Zapptics social channels and community with a planned, on-brand calendar | Brand Director | `claude-sonnet-5-5` |
| Brand & Marketing | **Growth Marketer** | Drives signups and revenue with experiments, paid campaigns and funnel optimization | Brand Director | `claude-sonnet-5-5` |
| Brand & Marketing | **PR & Communications** | Handles press, announcements, partnerships messaging and crisis communications | Brand Director | `claude-sonnet-5-5` |
| Sales & Customers | **Sales Lead** | Finds and closes customers: prospecting, qualification, demos and proposals | Chief of Staff | `claude-sonnet-5-5` |
| Sales & Customers | **Customer Support** | Answers customers quickly and kindly, solves issues and routes bugs and feedback | Customer Success Manager | `claude-haiku-5-5` |
| Sales & Customers | **Customer Success Manager** | Onboards customers, drives adoption and retention, and leads the support team | Chief of Staff | `claude-sonnet-5-5` |
| Operations | **Operations Lead** | Runs the back office: finance, legal, people and vendor processes | Chief of Staff | `claude-sonnet-5-5` |
| Operations | **Finance Manager** | Keeps the books, budget, invoicing, forecasts and spend under control | Operations Lead | `claude-sonnet-5-5` |
| Operations | **Legal & Compliance** | Drafts and reviews contracts and policies and keeps Zapptics compliant | Operations Lead | `claude-opus-5-5` |
| Operations | **People Ops** | Manages the team of agents and humans: hiring, onboarding, roles and handbook | Operations Lead | `claude-sonnet-5-5` |

## How "automatic with approvals" works

1. **Work flows on its own.** Each role's goal tells it what it owns, who it hands work to
   and which workflow steps it runs. Agents message each other through the hive and the
   Stop-hook loop keeps them draining their inboxes, so nobody waits to be told.
2. **The Chief of Staff runs the company.** It turns your goals into OKRs and weekly plans,
   starts workflows, unblocks stalled steps, and sends you a daily standup and a Friday report.
3. **Eight gates stop for you.** Releases, spend, publishing, brand changes, external
   messages, legal and pricing, destructive operations, and team or scope changes
   ([APPROVALS.md](./APPROVALS.md)). The agent sends a standard request and keeps working on
   anything else. Nothing gated happens without your `APPROVE <id>`; silence means no.
4. **Requests reach you in one place.** They go to Michael, who shows them in his session.
   Turn on `/remote-control` there to approve from your phone.

## Set it up (about 15 minutes)

1. **Pick the workspace.** Create or open the Zapptics repo the team will work in, and copy
   this `companies/zapptics/` folder into it at the same path, so every agent can read
   `org.json`, `APPROVALS.md` and `WORKFLOWS.md`.
2. **Open Munder Difflin** on that workspace. Michael spawns at his desk automatically.
3. **Hire the team in one batch.** Click **Add agent → Import hire…**, open
   `companies/zapptics/manifests/`, and select all 28 files. The app queues them and
   shows each one pre-filled; review it and click **Spawn**. For a smaller first floor,
   start with the five leads (Chief of Staff, CTO, Product Manager, Brand Director,
   Operations Lead) and add the rest as work arrives.
   *Spawning stays a manual click on purpose: Munder Difflin never lets a manifest start an
   agent by itself. Treat each click as your G8 approval for that hire.*
4. **Brief Michael.** Paste the block from [`MICHAEL_BRIEF.md`](./MICHAEL_BRIEF.md) into his
   terminal. He will ask the Chief of Staff for the first OKRs and bring them to you.
5. **Connect tools as you need them.** Manifests only enable read-only MCP servers (`time`,
   `fetch`, `git`, `context7`, `sequential-thinking`). Add GitHub, email, Stripe, Linear and
   other integrations from the app's Integrations panel when a role needs them; each one
   asks for your consent and its secret.

## Running 28 agents

All roles use Claude models with a per-agent `tokenCap` and `--max-turns` limit. Leads and
reviewers use Opus for judgment; builders and writers use Sonnet; Customer Support uses
Haiku for speed. Change any of these in the Add-Agent modal before you click Spawn. Running
the full floor at once uses a lot of your subscription's hourly limit, so the Chief of Staff
is told to move work away from agents close to their cap.

## Changing the company

Edit `org.json` and the matching manifest together, or ask People Ops to propose the change
(a G8 request). `node --test test/zapptics-company.test.cjs` checks that every manifest
passes the app's own hire validator and that the org chart, gates and workflows all line up.
