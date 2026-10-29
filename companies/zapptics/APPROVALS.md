# Zapptics approvals

The team works on its own. You, the founder, approve only the decisions below.
Everything else (planning, coding, reviewing, testing, drafting, designing, research,
internal handoffs) happens without asking you.

## The eight gates

| Gate | Needs your approval before… | Usually raised by |
|---|---|---|
| **G1** Production release | deploying to production, submitting to an app store, publishing release notes | CTO |
| **G2** Spending money | any spend: subscriptions, cloud upgrades, ad budgets, refunds, credits, vendors | Finance Manager, Growth Marketer, Operations Lead |
| **G3** Public publishing | blog posts, social posts, website copy, ads, announcements going live | Brand Director |
| **G4** Brand identity | changing the name, logo, colors, typography, core positioning or tagline | Brand Director, Brand Designer |
| **G5** External communication | emailing or messaging customers, prospects, press or partners; disclosing an incident | Sales Lead, Customer Success, PR |
| **G6** Legal, pricing and policy | contracts, terms, privacy policy, pricing, discounts, legal commitments | Legal & Compliance, Sales Lead |
| **G7** Destructive or irreversible | deleting data, production migrations, force-push, rotating secrets, access and permissions | DevOps, Backend, Security |
| **G8** Team and scope | adding, removing or changing agents; committing to or changing the roadmap | People Ops, Chief of Staff, Product Manager |

Rules every agent follows (they are written into each role's goal):

- **Silence is no.** A gated action happens only after an explicit `APPROVE <id>`.
  A timeout or an unclear answer is a rejection.
- **No self-approval, no splitting.** An agent cannot approve its own request or break a
  gated action into smaller pieces to avoid a gate.
- **Keep moving.** While a request waits, the agent works on anything else that is unblocked.
- **One digest a day.** The Chief of Staff batches routine requests into a single daily
  digest. Urgent ones (production down, security, a legal deadline) reach you immediately.

## How a request reaches you

An agent sends a hive message with `act: "propose"`, `to: "human"` and
`needs_human: true`. The hive router hands `to: "human"` traffic to the god agent
(Michael), who shows it to you in his own Claude Code session. With
`/remote-control` on, you can answer from your phone. Tool permission prompts in each
agent's session are a second safety net.

Every request uses this template:

```text
APPROVAL REQUEST  ZAP-<yyyymmdd>-<nn>
Gate:            G<n> <gate name>
From:            <role>
Workflow:        W<n> <workflow name>, step <k>
What:            <one sentence: the exact action>
Why:             <the reason and the expected result>
Cost / risk:     <money, reach, what could go wrong>
Rollback:        <how to undo it, or "irreversible">
Evidence:        <links: PR, test sign-off, draft, quote, diff>
Options:         A) <recommended>  B) <alternative>  C) do nothing
Recommendation:  <A/B/C and why>
Needed by:       <date and time, or "no deadline">
```

## How you answer

Reply in Michael's session (or from your phone):

| You say | What happens |
|---|---|
| `APPROVE ZAP-20261029-03` | The agent goes ahead exactly as described. |
| `APPROVE ZAP-20261029-03 option B` | The agent goes ahead with option B. |
| `CHANGE ZAP-20261029-03: <instructions>` | The agent revises and asks again. |
| `REJECT ZAP-20261029-03: <reason>` | The agent stops and records the reason. |
| `APPROVE ALL G3 TODAY` | One-day blanket approval for that gate's already-listed requests. |

## Standing approvals (optional)

To get even fewer pings, give a standing approval for a narrow, repeated action. Tell
Michael, for example: *"Standing approval: Customer Support may send replies that only
follow a published help article."* The Chief of Staff records it in the hive board with
its scope and an end date, and lists active standing approvals in each weekly report so
you can revoke them. G4, G6 and G7 can never get standing approvals.
