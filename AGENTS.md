# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-22
**Commit:** See `git rev-parse HEAD`
**Branch:** See `git branch --show-current`

## OVERVIEW

GKD subscription template for building custom app rule subscriptions. TypeScript-based project using GKD-kit tooling for defining UI automation rules.

## STRUCTURE

```
./
├── src/                    # Source code (TypeScript)
│   ├── apps/              # Per-app rule definitions
│   ├── subscription.ts    # Main subscription config
│   ├── globalGroups.ts    # Global rule groups
│   └── categories.ts      # Rule categories
├── scripts/               # Build & check scripts
├── dist/                  # Build output (generated)
├── assets/                # Static assets (screenshots)
└── .github/workflows/     # CI/CD actions
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Subscription ID/name | `src/subscription.ts` | Must change from template default |
| App-specific rules | `src/apps/` | One file per app (e.g., `com.tencent.mm.ts`) |
| Global rules | `src/globalGroups.ts` | Cross-app rules |
| Build config | `package.json` | Scripts, dependencies |
| Type definitions | `tsconfig.json` | Strict mode enabled |
| Linting rules | `eslint.config.mjs` | Single quotes, unused-imports |
| Formatting | `.prettierrc.mjs` | 2-space, trailing commas |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `defineGkdSubscription` | Function | `src/subscription.ts` | Main subscription export |
| `defineGkdGlobalGroups` | Function | `src/globalGroups.ts` | Global rule definitions |
| `defineGkdCategories` | Function | `src/categories.ts` | Category definitions |
| `batchImportApps` | Function | Imported from `@gkd-kit/tools` | Auto-import app modules |

## CONVENTIONS

- **File naming**: Reverse domain notation for apps (e.g., `com.tencent.mm.ts`)
- **Module structure**: ESM exports with `export default`
- **String style**: Single quotes enforced by ESLint
- **Trailing commas**: Required (all positions)
- **Tab width**: 2 spaces
- **Type checking**: Strict mode, `noUnusedLocals: true`

## ANTI-PATTERNS (THIS PROJECT)

- **DO NOT** leave subscription ID as `2339999999` (template default)
- **DO NOT** use double quotes (ESLint enforces single quotes)
- **DO NOT** omit trailing commas (Prettier auto-adds)
- **NEVER** commit `dist/` directory (gitignored)
- **NEVER** skip `pnpm install` after dependency changes

## UNIQUE STYLES

- App modules use package-name format with dots (e.g., `com.jingdong.app.mall.ts`)
- Rules defined via GKD-kit DSL functions
- TypeScript targets ESNext modules
- Pre-commit hooks run lint + format automatically

## COMMANDS

```bash
# Install dependencies
pnpm install

# Format code
pnpm format

# Lint code
pnpm lint

# Type check
pnpm check

# Build subscription
pnpm build

# Build and release (GitHub Actions)
# Run workflow: .github/workflows/build_release.yml
```

## NOTES

- Requires Node.js >= 22 (WasmGc for Java/Kotlin regex validation)
- Uses pnpm as package manager (not npm/yarn)
- GitHub Actions workflow requires "Read and write permissions" for workflows
- Subscription URL format: `https://raw.githubusercontent.com/{user}/{repo}/main/dist/gkd.json5`
- Mirror available via jsDelivr for China access
