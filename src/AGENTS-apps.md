# src/apps/ Directory Guide

## OVERVIEW

Per-app GKD rule definitions - one TypeScript file per application.

## STRUCTURE

```
apps/
├── com.tencent.mm.ts            # WeChat rules
├── com.taobao.taobao.ts         # Taobao rules
├── com.jingdong.app.mall.ts     # JD.com rules
├── com.tencent.mobileqq.ts      # MobileQQ rules
└── li.songe.gkd.ts              # GKD app rules
```

## WHERE TO LOOK

| Task | Pattern | Notes |
|------|---------|-------|
| Add new app rule | Create `apps/{package.name}.ts` | Use reverse domain notation |
| Find app rules | `apps/*.ts` | Each file = one app |
| Check app structure | Existing files | Follow naming pattern |

## CONVENTIONS

- **File naming**: Exact package name with dots (e.g., `com.tencent.mm.ts`)
- **Module format**: ESM with `export default`
- **App ID**: Match filename to app package name
- **Rules structure**: Define groups array with rule metadata

## ANTI-PATTERNS

- **DO NOT** use hyphens or underscores in app file names
- **DO NOT** create subdirectories (flat structure)
- **NEVER** mix multiple apps in one file

## UNIQUE STYLES

- File names mirror Android package names exactly
- Each app file is independent and self-contained
- Rules typically target UI automation for ad-blocking or skip patterns
