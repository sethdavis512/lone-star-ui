---
"lone-star-ui": patch
---

Add type stubs for CSS subpath exports (`./styles`, `./theme`, `./fonts`) so TypeScript with `moduleResolution: bundler` / `nodenext` can resolve side-effect imports like `import 'lone-star-ui/styles'`. Also exposes `./styles.css`, `./theme.css`, `./fonts.css` aliases for bundlers that prefer explicit extensions.
