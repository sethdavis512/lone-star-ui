# Lone Star UI

[![npm version](https://img.shields.io/npm/v/lone-star-ui)](https://www.npmjs.com/package/lone-star-ui)
[![license](https://img.shields.io/npm/l/lone-star-ui)](./LICENSE)

A React 19 component library built with TypeScript, Tailwind CSS 4, and CVA (Class Variance Authority). Publishes ESM-only to npm with full type declarations.

![Storybook user interface](./storybook-example.png)

## Design Inspiration

[Allan Peter's Austin TX Logo rebrand](https://www.instagram.com/p/DOeeju3EnLi)

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

## Theming

All design tokens are CSS custom properties, so you can override them in your own stylesheet:

```css
:root {
  --color-sky: oklch(60% 0.20 250);
  --color-longhorn: oklch(75% 0.15 50);
  --color-pecan: oklch(40% 0.05 60);
  --color-bluebonnet: oklch(50% 0.20 270);
  --color-mesa: oklch(95% 0.01 80);
  --color-prickly-pear: oklch(65% 0.20 340);
  --color-surface: #fafafa;
  --font-slab: 'Inter', sans-serif;
}
```

### Available tokens

| Token | Default (light) | Description |
| --- | --- | --- |
| `--color-sky` | `oklch(68% 0.17 205)` | Primary teal/turquoise |
| `--color-longhorn` | `oklch(71% 0.17 65)` | Burnt amber accent |
| `--color-pecan` | `oklch(35% 0.07 55)` | Warm brown — text/borders |
| `--color-bluebonnet` | `oklch(52% 0.19 282)` | Violet — primary actions |
| `--color-mesa` | `oklch(92% 0.02 78)` | Sandstone — neutral backgrounds |
| `--color-prickly-pear` | `oklch(62% 0.22 345)` | Pink-magenta — destructive/accent |
| `--color-surface` | `#ffffff` | Page/card background |
| `--font-slab` | `'Zilla Slab', Georgia, serif` | Heading/display font |

Dark mode tokens are automatically redefined when the `.dark` class is applied.

### Fonts

The default font (Zilla Slab) is **not** loaded automatically. To use it, either:

```css
@import 'lone-star-ui/fonts';
```

Or add a `<link>` tag to your HTML, or override `--font-slab` with your own font.

### Variant utilities

CVA variant configs are exported so you can apply library styles to custom elements:

```tsx
import { buttonVariants } from 'lone-star-ui';

<a href="/login" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
  Log in
</a>
```

The `cva` function and `VariantProps` type are also re-exported for building your own variant-driven components:

```tsx
import { cva, type VariantProps, cn } from 'lone-star-ui';
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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started.

## License

[MIT](./LICENSE)
