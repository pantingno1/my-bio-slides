# open-slide — Framework Repo Guide

You are working on the **open-slide framework** — the runtime, CLI, and tooling that ship to npm.

(Slide-authoring guidance lives in the `slide-authoring` / `create-slide` skills under `apps/demo/.claude/skills/`. Use those only when editing files inside `apps/demo/slides/`.)

## Layout

pnpm + Turbo monorepo.

| Path | Package | Role |
| --- | --- | --- |
| `packages/core` | `@open-slide/core` | Runtime (viewer, present mode, inspector), Vite plugin, `open-slide` dev/build CLI. |
| `packages/cli` | `@open-slide/cli` | `npx @open-slide/cli init` scaffolder + project template. |
| `apps/demo` | private | Local consumer of `@open-slide/core` via `workspace:*`. Dogfood target — run `pnpm dev` here to exercise the framework. |
| `apps/web` | private | Marketing site (Next.js). |

Shared config: `biome.json`, `turbo.json`, `pnpm-workspace.yaml`, `tsconfig` per package.

## Workflow

```bash
pnpm dev          # turbo: runs demo against local core
pnpm build        # build all packages
pnpm typecheck    # tsc across the graph
pnpm check        # biome (format + lint + organize imports)
pnpm check:fix    # auto-fix what biome can
pnpm test         # vitest
```

Filter to one package: `pnpm core <script>` / `pnpm cli <script>`.

## Hard rules

- **Biome must pass before commit.** Run `pnpm check` (or `pnpm check:fix`). CI and the user's review both expect a clean tree.
- **If `packages/core` or `packages/cli` changes, add a changeset.** Run `pnpm changeset`, pick the right package(s) and bump (`patch` for fixes/polish, `minor` for new public API, `major` for breaking). Apps (`demo`, `web`) and root tooling do **not** need one.
- **Changeset descriptions: short and direct.** One line, present-tense, what changed from a user's perspective. Match the tone of `.changeset/*.md` already in the repo. No paragraphs, no rationale, no "this PR…".
  - Good: `Replace spinner with a hairline + sliding bar for slide and presenter loading states.`
  - Bad: `This change introduces a new loading indicator because the previous spinner felt heavy and we wanted something more subtle for presentation contexts…`
- Don't bump versions or edit `CHANGELOG.md` by hand — `changeset version` owns that.
- Don't add dependencies casually. The `core` runtime ships to users; every dep inflates install size.
- `packages/core/src/app/components/ui` is shadcn-generated and biome-ignored — leave it alone unless regenerating.
- **Slide Image Standard (Strict Requirement):** Every image in a slide deck must be 100% completely visible without clipping any text, labels, borders, or graphics. Always use `<ZoomableImage src={...} alt="..." style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }} />` from `@open-slide/core` so that clicking any image expands it to full screen, and clicking again restores it to original size. Never use `objectFit: 'cover'`, and never apply artificially cramped `maxHeight` constraints (such as 240px or 260px) on portrait or detail-rich diagrams.
- **Slide Font Size Standard (Strict Requirement):** Every slide deck must strictly enforce a minimum font size of 20px (minimum 20px, maximum 96px). Under no circumstances may any text, label, badge, caption, footnote, or page number be smaller than 20px. Key titles, headings, formulas, and emphasis points must scale up proportionally (e.g., body 20px–22px, card titles 24px–28px, page titles 48px–50px, hero titles up to 96px) to ensure crystal-clear legibility on classroom projectors and large monitors while maintaining a balanced layout on the 1920×1080 canvas.
- **Default to writing no comments.** Only add one when the WHY is non-obvious — a hidden constraint, a subtle invariant, a workaround for a specific bug, behavior that would surprise a reader. Don't explain WHAT the code does (well-named identifiers handle that), don't reference tasks/PRs/callers ("added for X", "used by Y"), don't write section-divider banners (`// ── Section ──`) or module-header descriptions, and don't leave commented-out code. If removing a comment wouldn't confuse a future reader, don't write it.

## Releasing (reference)

`pnpm release` builds `core` + `cli` and runs `changeset publish`. Triggered by the maintainer, not by agents.
