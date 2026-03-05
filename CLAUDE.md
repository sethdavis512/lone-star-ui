# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**lone-star-ui** is a React 19 component library built with TypeScript, Tailwind CSS 4, CVA (Class Variance Authority), and **Base UI** (`@base-ui/react`) as the accessible primitive layer. It publishes ESM-only to npm with full type declarations.

## Commands

```bash
bun install              # Install dependencies
bun run build            # Build library (Bun.build + tsc declarations)
bun run dev              # Build in watch mode
bun run storybook        # Start Storybook dev server on port 6006
bun run build-storybook  # Build static Storybook
bun run typecheck        # Type-check without emitting
bun test                 # Run unit tests (bun:test)
```

### Testing

- **Unit tests** use `bun:test` — files at `src/**/*.test.ts`
- **Component tests** live in Storybook stories as `play` functions using `@storybook/test` (userEvent, expect, within)
- **Browser testing** runs via Vitest + Playwright (Chromium) through `vitest.config.ts`

## Architecture

### Component Pattern

Each component lives in `src/components/<Name>/` with three files:

- `<Name>.tsx` — implementation using **Base UI primitives** as the root element, CVA for variants, and `cn()` for class merging
- `<Name>.stories.tsx` — Storybook stories with interactive `play` tests
- `index.ts` — barrel export

Components follow these conventions:

- **Base UI primitives** are the root element for Button (`@base-ui/react/button`), Input (`@base-ui/react/input`), and Avatar (`@base-ui/react/avatar`). Components without a Base UI equivalent (Alert, Badge, Card) use plain HTML elements.
- **CVA variants** define the styling API (variant, size, etc.)
- **Disabled states** use `data-[disabled]:` Tailwind modifier (Base UI sets `data-disabled` attribute instead of the CSS `:disabled` pseudo-class)
- **Props extend Base UI component props** (via `React.ComponentPropsWithoutRef<typeof BaseXxx>`) plus CVA's `VariantProps`
- **`cn()` utility** (`clsx` + `twMerge`) merges base classes with consumer `className` overrides
- **`React.forwardRef`** is used on components that need DOM ref access (Input, Card)
- **Composite components** (Card) export sub-components (CardHeader, CardTitle, CardContent, CardFooter)

### Build Pipeline

`build.ts` uses `Bun.build()` to bundle `src/index.ts` → `dist/index.js` (ESM, browser target) and `src/styles.css` → `dist/styles.css`. React/ReactDOM are externalized as peer deps. `tsc` generates declaration files only.

### Styling

- Tailwind CSS 4 with CSS custom properties in `src/styles.css` (oklch color space)
- Design tokens (Texas palette): `--color-sky`, `--color-longhorn`, `--color-pecan`, `--color-bluebonnet`, `--color-mesa`, `--color-prickly-pear`, `--color-surface`
- Consumers must import `lone-star-ui/styles` for Tailwind classes to work

### Dark Mode (Stars at Night)

- Class-based toggle via `@custom-variant dark (&:where(.dark, .dark *))` in `src/styles.css`
- The `.dark` scope in `src/styles.css` redefines all design tokens for dark backgrounds
- Components use Tailwind's `dark:` modifier for dark-specific styles (e.g., `dark:bg-sky/15 dark:text-sky`)
- Storybook uses `@storybook/addon-themes` with `withThemeByClassName` in `.storybook/preview.tsx` — this is the official addon for class-based theme switching
- `.storybook/preview.css` contains Storybook-only CSS overrides (not shipped to consumers) that apply `var(--color-surface)` to the viewport and docs preview containers in dark mode

### Exports

Package supports subpath exports:

- `lone-star-ui` — all components and utilities
- `lone-star-ui/button` — just Button
- `lone-star-ui/styles` — CSS stylesheet

### Releasing

- **Do not run `npm publish` directly.** A GitHub Actions workflow handles publishing.
- To release: bump the `version` in `package.json`, commit, and push to `main`. The workflow takes it from there.

### Key Files

- `src/index.ts` — public API barrel export
- `src/styles.css` — Tailwind config + design tokens
- `src/utils/cn.ts` — class name merging utility (clsx + twMerge)
- `build.ts` — Bun build script
- `vitest.config.ts` — Vitest + Storybook test config
- `.storybook/main.tsx` — Storybook config with Tailwind vite plugin
- `.storybook/preview.tsx` — Storybook decorators and theme toggle config
- `.storybook/preview.css` — Storybook-only dark mode CSS overrides
