# `.agents/` Planning + Execution System (ROADMAP → EPIC → TASK)

This directory defines **how work is planned, executed, verified, and closed** in this repo.
For repo-level onboarding and guardrails, see `AGENTS.md`. For platform intent and structural truths, see `SPEC.md`.

The workflow is **TASK-centric**: TASKs are the unit of execution; ROADMAP ordering is authoritative.

## Assets-first doctrine
- Assets or it didn't happen: every TASK must name tangible build outputs and how to produce them.
- `ASSETS.md` is the source of truth for expected + produced distribution artifacts.
- Acceptance criteria must include asset verification steps; update `ASSETS.md` when assets are added or changed.

## Roles (two-agent split)

### `codex-2` (Ops/QA/Docs) — planning + verification layer
- Owns `.agents/**` authoring (ROADMAP/EPIC/TASK scope), templates, and workflow policy.
- Owns documentation and QA harness/plans/compliance gates.
- Reviews `codex-1` completion packets against Acceptance criteria and files follow-up TASKs.
- May implement small test-only changes when no refactor is required; otherwise file a TASK for `codex-1`.

### `codex-1` (Builder) — implementation layer
- Owns product implementation and tests for the active milestone.
- Does **not** change ROADMAP/EPIC/TASK scope (Goal/Deliverables/Acceptance) unless the operator explicitly directs.
- Updates TASK `Recon` during implementation.
- Performs lifecycle close-out: move TASK/EPIC files, mark ROADMAP checkboxes complete, append Closure notes.

### Management Codex In Charge (operator-designated)
- Acts as the coordinator for multi-agent execution and QA gating.
- Only this role may spawn/terminate workers or manage tmux automation.
- Delegates scoped TASKs to workers and validates completion packets.

### Policy A (multi-agent default)
- Workers may update `Recon` and `Closure`, move their TASK to `.agents/tasks/closed/`, and update the ROADMAP checkbox for assigned tasks.
- Management Codex performs final QA gating and merges worker branches into `main`.
  - This is the only approved scope for worker edits under `.agents/**`.

## Merge-conflict guardrails (directory ownership)

To avoid merge hell, changes are scoped by directory:

- `.agents/AGENTS.md` and `.agents/templates/**`: `codex-2` only.
- `.agents/roadmaps/**`:
  - `codex-2` authors roadmap content and ordering.
  - `codex-1` may update checkboxes (`[ ]` → `[x]`) and move ROADMAP files from `open/` → `closed/` during close-out.
- `.agents/epics/**`:
  - `codex-2` authors epic content (Objective/Scope/Success Criteria/Non-Goals).
  - `codex-1` may update `status` and move EPIC files from `open/` → `closed/` during close-out.
- `.agents/tasks/**`:
  - `codex-2` authors task scope (Goal/Deliverables/Acceptance).
  - `codex-1` may append to `Recon` and `Closure`, and move TASK files from `open/` → `closed/` during close-out.

If a change crosses these boundaries, `codex-2` files a TASK that explicitly grants scope and names the owner.

## Invariants vs preferences

### Invariants (must exist for the workflow to function)
- A single active ROADMAP exists in `.agents/roadmaps/open/` and is treated as authoritative ordering.
- Every executable unit of work has a TASK file under `.agents/tasks/open/<namespace>/`.
- Every TASK references exactly one EPIC (by ID) and includes clear `Deliverables` and `Acceptance`.
- Every TASK includes an explicit asset list and updates `ASSETS.md` when assets change or are introduced.
- Every ROADMAP item references a TASK file path and tracks completion via checkboxes.
- Close-out moves TASKs from `open/` → `closed/`, appends a Closure note, and updates the ROADMAP checkbox.
- Scope control: only `codex-2` changes `Goal`/`Deliverables`/`Acceptance` once a TASK is “in execution”.

### Preferences (defaults; can be changed without breaking the system)
- Serial numbers are zero-padded to three digits (`001`); any sortable convention is acceptable if consistent.
- Branch naming (e.g., `task/<namespace>/<nnn>-<slug>`) and commit conventions are recommended but not required.
- EPICs may optionally include an explicit task checklist; the ROADMAP is still the authoritative ordering.

## Directory layout

- `.agents/roadmaps/open/` — exactly one active roadmap file
- `.agents/roadmaps/closed/` — completed roadmaps (versioned filenames)
- `.agents/epics/open/` — active epics
- `.agents/epics/closed/` — completed epics
- `.agents/tasks/open/<namespace>/` — executable tasks grouped by namespace
- `.agents/tasks/closed/` — completed tasks
- `.agents/templates/` — schemas/templates for authoring ROADMAP/EPIC/TASK

## Naming conventions

- ROADMAP: `ROADMAP.<project>.<slug>.md`
- EPIC: `EPIC.<namespace>.<nnn>.<slug>.md`
- TASK: `TASK.<namespace>.<nnn>.<slug>.md`

Where:
- `<namespace>` is thematic and stable (e.g., `core`, `ops`, `lineage`).
- `<nnn>` is a serial indicating intended implementation order within the namespace.
- `<slug>` is kebab-case.

## Document schemas (required structure)

Canonical templates live in `.agents/templates/`.

### ROADMAP
- Top-of-file metadata block:
  - `Doc type: \`ROADMAP\``
  - `Supersedes:` list (optional; file paths or IDs)
- Required sections:
  - `Scope and assumptions`
  - `Global gates`
  - `Decision needed` (when policy is ambiguous)
  - One or more ordered phases listing checklist items that reference TASK paths.

### EPIC
- Top-of-file metadata block:
  - `Namespace: \`<namespace>\``
  - `Slug: \`<slug>\``
  - `Status: open|closed`
- Required sections:
  - `Objective`
  - `Scope`
  - `Success criteria`
  - `Non-goals`
  - `Guardrails`

### TASK
- YAML front matter:
  - Required: `title`, `epic`, `impact`, `effort`, `suggestion`, `tags`, `depends_on`, `blocks`, `owner`
- Conventions:
  - `title` matches the TASK ID (and filename).
  - `impact`/`effort` use `LOW|MEDIUM|HIGH`.
  - `depends_on`/`blocks` are lists of TASK IDs (not file paths).
- Required sections:
  - `Goal`
  - `Deliverables`
  - `Assets`
  - `Acceptance`
  - `Recon`
  - `Closure` (added/filled at close-out)

## Execution workflow

### Canonical roadmap
Use the single ROADMAP file in `.agents/roadmaps/open/` as the authoritative execution order unless the operator explicitly directs otherwise.

### Operator approval semantics
- Default: treat TASK close-out as requiring explicit operator approval.
- If the operator says **“operate autonomously”** (or equivalent), treat that as **operator approval** to:
  - run QA gates (`make lint`, `make test`, `make dryrun`) as needed
  - commit changes
  - perform TASK close-out steps (ROADMAP checkbox updates, open→closed moves, Closure notes, and EPIC close-out when empty)

### 0) Preconditions
- Working tree is clean before starting a TASK (no unrelated local changes).
- If a clean tree is not possible, explicitly isolate changes so close-out remains atomic.
- For parallel Codex workers on submodule work, use full repo clones under `.workers/` to avoid shared submodule worktree conflicts.

### 1) Select work (ROADMAP-first)
- If asked to “pick next roadmap item”: open the canonical ROADMAP and choose the first unchecked TASK.
- If asked to implement a specific TASK: confirm it appears on the active ROADMAP (or note explicitly if it does not).
- Execute **one TASK at a time** in linear order; do not start the next TASK until the current TASK is verified and closed out.
- Read the EPIC, then the TASK, then relevant repo docs (`SPEC.md`, `Makefile`, code).

### 2) Implement (scope discipline)
- Implement until `Deliverables` and `Acceptance` are satisfied.
- Record discoveries in `Recon` (paths, commands, edge cases, decisions).
- Keep changes minimal and focused; file follow-up TASKs instead of expanding scope.

### 3) Verify (evidence)
- Stop making functional changes (“code freeze”).
- Run the repo’s lint/tests/dry-run gates appropriate to the TASK.
- Prefer `make lint`, `make test`, and `make dryrun` as the default gates for this repo.
- Workers must run non-destructive tests and manual verification steps whenever feasible; if skipped, state the reason in Recon/Completion.
- Verify the asset(s) listed in the TASK exist or can be produced from the documented build commands.

### 4) Close-out (after operator approval)
- Update ROADMAP checkbox to `[x]`.
- Move TASK file from `.agents/tasks/open/<namespace>/` → `.agents/tasks/closed/`.
- Append a `Closure` note with timestamp, branch (if used), and a 1–3 bullet summary.
- If the EPIC has no remaining open tasks, move it to `.agents/epics/closed/` and set `status: closed`.

### Branching + integration (standard)
- Workers use epic-scoped branches: `epic/<slug>`.
- Push to origin and request integration via the Management Codex.
- Management Codex merges to `main` after QA gates pass.

## Completion packets (from `codex-1`)

At the end of each milestone (or when requested), `codex-1` provides a concise completion packet:
- What changed (high-level) and which TASKs were closed.
- How to run/verify (exact commands + expected outputs).
- Known gaps or deferred work (with proposed follow-up TASK IDs).
- Any non-obvious operational notes (permissions, prerequisites, safety caveats).
