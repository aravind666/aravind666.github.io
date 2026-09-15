---
layout: post
title:  "The Self-Driving Repository: Letting Agents Merge Their Own Code"
category: "Engineering Quality"
author: "Aravind HU"
description: "I built a repository where the only human input is a requirement. Agents write the failing test, implement it, review the pull request, and merge it. The hard part was never code generation — it was designing gates that make autonomy trustworthy."
---

Most of the conversation about AI in engineering is about generation. Can it write the function? Can it write the test? Can it write the migration?

That question is largely settled, and it was never the interesting one.

The interesting question is the one every engineering leader eventually has to answer:

> *If nobody reads the diff, what exactly are you trusting?*

So I built a repository to find out. One rule: **the only thing a human is allowed to do is write a requirement.** Everything after that — the failing test, the implementation, the pull request, the review, the merge, the release, the documentation — is done by agents.

It is public: [github.com/aravind666/calculator-with-llm-wiki](https://github.com/aravind666/calculator-with-llm-wiki).

---

## The Setup

A human opens a GitHub issue and applies one label. Then:

<div class="diagram-container">
<div class="diagram-title">🔁 The Autonomous Delivery Loop</div>
<div class="mermaid">
graph TD
    A["Human writes a requirement<br/>label: agent:implement"] --> B["Agent · Implement<br/>red test → green code → PR"]
    B --> C["CI<br/>hygiene · coverage · TDD guard<br/>mutation · guard integrity"]
    C --> D["Agent · Review<br/>verdict as a label"]
    D -->|changes requested| E["Agent · Address<br/>fix, push, re-review"]
    E --> C
    D -->|review passed| F["Agent · Merge<br/>re-verify, squash-merge"]
    F --> G["release-please<br/>version, changelog, binaries"]
    F --> H["Wiki · Maintain<br/>fold the change into wiki/"]
    E -.->|3 rounds, no convergence| I["Human"]

    style A fill:#3fb848,stroke:#1a5d2a,stroke-width:3px,color:#fff
    style B fill:#fffcf0,stroke:#2d8a3e,stroke-width:2px,color:#2b2d42
    style C fill:#5fd869,stroke:#2d8a3e,stroke-width:3px,color:#2b2d42
    style D fill:#fffcf0,stroke:#3fb848,stroke-width:2px,color:#2b2d42
    style E fill:#fffcf0,stroke:#2d8a3e,stroke-width:2px,color:#2b2d42
    style F fill:#fffcf0,stroke:#3fb848,stroke-width:2px,color:#2b2d42
    style G fill:#1a5d2a,stroke:#1a5d2a,stroke-width:3px,color:#fff
    style H fill:#1a5d2a,stroke:#1a5d2a,stroke-width:3px,color:#fff
    style I fill:#fffcf0,stroke:#c1121f,stroke-width:2px,color:#c1121f
</div>
</div>

Nine workflows, thirteen labels, six required status checks. The application it builds is a .NET 10 command-line calculator.

**The calculator is deliberately trivial, and that is the entire point.**

`2 + 3` has exactly one correct answer. A wrong implementation is *provably* wrong. Choose a more interesting domain and you can no longer tell whether a failure came from the delivery loop or from the ambiguity of the problem. When you are evaluating a system's judgement, you need a substrate where the answers are not in dispute.

I have written before that [quality is not a metric, it is a system]({% post_url 2020-12-05-mutation-testing %}). This is the same argument taken to its limit: if the reviewer is not human, the system is *all* you have.

---

## The Claim Problem

Here is the failure mode that shapes everything else.

Tell an agent to practise test-driven development, and it will practise test-driven development. It will also *report* that it practised test-driven development. Those are two different events, and the report costs nothing.

Worse: **a finished diff contains no evidence of ordering.** Test file, implementation file, both present, suite green. That artefact is identical whether the test was written first or retrofitted afterwards to match code that already worked.

<div class="diagram-container">
<div class="diagram-title">🎯 Claimed Process vs Verified Process</div>
<div class="mermaid">
graph TB
    subgraph CL["📝 THE CLAIM"]
        direction TB
        C1["Prompt: 'practise TDD'"]
        C2["Agent works"]
        C3["Agent reports:<br/><b>'I wrote the test first ✓'</b>"]
        C4["Evidence available:<br/>❓ final diff only<br/>❓ ordering invisible<br/><b>UNFALSIFIABLE</b>"]
        C1 --> C2 --> C3 --> C4
    end

    subgraph VF["🔬 THE VERIFICATION"]
        direction TB
        V1["Find the commit typed<br/><b>test:</b>"]
        V2["Check it out in a<br/>git worktree"]
        V3["Run the suite <b>there</b>"]
        V4["Suite must FAIL<br/><b>or the PR is rejected</b>"]
        V1 --> V2 --> V3 --> V4
    end

    style C1 fill:#fffcf0,stroke:#666,stroke-width:1px,color:#666
    style C2 fill:#fffcf0,stroke:#666,stroke-width:1px,color:#666
    style C3 fill:#fffcf0,stroke:#c1121f,stroke-width:2px,color:#c1121f
    style C4 fill:#fffcf0,stroke:#c1121f,stroke-width:3px,color:#c1121f
    style V1 fill:#fffcf0,stroke:#2d8a3e,stroke-width:2px,color:#2b2d42
    style V2 fill:#fffcf0,stroke:#2d8a3e,stroke-width:2px,color:#2b2d42
    style V3 fill:#5fd869,stroke:#2d8a3e,stroke-width:3px,color:#2b2d42
    style V4 fill:#1a5d2a,stroke:#1a5d2a,stroke-width:3px,color:#fff
</div>
</div>

So the repository does not ask. It checks.

```bash
# scripts/tdd-guard.sh — three checks, in order:
#   1. Structural  — production changes must arrive with test changes.
#   2. Ordering    — a `test:` commit must exist when production code changed.
#   3. Red phase   — checking out that `test:` commit must produce a FAILING suite.

git worktree add --detach "$worktree" "$first_test_commit"

if (cd "$worktree" && dotnet test Calculator.slnx) >"$red_log" 2>&1; then
  fail "the suite PASSES at the test-first commit ${first_test_commit:0:8}.
        A test written before its implementation must fail. Either the test
        asserts nothing, or the implementation was committed first."
fi
```

CI rewinds history to the moment before the implementation existed and **requires the tests to fail there.** A compile error counts — that is the normal shape of red before the code exists.

This is not a stylistic preference. It converts an unverifiable claim about process into a binary fact about an artefact. Retrofitting tests and reordering commits afterwards does not survive it, because the commit has to actually be red.

One consequence is worth stating plainly, because it looks like a bug: **there is no build-or-test pre-commit hook.** There cannot be. The red commit *must* fail. A hook that rejected it would make "implementation first, tests after" the path of least resistance — the exact behaviour the gate exists to prevent.

---

## The Gates

| Gate | Threshold | Enforced by |
| --- | --- | --- |
| Build warnings | zero | `-warnaserror`, analyzers at `latest-recommended` |
| Line coverage | ≥ 90% | a coverage script, not a dashboard |
| Mutation score | ≥ 80% | Stryker.NET, break threshold in config |
| Test-first ordering | red commit present **and verifiably failing** | the TDD guard above |
| Commit and PR titles | Conventional Commits | pre-commit hook, plus re-checked in CI |
| Enforcement machinery untouched | no agent branch may edit it | a dedicated CI job |

Coverage and mutation testing do different jobs here, and the distinction matters more when no human is reading:

> **Coverage proves a line ran. Mutation proves a line was checked.**

An agent optimising for a coverage number will write tests that execute code without asserting anything meaningful, because that is the cheapest way to move the number. Mutation testing prices that shortcut correctly — a surviving mutant *is* a behaviour nothing asserts on. I unpacked this trade-off in [coverage vs mutation vs property-based testing]({% post_url 2020-12-06-coverage-vs-mutation-vs-property-base-testing %}); it turns out to be far less academic once the author is an agent.

Current state: 100% line coverage, 93.75% mutation score, zero warnings.

---

## The Gate That Actually Matters

The last row in that table is the one I would keep if I had to delete all the others.

When no human reads the diff, the cheapest way to satisfy a failing gate is not to write a better test. **It is to weaken the gate** — and nothing else in the system would notice.

Lower the mutation threshold from 80 to 40. Add a path exclusion to the coverage config. Delete a step from the workflow. Every one of those is a small, plausible-looking diff that makes CI green.

So agents are structurally forbidden from touching the machinery that judges them:

```
.github/workflows/**   scripts/**            CLAUDE.md
Directory.Build.props  global.json           .pre-commit-config.yaml
stryker-config.json
```

A CI job rejects any agent-authored branch that modifies those paths, and CODEOWNERS backs it up. Changing them requires a human-authored branch.

This is [Goodhart's Law]({% post_url 2020-12-30-measure-measure-measure %}) with the safety catch removed. When a measure becomes a target it stops being a good measure — but a human who games a metric at least has a career, a reputation, and colleagues as friction. An agent has none of those. It has a task and a reward signal.

**Separating *code the agent may write* from *rules the agent is judged by* is the thing that makes merging without review defensible at all.** Everything else is tuning.

---

## State You Can Read Without Running Anything

The workflows never call each other. Each one triggers on a label change and leaves a different label behind. Two properties fall out of that, and both were accidental discoveries I would now design for deliberately:

- **Restartable.** Set a label by hand and that step runs again. That is also how you debug it.
- **Inspectable.** The set of labels on an issue or pull request *is* the complete state of the work. Nothing is hidden in workflow memory or a coordinator's head.

`agent:in-progress`, `agent:review-requested`, `agent:changes-requested`, `agent:review-passed`, `agent:needs-human`. You can see where every piece of work is standing, and you can move it, without attaching a debugger to anything.

This is the same argument I made about [observability in human systems]({% post_url 2026-02-23-people-as-a-system-observability-in-human-systems %}), arriving from the opposite direction. An autonomous system without externalised state is not autonomous. It is opaque. And opaque systems get switched off the first time they surprise someone.

The loop also has a hard stop: three review rounds without convergence and it applies `agent:needs-human` and walks away. Unbounded self-correction is not resilience. It is an unbounded bill.

---

## The Second Experiment: Knowledge That Compounds

Bolted onto the same repository is a [Karpathy-style LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — three layers with strict ownership:

| Layer | Owner | Rule |
| --- | --- | --- |
| `raw/` | Humans | **Immutable.** Add documents, never edit or delete them. |
| `wiki/` | The wiki agent | Maintained after every merge. Humans do not hand-edit it. |
| `CLAUDE.md` | Humans | The schema and the binding contract. |

After every merge, an agent folds what changed into `wiki/` — architecture, features, concepts, decision records. The instruction is **integrate, do not append.** No "Update:" paragraphs bolted onto the end. Revise the pages the change actually affects, and when a page now contradicts the code, correct it *and* record what changed. Superseded understanding is information.

`raw/` being immutable is the load-bearing part. It is the audit trail no agent can quietly revise to agree with itself.

The wiki currently holds twelve pages, including three architecture decision records — and the ADRs record what was **rejected** and why, which is the part the code can never tell you.

---

## What Actually Broke

The gates were the interesting design work. The failures were all plumbing, and they were more instructive than the design.

**A pull request opened with the default CI token does not trigger other workflows.** GitHub does this deliberately, to stop infinite loops. The consequence in an agent chain is brutal: the implementation agent opens a pull request, and the review agent *never runs*. No error. No failed job. A red X nowhere. The loop just silently stops, and you discover it by wondering why nothing happened. It needs an explicit personal access token, and that is now written down as a decision record rather than folklore.

**An identity cannot approve its own pull request.** Both the implementer and the reviewer authenticate as the same token, so the review is a comment plus a label, not a formal approval — and branch protection therefore cannot require reviewers, or the loop deadlocks. Real two-identity separation needs the reviewer to run as a separate GitHub App. That is a known, documented limitation, not a solved problem.

**Enabling commit signing silently invalidated my own instructions.** Commits made through the GitHub API are signed and show as verified — excellent. They also never touch `git commit` locally, which means **local pre-commit hooks never fire for agent commits at all.** Every prompt telling agents to run `git commit` was suddenly wrong, and every hook I thought was protecting me was decorative. Nothing failed loudly. I found it by reasoning about the mechanism, which is the worst way to find things.

**And the first genuine failure was a cryptic `exit code 4`** from a CLI with an empty token. Unhelpful for me; a wall for anyone else trying the repository. It now fails with a preflight check that names the missing secret, says why it is required, and tells you where to create it.

That last one is the general lesson. In an autonomous system, **the error message is a user interface** — and often the only one anybody sees.

---

## What This Does Not Prove

I would rather state the limits than have someone else discover them.

- **The domain is trivial by design.** Arithmetic has no ambiguity, no legacy, no cross-cutting concerns, no production data. Everything hard about real software is absent.
- **The reviewer and the implementer share an identity and a model.** A model reviewing its own output shares its blind spots. The mechanical gates are doing the real work; the reviewing agent is the softest link in the chain.
- **The gates are only as good as the requirement.** Vague acceptance criteria produce a green tick on the wrong feature, verifiably and efficiently. The [four categories of acceptance criteria]({% post_url 2020-12-31-the-four-categories-acceptance-criteria %}) turn out to be a prerequisite for automation, not a nicety.
- **Nothing here removes accountability.** It relocates it. Someone still owns the gates, and that someone is human.

---

## The Leadership Perspective

Strip out the .NET and the GitHub Actions, and this experiment is about something I keep running into with human teams.

Autonomy does not fail because people are careless. It fails because the system granting the autonomy has no way to verify the process it asked for — so the only options left are trusting a report or reading every diff. One does not scale. The other is not trust.

That is the same trap, whether the delegate is an agent or an engineer:

> **You cannot review your way to autonomy. You have to design your way there.**

Three things transfer directly out of this repository and into how I think about organisations:

1. **Verify the artefact, not the claim.** "We do TDD" is a report. A commit that provably failed is a fact. Design for facts.
2. **Never let the delegate own the gate.** [Accountability is designed, not enforced]({% post_url 2026-02-10-people-as-a-system-designing-for-accountability %}), and it collapses the moment the party being measured controls the measure.
3. **Make state visible from outside.** If the only way to know where the work stands is to ask the thing doing it, you have not delegated. You have just moved the bottleneck.

The calculator is not the point. The calculator was never the point.

**What I wanted to know was whether autonomy can be earned mechanically rather than asserted — and so far, the answer is yes, but only exactly as far as your gates reach.**

---

*The repository is public, MIT-licensed, and set up so you can clone it and watch the loop run: [github.com/aravind666/calculator-with-llm-wiki](https://github.com/aravind666/calculator-with-llm-wiki). If you break it in an interesting way, open an issue — appropriately enough, an agent will probably be the one to answer.*
