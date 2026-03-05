# Lone Star UI — Copilot Instructions

## Project Overview

`lone-star-ui` is a React 19 component library built with TypeScript, Tailwind CSS v4, CVA, and **Base UI** (`@base-ui/react`) as the accessible primitive layer. It publishes ESM-only to npm.

Key commands: `bun install` · `bun run build` · `bun run storybook` · `bun run typecheck` · `bun test`

---

## Component Authoring

### File structure

Every component lives in `src/components/<Name>/` with exactly three files:

```
src/components/<Name>/
  <Name>.tsx          # implementation
  <Name>.stories.tsx  # Storybook stories
  index.ts            # barrel export
```

After creating a new component, add its exports to `src/index.ts` under the appropriate version comment block (e.g. `// ── v0.8.0 — New primitives`).

### Base UI import pattern

Use the namespace subpath import, then reference sub-components via the namespace object:

```tsx
import { Slider } from '@base-ui/react/slider';
// → Slider.Root, Slider.Track, Slider.Thumb, etc.
```

For single-export packages (Toggle, ToggleGroup, Form) rename on import to avoid collision:

```tsx
import { Toggle } from '@base-ui/react/toggle';
// export as ToggleRoot, not Toggle
```

### Context constraint

**All Base UI sub-parts must be rendered as descendants of their `Root` component.** Sub-parts consume a React context established by `Root` — rendering them outside it throws a runtime error. This especially applies to label/value/description parts that look like they could be siblings.

```tsx
// ✅ Correct
<MeterRoot value={65}>
  <MeterLabel>Storage</MeterLabel>    // inside Root — has context
  <MeterTrack><MeterIndicator /></MeterTrack>
</MeterRoot>

// ❌ Wrong
<MeterLabel>Storage</MeterLabel>      // outside Root — throws
<MeterRoot value={65}>...</MeterRoot>
```

### Component template

```tsx
import * as React from 'react';
import { ComponentName } from '@base-ui/react/component-name';
import { cn } from '../../utils/cn';

export const ComponentNameRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ComponentName.Root>
>(({ className, ...props }, ref) => (
    <ComponentName.Root
        ref={ref}
        className={cn('base-classes-here', className)}
        {...props}
    />
));
ComponentNameRoot.displayName = 'ComponentNameRoot';
```

-   Use `React.forwardRef` for all wrapped primitives.
-   Props always extend `React.ComponentPropsWithoutRef<typeof BaseXxx>`.
-   Use `cn()` (clsx + twMerge) for every `className`.
-   **Pass-through parts** (Portal, Collection, etc.) that need no styling: `export const XPortal = X.Portal;`

### CVA variants

Use CVA when a component has multiple visual variants or sizes:

```tsx
const buttonVariants = cva({
    base: 'base-classes',
    variants: { variant: { default: '...', destructive: '...' } },
    defaultVariants: { variant: 'default' }
});
```

---

## Styling

### Design tokens (Tailwind CSS v4)

| Token          | Use                                         |
| -------------- | ------------------------------------------- |
| `pecan`        | Primary text, borders                       |
| `sky`          | Focus rings, interactive accent             |
| `longhorn`     | Warning / amber                             |
| `bluebonnet`   | Purple / primary brand                      |
| `prickly-pear` | Destructive / pink                          |
| `mesa`         | Neutral background tint                     |
| `surface`      | Adaptive panel/card background (light/dark) |

Always use `bg-surface` for card/panel backgrounds — never `bg-white`. `surface` adapts automatically in dark mode.

### Dark mode

Dark mode is class-based (`.dark`). Use `dark:` Tailwind modifier for dark-specific overrides. Base UI sets `data-disabled`, `data-checked`, `data-open`, etc. — use `data-[state]:` modifiers, not CSS pseudo-classes.

```tsx
// ✅ Correct disabled styling
'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50';
// ❌ Avoid
':disabled:opacity-50';
```

---

## Storybook

### Story categories

| Category                 | Use For                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| `Sparks/ComponentName`   | Base UI primitive wrappers                                        |
| `Kindling/ComponentName` | Composed helpers (SearchField, AvatarLabel)                       |
| `Bonfire/ComponentName`  | Page-level composed components (ProfileCard, PageHeader)          |
| `Camps/Overview`         | Wireframe page templates (placeholder skeletons, disabled states) |
| `Plains/Overview`        | Interactive pages with real seed data                             |

### Story template

```tsx
const meta: Meta<typeof MyComponent> = {
    title: 'Sparks/MyComponent',
    component: MyComponent,
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof MyComponent>;
```

---

## Releasing

**Never run `npm publish` directly.** The GitHub Actions workflow handles publishing.

To release:

1. Bump `version` in `package.json`
2. Commit and push to `main`

### Versioning

-   Bug fix → patch (`0.8.1`)
-   New component(s) or stories → minor (`0.9.0`)
-   Breaking API change → major (`1.0.0`)

---

## Key Files

| File                     | Purpose                                                     |
| ------------------------ | ----------------------------------------------------------- |
| `src/index.ts`           | Public API barrel export — update after every new component |
| `src/styles.css`         | Tailwind config + design tokens                             |
| `src/utils/cn.ts`        | `cn()` utility (clsx + twMerge)                             |
| `build.ts`               | Bun build script                                            |
| `.storybook/preview.tsx` | Storybook decorators and theme toggle                       |
