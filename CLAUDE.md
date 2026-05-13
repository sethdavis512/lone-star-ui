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

`build.ts` uses `Bun.build()` with multiple entrypoints (`src/index.ts` + every `src/components/*/index.ts` + `src/utils/cn.ts`) and `splitting: true` to produce per-component JS bundles with shared chunks. A post-build deduplication pass removes duplicate `export` statements that Bun emits when barrel re-exports overlap with inlined module exports (without this, Node's ESM loader and Vite reject the bundles). CSS is processed separately by `@tailwindcss/cli`, which compiles `src/styles.css` → `dist/styles.css` with all utility classes pre-compiled and minified. This means consumers only need `@import 'lone-star-ui/styles'` — no `@source` directive required. React, ReactDOM, and `@base-ui/react` are externalized as peer deps. `tsc` generates declaration files only. `src/fonts.css` and `src/theme.css` are copied to `dist/` as opt-in imports.

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

Package supports subpath exports for every component (kebab-case):

- `lone-star-ui` — all components, variants, utilities, and `cva`/`VariantProps` re-exports
- `lone-star-ui/button` — just Button + buttonVariants
- `lone-star-ui/badge` — just Badge + badgeVariants
- `lone-star-ui/<component>` — any component (see `package.json` exports map for full list)
- `lone-star-ui/utils` — `cn()` utility only
- `lone-star-ui/styles` — CSS stylesheet (pre-built bundle with all utilities)
- `lone-star-ui/theme` — Tailwind v4 theme preset (design tokens + dark mode) for consumers who use Tailwind themselves
- `lone-star-ui/fonts` — opt-in Google Fonts import (Zilla Slab)

CVA variant configs (`buttonVariants`, `badgeVariants`, `alertVariants`, `inputVariants`, `avatarVariants`) are exported alongside their components so consumers can apply library styles to custom elements.

### Releasing

- **Do not run `npm publish` directly.** A GitHub Actions workflow handles publishing.
- **Do not edit `version` in `package.json` directly.** Changesets owns the version.
- To ship a change:
    1. Add a changeset file: `bunx changeset` (or hand-write a markdown file in `.changeset/` with `--- "lone-star-ui": patch|minor|major ---` frontmatter and a one-line summary).
    2. Commit the changeset alongside your code change and push to `main`.
    3. The Release workflow opens (or updates) a bot PR titled `chore: version packages` that aggregates all pending changesets into the next version.
    4. Merging that PR publishes to npm.
- Changeset bump types: `patch` for bug fixes / docs / build tweaks, `minor` for new components or new public API, `major` for breaking changes.
- **Repo setting required:** Settings → Actions → General → "Allow GitHub Actions to create and approve pull requests" must be enabled, or the bot PR step fails.

### Key Files

- `src/index.ts` — public API barrel export
- `src/styles.css` — Tailwind config + design tokens (font import removed — see `src/fonts.css`)
- `src/theme.css` — Tailwind v4 theme preset (tokens + dark mode) for consuming apps
- `src/fonts.css` — opt-in Google Fonts import for Zilla Slab
- `src/utils/cn.ts` — class name merging utility (clsx + twMerge)
- `build.ts` — Bun build script
- `vitest.config.ts` — Vitest + Storybook test config
- `.storybook/main.tsx` — Storybook config with Tailwind vite plugin
- `.storybook/preview.tsx` — Storybook decorators and theme toggle config
- `.storybook/preview.css` — Storybook-only dark mode CSS overrides
