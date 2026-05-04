# Kitchen Session Checkpoint

## Goal
- Setup, fix errors, and prepare web-profile portfolio app with Sanity CMS integration for production deployment.

## Constraints & Preferences
- Use webpack instead of Turbopack due to Windows crash (0xc0000142).
- Do not commit `.env.local` (tracked in `.gitignore`).
- Keep JSON fallback files as production data source.
- File naming convention for checkpoints: `checkpoint-YYYY-MM-DD.md`.

## Progress
### Done
- Pulled latest from remote master branch.
- Created `.env.local` with `NEXT_PUBLIC_SANITY_PROJECT_ID=5m93ylii`.
- Renamed checkpoint: `.kitchen/last-checkpoint.md` → `.kitchen/checkpoint-2026-05-04.md`, then restored old content to checkpoint and created new `last-checkpoint.md` with session updates.
- Fixed Turbopack error: changed `dev` script to `next dev --webpack`.
- Fixed import path: `@/src/content/*.json` → `@/content/*.json` in `src/lib/sanity.ts`.
- Fixed hydration mismatch: added `suppressHydrationWarning` to `<body>` in `src/app/layout.tsx`.
- Fixed deprecation: replaced `imageUrlBuilder` default import with `createImageUrlBuilder` named import in `src/lib/sanity.ts`.
- Updated all JSON content files with production data: `src/content/hero.json`, `about.json`, `projects.json`, `contact.json`.
- Synced component default data in `professional-hero.tsx`, `professional-about.tsx`, `professional-projects.tsx`, `professional-contact.tsx`.
- Created Sanity seed script: `scripts/seed-sanity.ts` with `npm run seed` command.
- Installed dev dependencies: `tsx`, `dotenv`.
- Verified app runs successfully on `localhost:3000`.

### In Progress
- Commit and push to master branch for Vercel auto-deploy.

### Blocked
- (none)

## Key Decisions
- Switched from Turbopack to webpack due to Windows-specific crash during CSS processing (exit code 0xc0000142).
- Used JSON fallback files as primary production data source since Sanity dataset is not yet populated.
- Kept `@/*` path alias as-is (points to `./src/*`) and fixed incorrect `@/src/` imports instead of changing tsconfig.

## Next Steps
1. Generate `SANITY_API_WRITE_TOKEN` in Sanity dashboard and run `npm run seed`.
2. Add Sanity env vars to Vercel dashboard.
3. Verify Vercel deployment.

## Critical Context
- Next.js 16.2.4 with webpack dev server.
- Sanity project ID: `5m93ylii`, dataset: `production`.
- `USE_SANITY` flag in `src/lib/sanity.ts` checks if `NEXT_PUBLIC_SANITY_PROJECT_ID` is set and not `"your-project-id"`; falls back to JSON files on fetch failure.
- Browser extension `cz-shortcut-listen` causes hydration mismatch; suppressed via `suppressHydrationWarning`.
- `@sanity/image-url` default export deprecated; use `{ createImageUrlBuilder }`.
- Content JSON files are the source of truth for fallback data and seed script.

## Relevant Files
- `.env.local`: Environment variables (ignored from git).
- `package.json`: Dev script changed to `next dev --webpack`, added `seed` script.
- `src/lib/sanity.ts`: CMS fetch layer, fixed imports and deprecation.
- `src/app/layout.tsx`: Added `suppressHydrationWarning` to body.
- `src/content/*.json`: Production fallback data (hero, about, projects, contact).
- `src/components/sections/professional-*.tsx`: Component default data synced with JSON.
- `scripts/seed-sanity.ts`: Sanity dataset population script.
- `.kitchen/last-checkpoint.md`: Current session documentation.