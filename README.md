# lone-star-ui

A React 19 component library built with TypeScript, Tailwind CSS 4, and CVA (Class Variance Authority). Publishes ESM-only to npm with full type declarations.

## Installation

```bash
bun install lone-star-ui
```

Peer dependencies: `react`, `react-dom`, and `typescript`.

## Usage

Import components and the required stylesheet:

```tsx
import "lone-star-ui/styles";
import { Button } from "lone-star-ui";
```

Subpath imports are available for tree-shaking:

```tsx
import { Button } from "lone-star-ui/button";
```

## Development

```bash
bun install              # Install dependencies
bun run build            # Build library (Bun.build + tsc declarations)
bun run dev              # Build in watch mode
bun run storybook        # Start Storybook dev server on port 6006
bun run build-storybook  # Build static Storybook
bun run typecheck        # Type-check without emitting
```

## Architecture

Each component lives in `src/components/<Name>/` with three files:

- `<Name>.tsx` — implementation using CVA for variants + `cn()` for class merging
- `<Name>.stories.tsx` — Storybook stories with interactive `play` tests
- `index.ts` — barrel export

Styling uses Tailwind CSS 4 with CSS custom properties in oklch color space. Consumers must import `lone-star-ui/styles` for Tailwind classes to work.

## License

MIT
