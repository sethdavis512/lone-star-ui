# lone-star-ui

## 0.11.0

### Minor Changes

- ab871c0: Add Textarea component with variant (default, error) and size (sm, md, lg) support

### Patch Changes

- 8ec6161: Add type stubs for CSS subpath exports (`./styles`, `./theme`, `./fonts`) so TypeScript with `moduleResolution: bundler` / `nodenext` can resolve side-effect imports like `import 'lone-star-ui/styles'`. Also exposes `./styles.css`, `./theme.css`, `./fonts.css` aliases for bundlers that prefer explicit extensions.
- 8ec6161: Fix Drawer import for @base-ui/react 1.3+ — the namespace export was renamed from `DrawerPreview` to `Drawer` when it graduated from preview. Bumped peer to 1.4.1.

## 0.2.2

### Patch Changes

- 536465a: Fix runtime crash by using production JSX transform instead of dev-only jsxDEV

## 0.2.1

### Patch Changes

- 2c061e7: Fix CI build producing empty bundle by pinning Bun to 1.2.18 (Bun 1.3.x produces broken Bun.build output)

## 0.2.0

### Minor Changes

- 13b4d42: Add Badge, Alert, and Avatar components to the design system, showcasing all six Texas color tokens (sky, longhorn, pecan, bluebonnet, mesa, prickly-pear).
