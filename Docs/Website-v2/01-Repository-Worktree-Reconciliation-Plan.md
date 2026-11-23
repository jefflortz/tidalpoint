# Website 2.0 Repository and Worktree Reconciliation Plan

**Status:** Planning only — do not execute until approved  
**Baseline date:** November 23, 2026

## Current state

- Production branch: `main` at `f4f539b8` (`Update Jeff Lortz headshots`).
- Production deployment: Vercel deployment `dpl_8EChdpFsVpvuGK5pS59ZGjxpJiCF`, status `READY`.
- Active project worktree: branch `codex/plymouth-location-page` at `8c01348`.
- The feature branch is one production commit behind `main`; the later commit changes only the two Jeff Lortz headshot files.
- Uncommitted website work exists in:
  - `studio-ts/src/app/page.tsx`
  - `studio-ts/src/app/about/page.tsx`
  - `studio-ts/src/app/clients/page.tsx`
  - `studio-ts/src/app/services/page.tsx`
  - `studio-ts/src/components/RegionalServiceLinks.tsx` (untracked)
- The audit report and Website 2.0 planning documents are the only new authorized documentation changes.
- A stale/prunable detached worktree exists at `/private/tmp/tpp-fast-impact-seo`.

## Principle

Do not merge, stash, reset, reformat, or overwrite the existing uncommitted work. First preserve it as a reviewable patch/commit on its current branch, then start Website 2.0 from the production commit and selectively port only approved improvements.

## Proposed sequence

1. **Freeze and record the current state**
   - Record `git status`, branch heads, worktree list, and production deployment ID.
   - Export a patch of the five unfinished website changes for backup and review.
   - Do not include Website 2.0 positioning in that preservation commit.

2. **Review unfinished local work by intent**
   - SEO metadata changes: evaluate against the new page-intent map.
   - Regional internal links: likely reusable.
   - Formatting-only changes: exclude from selective porting unless required.
   - Old-positioning copy: do not merge into Website 2.0 merely because it is newer.

3. **Preserve the unfinished work**
   - Preferred: commit it on `codex/plymouth-location-page` with a message identifying it as pre-v2 SEO/local-link work.
   - Alternative: retain an immutable patch plus a named backup branch if the changes are not ready for a commit.
   - Owner approval is required before either action because this brief authorizes planning only.

4. **Create the Website 2.0 branch from production**
   - Proposed branch: `feature/website-v2`.
   - Base: `main` at `f4f539b8` or the then-current verified production commit.
   - Create a dedicated worktree so Website 2.0 does not share an index with unfinished SEO work.

5. **Port approved pre-v2 changes selectively**
   - Prefer small, path-specific commits or a manual reimplementation.
   - Reuse `RegionalServiceLinks` only after confirming its destinations match the final sitemap.
   - Do not cherry-pick the entire dirty change set without content review.

6. **Establish preview and review controls**
   - Vercel preview only; no production aliases.
   - Sanity draft/preview content should use existing draft-mode controls.
   - Separate environment variables for preview where the integration supports it.
   - HubSpot test submissions must be clearly tagged and must not enter production automations until approved.

7. **Merge discipline**
   - One approved phase per pull request where practical.
   - Require URL/redirect, analytics, accessibility, and performance checklists before merge.
   - Rebase or merge the latest `main` before final launch QA.

## Decision table for current uncommitted changes

| Change group | Proposed treatment | Reason |
|---|---|---|
| About metadata | Reassess, then rewrite | Still targets Operating Partner intent |
| Clients metadata/copy | Do not port as-is | Conflicts with new baseline customer |
| Services metadata/copy | Do not port as-is | Conflicts with two approved offers |
| Homepage metadata/internal links | Port only durable technical improvements | Homepage intent is changing materially |
| `RegionalServiceLinks` | Candidate for reuse | Supports location equity if final links remain valid |
| Formatting-only diffs | Exclude or isolate | Reduces review noise |

## Risks and controls

- **Lost unfinished work:** preserve patch/commit before new branch creation.
- **Accidental old-positioning merge:** content review before selective porting.
- **Production drift:** record the exact launch base and deployment commit.
- **Stale worktree confusion:** remove only after confirming it contains no unique work; deletion is outside this plan’s authorization.
- **Environment cross-talk:** prevent preview forms, webhooks, or cron jobs from mutating production systems.

## Approval required

- Permission to preserve the dirty work as a commit or backup branch.
- Final Website 2.0 branch name and ownership.
- Whether the stale `/private/tmp` worktree may be pruned.

