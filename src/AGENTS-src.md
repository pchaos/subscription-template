# src/ Directory Guide

## OVERVIEW

Core TypeScript source code for GKD subscription rules and configuration.

## STRUCTURE

```
src/
├── apps/                 # Per-app rule definitions (one file per app)
├── subscription.ts       # Main subscription entry point
├── globalGroups.ts       # Global rule groups (cross-app)
└── categories.ts         # Rule category definitions
```

## WHERE TO LOOK

| Task | File | Notes |
|------|------|-------|
| Change subscription ID | `subscription.ts` | Must update from template default |
| Add app rules | `apps/` directory | Create new `.ts` file per app |
| Modify global rules | `globalGroups.ts` | Rules that apply across apps |
| Update categories | `categories.ts` | Rule categorization |

## CONVENTIONS

- **App file naming**: Reverse domain notation (e.g., `com.tencent.mm.ts`)
- **Exports**: Always use `export default` for main definitions
- **Imports**: Use GKD-kit DSL functions (`defineGkdSubscription`, etc.)
- **Strings**: Single quotes only (ESLint enforced)

## ANTI-PATTERNS

- **DO NOT** use double quotes
- **DO NOT** omit `export default`
- **NEVER** import from outside `src/` or use absolute imports

## UNIQUE STYLES

- App modules follow package-name convention with dots
- Each app file is self-contained with its own rule definitions
- Global groups file typically empty initially (add as needed)
