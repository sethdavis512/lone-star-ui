# Contributing to Lone Star UI

Thanks for your interest in contributing! This guide will help you get set up and familiar with the project conventions.

## Prerequisites

- [Bun](https://bun.sh/) (v1.2+)
- [Node.js](https://nodejs.org/) (v20+)
- Git

## Getting Started

1. Fork the repository and clone your fork:

   ```bash
   git clone https://github.com/<your-username>/lone-star-ui.git
   cd lone-star-ui
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start Storybook to see components in action:

   ```bash
   bun run storybook
   ```

4. Run the build to make sure everything works:

   ```bash
   bun run build
   ```

## Project Structure

```
src/
  components/
    <Name>/
      <Name>.tsx           # Component implementation
      <Name>.stories.tsx   # Storybook stories + play tests
      index.ts             # Barrel export
  styles.css               # Tailwind config + design tokens
  utils/
    cn.ts                  # Class name merging (clsx + twMerge)
  index.ts                 # Public API barrel export
```

## Component Conventions

- **Base UI primitives** (`@base-ui/react`) are used as the root element where available (Button, Input, Avatar). Components without a Base UI equivalent use plain HTML elements.
- **CVA** (Class Variance Authority) defines the variant API (`variant`, `size`, etc.).
- **`cn()` utility** merges base classes with consumer `className` overrides.
- **Disabled states** use `data-[disabled]:` Tailwind modifier (Base UI sets `data-disabled` instead of `:disabled`).
- **Dark mode** uses Tailwind's `dark:` modifier. The dark variant is defined via `@custom-variant` in `src/styles.css`.
- Props extend Base UI component props plus CVA's `VariantProps`.

## Development Commands

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `bun run storybook`      | Start Storybook dev server (port 6006) |
| `bun run build`          | Build the library                      |
| `bun run dev`            | Build in watch mode                    |
| `bun run typecheck`      | Type-check without emitting            |
| `bun test`               | Run unit tests                         |
| `bun run build-storybook`| Build static Storybook                 |

## Making Changes

1. Create a branch from `main`:

   ```bash
   git checkout -b feat/my-change
   ```

2. Make your changes following the conventions above.

3. Verify your work:

   ```bash
   bun run typecheck
   bun run build
   ```

4. Check your component in Storybook — every component should have stories.

5. Commit with a clear message:

   ```bash
   git commit -m "feat: add FooBar component"
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, etc.).

## Pull Requests

- Keep PRs focused — one feature or fix per PR.
- Include or update Storybook stories for any component changes.
- Make sure `bun run typecheck` and `bun run build` pass.
- Describe what changed and why in the PR description.

## Design Tokens

The project uses a Texas-inspired color palette defined as CSS custom properties in oklch color space. See `src/styles.css` for the full token list (`--color-sky`, `--color-longhorn`, `--color-bluebonnet`, etc.).

## Questions?

Open an issue or start a discussion on GitHub. We're happy to help!
