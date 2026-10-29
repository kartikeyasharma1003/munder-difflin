# Zapptics workflows

Every workflow runs on its own. The **owner** starts it when the trigger happens, each step hands off to the next owner through the hive, and the Chief of Staff watches for stalled steps. A step marked with a gate pauses until the founder approves it (see [APPROVALS.md](./APPROVALS.md)); other unblocked steps keep moving meanwhile.

The source of truth is [`org.json`](./org.json). This page is the readable copy.

## W1 · Feature delivery

**Trigger:** Founder idea, roadmap item or recurring customer pain  
**Owner:** Product Manager

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Product Manager | Write the one-page spec with acceptance criteria and success metric |  |
| 2 | Chief of Staff | Confirm it is on the committed roadmap; otherwise raise a scope change | 🔒 G8 |
| 3 | UX/UI Designer | Design the flow and every state; Product Manager picks a direction |  |
| 4 | CTO | Write the technical plan and split it into tasks |  |
| 5 | Frontend Engineer | Build UI in a branch with tests |  |
| 6 | Backend Engineer | Build API and data changes with tests and reversible migrations |  |
| 7 | Code Reviewer | Review every pull request |  |
| 8 | Security Engineer | Review anything touching auth, payments or personal data |  |
| 9 | QA Engineer | Test in staging and give written sign-off |  |
| 10 | Technical Writer | Update docs and draft release notes |  |
| 11 | CTO | Raise the release approval with changelog, evidence and rollback plan | 🔒 G1 |
| 12 | DevOps Engineer | Deploy to production after approval and watch metrics |  |
| 13 | Brand Director | Announce the feature through W3 | 🔒 G3 |
| 14 | Product Manager | Check the success metric at one week and one month |  |

## W2 · Incident response

**Trigger:** Alert, outage, error spike or security report  
**Owner:** DevOps Engineer

| # | Who | What | Approval |
|---|---|---|---|
| 1 | DevOps Engineer | Acknowledge, assess severity and stabilize (roll back if needed) |  |
| 2 | Chief of Staff | Notify the founder immediately for severity 1 or 2 |  |
| 3 | Security Engineer | Lead instead of DevOps if it may be a breach; contain and preserve evidence |  |
| 4 | Backend Engineer | Find and fix the root cause |  |
| 5 | DevOps Engineer | Production fix or rollback | 🔒 G1 |
| 6 | PR & Communications | Draft customer and status page message | 🔒 G5 |
| 7 | DevOps Engineer | Write a blameless postmortem with follow-up tasks within 48 hours |  |

## W3 · Brand campaign

**Trigger:** Launch, quarterly plan or growth opportunity  
**Owner:** Brand Director

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Brand Director | Write the campaign brief: objective, audience, message, channels, budget, KPI |  |
| 2 | Research Analyst | Supply audience and competitor insight |  |
| 3 | Content Writer | Write copy for every channel |  |
| 4 | SEO Specialist | Optimize web content for search |  |
| 5 | Brand Designer | Produce all visual assets |  |
| 6 | Legal & Compliance | Check claims and advertising rules |  |
| 7 | Growth Marketer | Plan paid budget if any | 🔒 G2 |
| 8 | Brand Director | Send the complete campaign package for approval | 🔒 G3 |
| 9 | Social Media Manager | Schedule approved posts |  |
| 10 | Growth Marketer | Launch approved ads and track results |  |
| 11 | Data Engineer | Report results against the KPI |  |

## W4 · Weekly content engine

**Trigger:** Every Monday  
**Owner:** SEO Specialist

| # | Who | What | Approval |
|---|---|---|---|
| 1 | SEO Specialist | Pick this week's topics from the keyword map and write briefs |  |
| 2 | Content Writer | Draft articles |  |
| 3 | SEO Specialist | Review for search intent and on-page SEO |  |
| 4 | Brand Designer | Create header and social images |  |
| 5 | Brand Director | Review voice and accuracy |  |
| 6 | Brand Director | Batch the week's content for approval | 🔒 G3 |
| 7 | Frontend Engineer | Publish approved posts on the site |  |
| 8 | Social Media Manager | Share approved posts on social |  |

## W5 · Customer support loop

**Trigger:** New ticket or message  
**Owner:** Customer Support

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Customer Support | Triage by urgency and type |  |
| 2 | Customer Support | Answer from the help center under the standing support approval, or draft for approval | 🔒 G5 |
| 3 | QA Engineer | Reproduce bugs and prioritize them for engineering |  |
| 4 | Customer Success Manager | Handle refunds, credits and at-risk accounts | 🔒 G2 |
| 5 | Product Manager | Review feature requests and pain counts weekly |  |
| 6 | Technical Writer | Turn top questions into help articles |  |

## W6 · Sales pipeline

**Trigger:** New lead or inbound request  
**Owner:** Sales Lead

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Research Analyst | Research the prospect |  |
| 2 | Sales Lead | Qualify and draft outreach | 🔒 G5 |
| 3 | Sales Lead | Run the demo with the Product Manager |  |
| 4 | Sales Lead | Draft proposal and pricing | 🔒 G6 |
| 5 | Legal & Compliance | Review the contract | 🔒 G6 |
| 6 | Customer Success Manager | Take the handoff and run onboarding |  |

## W7 · Monthly close

**Trigger:** First working day of the month  
**Owner:** Finance Manager

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Finance Manager | Reconcile the books and close the month |  |
| 2 | DevOps Engineer | Report cloud and tooling cost |  |
| 3 | Operations Lead | Review subscriptions and upcoming renewals | 🔒 G2 |
| 4 | Finance Manager | Write the monthly finance report: revenue, costs, burn, runway |  |
| 5 | Chief of Staff | Include it in the founder's report |  |

## W8 · Hiring an agent

**Trigger:** Work with no owner, or an agent at its cap every week  
**Owner:** People Ops

| # | Who | What | Approval |
|---|---|---|---|
| 1 | People Ops | Write the role proposal and hire manifest |  |
| 2 | Chief of Staff | Confirm need and budget | 🔒 G8 |
| 3 | People Ops | After approval, the founder imports and spawns the hire by hand |  |
| 4 | People Ops | Send the welcome brief and add the role to org.json |  |

## W9 · Daily standup and weekly report

**Trigger:** Every morning; every Friday  
**Owner:** Chief of Staff

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Chief of Staff | Collect yesterday, today and blockers from each department lead |  |
| 2 | Data Engineer | Send the metrics snapshot |  |
| 3 | Chief of Staff | Send the founder the standup and the list of approvals waiting |  |
| 4 | Chief of Staff | On Friday send the weekly report: OKRs, shipped, metrics, spend, risks, decisions |  |

## W10 · Security and compliance review

**Trigger:** Every week (security) and every quarter (compliance)  
**Owner:** Security Engineer

| # | Who | What | Approval |
|---|---|---|---|
| 1 | Security Engineer | Run dependency and secret scans and triage findings |  |
| 2 | Security Engineer | Rotate secrets or change access where needed | 🔒 G7 |
| 3 | Legal & Compliance | Review policies against what the product does |  |
| 4 | Legal & Compliance | Propose policy updates | 🔒 G6 |
| 5 | Chief of Staff | Report status to the founder |  |
