<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Wanderlust — Agent Instructions & Project Summary

## Project Overview

**Wanderlust** is a travel/tourism web application built with Next.js 16 (App Router). The project is in early development — the home page is currently a blank canvas ready to be built out. Design assets (hero images, banners, icons) are already in `public/images/`.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.4.3 |
| Language | TypeScript | ^5 |
| Runtime | React | 19.3.0 |
| Styling | Tailwind CSS v4 | ^4 |
| Animation | tw-animate-css | ^1.4.0 |
| UI Components | shadcn (base-nova style) | ^4.23.0 |
| Base UI Primitives | @base-ui/react | ^1.9.0 |
| Icons | lucide-react | ^1.65.0 |
| Font | Josefin Sans (Google Fonts via next/font) | — |
| Syntax Highlighting | shiki | ^4.5.0 |
| Charts | recharts | ^3.8.0 |
| Carousel | embla-carousel-react | ^8.6.0 |
| Bundler | Turbopack (default) | built-in |
| Linting | ESLint 9 (core-web-vitals + typescript) | ^9 |

---

## Critical Rules for Agents

### Next.js 16 — Breaking Changes

- **Always read `node_modules/next/dist/docs/` first** before writing any Next.js code. APIs, conventions, and file structure differ significantly from Next.js 13/14/15.
- The root layout uses `LayoutProps<"/">` generic — this is a Next.js 16 convention.
- `next build` no longer runs the linter automatically (use `npm run lint` separately).
- Turbopack is the **default** bundler. Do NOT add `--turbo` flag — it is redundant.
- `cacheComponents: true` and `partialPrefetching: true` are enabled in `next.config.ts`.
- `reactCompiler: true` is enabled — do not write code that conflicts with the React Compiler (avoid mutable refs in render, manual memoization is handled automatically).

### Tailwind CSS v4

- **No `tailwind.config.js`** — Tailwind v4 is configured entirely via CSS `@theme` in `src/app/globals.css`.
- Theme tokens use **OKLCH color space** (e.g. `oklch(0.145 0 0)`).
- Import order in `globals.css`: `@import "tailwindcss"` → `@import "tw-animate-css"` → `@import "shadcn/tailwind.css"`.
- Use `@custom-variant` for dark mode — already configured as `.dark *`.

### shadcn Components

- Style: `base-nova` (NOT the default `new-york` or `default` styles from shadcn docs).
- **Install components** via: `npx shadcn@latest add <component>` from the project root.
- Component aliases:
  - `@/components` → UI components
  - `@/components/ui` → shadcn primitives
  - `@/lib/utils` → `cn()` utility (re-exported from the `cn` package)
  - `@/hooks` → custom hooks
  - `@/lib` → shared utilities

### Path Aliases

The `@/*` alias maps to `./src/*`. Always use `@/` imports — never relative paths like `../../`.

```ts
import { cn } from "@/lib/utils"          // ✅ correct
import { cn } from "../../lib/utils"      // ❌ avoid
```

---

## Project Structure

```
wanderlust/
├── public/
│   └── images/                  # Design assets — use these for UI
│       ├── Banner.png           # Hero/banner image
│       ├── CTA.png              # Call-to-action section image
│       ├── Wanderlast.png       # Primary logo/brand image
│       ├── Wanderlast-1.png     # Alternate logo/brand image
│       ├── MapTrifold.png       # Map/navigation icon
│       ├── Headset.png          # Support/contact icon
│       ├── ShieldCheck.png      # Trust/security icon
│       ├── person1.png          # Testimonial avatar 1
│       └── person2.png          # Testimonial avatar 2
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — Josefin Sans font, html/body wrapper
│   │   ├── page.tsx             # Home page — currently empty, ready to build
│   │   ├── globals.css          # Tailwind v4 config, shadcn CSS vars, OKLCH theme
│   │   └── favicon.ico
│   │
│   ├── hooks/
│   │   ├── use-mobile.ts        # useIsMobile() — breakpoint 768px
│   │   └── use-highlighted-code.ts  # useHighlightedCode(value, language) — streaming syntax highlight
│   │
│   └── lib/
│       ├── utils.ts             # cn() — className merge utility
│       └── highlighter.tsx      # Shiki-based code highlighter (lazy language loading)
│
├── next.config.ts               # Next.js config — cacheComponents, partialPrefetching, reactCompiler, turbopack
├── tsconfig.json                # TypeScript — strict mode, @/* alias → src/*
├── components.json              # shadcn config — base-nova style, lucide icons, RSC enabled
├── eslint.config.mjs            # ESLint 9 flat config — core-web-vitals + typescript
└── AGENTS.md                    # This file
```

---

## Available Hooks & Utilities

### `useIsMobile()` — `@/hooks/use-mobile`
Returns `true` when viewport width < 768px. Uses `window.matchMedia`.  
> Must be used in a **Client Component** (`"use client"`).

### `useHighlightedCode(value, language)` — `@/hooks/use-highlighted-code`
Streams syntax-highlighted React nodes per line using Shiki. Lazy-loads language grammars.  
Supported languages: `bash`, `css`, `diff`, `html`, `javascript`, `json`, `jsx`, `markdown`, `python`, `sql`, `tsx`, `typescript`, `yaml` (and common aliases).  
> Must be used in a **Client Component**.

### `cn(...inputs)` — `@/lib/utils`
Merges Tailwind class names. Re-exported from the `cn` package.

### `highlightCode(code, language)` — `@/lib/highlighter`
Server-safe async function. Returns an array of React nodes (one per line) or `null` for unsupported languages. Themes: `github-light` / `github-dark`.

---

## Development Commands

```bash
npm run dev      # Start dev server (Turbopack, localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Design System Notes

- **Font**: Josefin Sans — already applied globally via `className` on `<html>`. Do not load additional fonts without updating the layout.
- **Colors**: Use CSS variable tokens (`bg-background`, `text-foreground`, `text-primary`, etc.) — not hardcoded Tailwind color classes. Variables are defined in `globals.css`.
- **Dark mode**: Class-based (`.dark`). Variants use `@custom-variant dark (&:is(.dark *))`.
- **Border radius**: Token-based — `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, etc. map to `--radius` CSS variable multiples.
- **Images**: Use `next/image` (`<Image />`) for all images in `public/images/`. Never use raw `<img>` tags.

---

## What Still Needs to Be Built

The home page (`src/app/page.tsx`) is empty. Based on available assets, the intended UI likely includes:

- **Hero / Banner section** — using `Banner.png` or `Wanderlast.png`
- **Features / Trust section** — using `MapTrifold.png`, `Headset.png`, `ShieldCheck.png`
- **CTA (Call-to-Action) section** — using `CTA.png`
- **Testimonials section** — using `person1.png`, `person2.png`
- **Navigation / Header**
- **Footer**

Suggest placing shared UI (Navbar, Footer) as components in `src/components/` and page sections in `src/app/_components/` or `src/components/sections/`.
