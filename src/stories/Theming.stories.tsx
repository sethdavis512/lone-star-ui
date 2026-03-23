import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Input } from '../components/Input';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '../components/Card';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { Avatar } from '../components/Avatar';
import { SwitchRoot, SwitchThumb } from '../components/Switch';

/* ── Token metadata ────────────────────────────────────────────── */

const tokenDocs = [
    {
        name: '--color-sky',
        tailwind: 'sky',
        swatch: 'bg-sky',
        description: 'Focus rings, interactive accents, primary links',
        example: 'border-sky text-sky bg-sky/10'
    },
    {
        name: '--color-longhorn',
        tailwind: 'longhorn',
        swatch: 'bg-longhorn',
        description: 'Warning states, amber accents, attention badges',
        example: 'text-longhorn bg-longhorn/10'
    },
    {
        name: '--color-pecan',
        tailwind: 'pecan',
        swatch: 'bg-pecan',
        description: 'Primary text color, borders, headings',
        example: 'text-pecan border-pecan/20'
    },
    {
        name: '--color-bluebonnet',
        tailwind: 'bluebonnet',
        swatch: 'bg-bluebonnet',
        description: 'Brand purple, primary action buttons',
        example: 'bg-bluebonnet text-white'
    },
    {
        name: '--color-mesa',
        tailwind: 'mesa',
        swatch: 'bg-mesa',
        description: 'Neutral background tint, subtle panels',
        example: 'bg-mesa border-mesa'
    },
    {
        name: '--color-prickly-pear',
        tailwind: 'prickly-pear',
        swatch: 'bg-prickly-pear',
        description: 'Destructive actions, error states, danger badges',
        example: 'text-prickly-pear bg-prickly-pear/10'
    },
    {
        name: '--color-surface',
        tailwind: 'surface',
        swatch: 'bg-surface border border-pecan/10',
        description:
            'Panel / card backgrounds — adapts automatically in dark mode',
        example: 'bg-surface shadow-sm'
    }
] as const;

const meta: Meta = {
    title: 'Sparks/Theming',
    parameters: { layout: 'centered' },
    tags: []
};

export default meta;
type Story = StoryObj;

/* ── Theme definitions ─────────────────────────────────────────── */

const themes = {
    'Lone Star (Default)': {},
    'Big Bend Sunset': {
        '--color-sky': 'oklch(55% 0.20 30)',
        '--color-longhorn': 'oklch(70% 0.18 55)',
        '--color-pecan': 'oklch(30% 0.05 40)',
        '--color-bluebonnet': 'oklch(45% 0.15 15)',
        '--color-mesa': 'oklch(93% 0.02 50)',
        '--color-prickly-pear': 'oklch(60% 0.25 10)',
        '--color-surface': '#fffaf5',
        '--font-slab': "'Georgia', serif"
    },
    'Gulf Coast': {
        '--color-sky': 'oklch(62% 0.12 220)',
        '--color-longhorn': 'oklch(75% 0.14 85)',
        '--color-pecan': 'oklch(32% 0.04 230)',
        '--color-bluebonnet': 'oklch(50% 0.16 250)',
        '--color-mesa': 'oklch(95% 0.01 220)',
        '--color-prickly-pear': 'oklch(58% 0.18 350)',
        '--color-surface': '#f5faff',
        '--font-slab': "'Georgia', serif"
    },
    'Hill Country Spring': {
        '--color-sky': 'oklch(60% 0.16 155)',
        '--color-longhorn': 'oklch(72% 0.15 95)',
        '--color-pecan': 'oklch(33% 0.06 130)',
        '--color-bluebonnet': 'oklch(55% 0.20 290)',
        '--color-mesa': 'oklch(95% 0.02 130)',
        '--color-prickly-pear': 'oklch(65% 0.22 330)',
        '--color-surface': '#f8fdf5',
        '--font-slab': "'Georgia', serif"
    }
} as const;

type ThemeName = keyof typeof themes;

/* ── Component showcase (reused across themes) ─────────────────── */

function ComponentShowcase() {
    return (
        <div className="space-y-6">
            {/* Buttons */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-pecan/50">
                    Buttons
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>

            {/* Badges */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-pecan/50">
                    Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="sky">Sky</Badge>
                    <Badge variant="longhorn">Longhorn</Badge>
                    <Badge variant="pecan">Pecan</Badge>
                    <Badge variant="bluebonnet">Bluebonnet</Badge>
                    <Badge variant="prickly-pear">Prickly Pear</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
            </div>

            {/* Avatars */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-pecan/50">
                    Avatars
                </h3>
                <div className="flex gap-3">
                    <Avatar color="sky" initials="TX" />
                    <Avatar color="longhorn" initials="LH" />
                    <Avatar color="bluebonnet" initials="BB" />
                    <Avatar color="prickly-pear" initials="PP" />
                    <Avatar color="mesa" initials="MS" />
                </div>
            </div>

            {/* Card with form */}
            <Card>
                <CardHeader>
                    <CardTitle>Sample Card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Input placeholder="Type something..." />
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-pecan">
                            Enable feature
                        </span>
                        <SwitchRoot defaultChecked>
                            <SwitchThumb />
                        </SwitchRoot>
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                    <Button variant="outline" size="sm">
                        Cancel
                    </Button>
                    <Button size="sm">Save</Button>
                </CardFooter>
            </Card>

            {/* Alerts */}
            <div className="space-y-3">
                <Alert variant="info">
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                        This is an informational alert.
                    </AlertDescription>
                </Alert>
                <Alert variant="warning">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                        Something needs your attention.
                    </AlertDescription>
                </Alert>
                <Alert variant="error">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Something went wrong.</AlertDescription>
                </Alert>
            </div>
        </div>
    );
}

/* ── Theme Switcher Story ──────────────────────────────────────── */

function ThemeSwitcher() {
    const [activeTheme, setActiveTheme] = React.useState<ThemeName>(
        'Lone Star (Default)'
    );

    const themeVars = themes[activeTheme];

    return (
        <div
            className="min-w-[540px] max-w-2xl space-y-6 rounded-xl bg-surface p-8"
            style={themeVars as React.CSSProperties}
        >
            <div>
                <h2 className="font-slab text-2xl font-bold text-pecan">
                    Theme Customization
                </h2>
                <p className="mt-1 text-sm text-pecan/60">
                    Override CSS custom properties to make Lone Star UI your
                    own. Pick a theme below to see how the same components look
                    with different token values.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {(Object.keys(themes) as ThemeName[]).map((name) => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => setActiveTheme(name)}
                        className={[
                            'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                            activeTheme === name
                                ? 'border-sky bg-sky/10 text-sky'
                                : 'border-pecan/20 text-pecan/60 hover:border-pecan/40'
                        ].join(' ')}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <ComponentShowcase />

            {activeTheme !== 'Lone Star (Default)' && (
                <details className="rounded-lg border border-pecan/15 bg-mesa/30 p-4">
                    <summary className="cursor-pointer text-sm font-medium text-pecan">
                        CSS to apply this theme
                    </summary>
                    <pre className="mt-3 overflow-x-auto rounded-md bg-surface p-3 text-xs text-pecan/80">
                        {`:root {\n${Object.entries(themeVars)
                            .map(([k, v]) => `  ${k}: ${v};`)
                            .join('\n')}\n}`}
                    </pre>
                </details>
            )}
        </div>
    );
}

export const ThemeDemo: Story = {
    name: 'Theme Customization',
    render: () => <ThemeSwitcher />
};

/* ── Token Palette Story ──────────────────────────────────────── */

function TokenPalette() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-slab text-2xl font-bold text-pecan">
                    Design Tokens
                </h2>
                <p className="mt-1 text-sm text-pecan/60">
                    Lone Star UI exposes its entire color palette as CSS custom
                    properties. Every color has a matching Tailwind utility
                    class generated at build time.
                </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-pecan/10">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-mesa/50 text-left text-xs font-semibold uppercase tracking-wider text-pecan/50">
                            <th className="px-4 py-2.5">Token</th>
                            <th className="px-4 py-2.5">Swatch</th>
                            <th className="px-4 py-2.5">Tailwind class</th>
                            <th className="px-4 py-2.5">Used for</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-pecan/8">
                        {tokenDocs.map((token) => (
                            <tr
                                key={token.name}
                                className="bg-surface transition-colors hover:bg-mesa/20"
                            >
                                <td className="px-4 py-3 font-mono text-xs text-pecan/70">
                                    {token.name}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-block h-6 w-6 rounded-full ${token.swatch}`}
                                    />
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-sky">
                                    {token.tailwind}
                                </td>
                                <td className="px-4 py-3 text-pecan/70">
                                    {token.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="rounded-lg border border-pecan/10 bg-mesa/30 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pecan/50">
                    How tokens map to Tailwind
                </p>
                <pre className="overflow-x-auto text-xs text-pecan/80">{`/* src/styles.css — token declaration */
@theme {
  --color-sky: oklch(68% 0.17 205);      /* → bg-sky, text-sky, border-sky … */
  --color-bluebonnet: oklch(52% 0.19 282);
  /* etc. */
}

/* Usage in your component */
<div className="bg-sky/10 text-sky border border-sky/30" />`}</pre>
            </div>
        </div>
    );
}

export const Tokens: Story = {
    name: 'Design Token Reference',
    render: () => <TokenPalette />
};

/* ── Dark Mode Story ──────────────────────────────────────────── */

function DarkModeShowcase() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-slab text-2xl font-bold text-pecan">
                    Dark Mode — Stars at Night
                </h2>
                <p className="mt-1 text-sm text-pecan/60">
                    Dark mode is toggled by adding the{' '}
                    <code className="rounded bg-mesa px-1.5 py-0.5 font-mono text-xs text-pecan">
                        .dark
                    </code>{' '}
                    class to any ancestor element. All design tokens are
                    automatically redefined within that scope — no per-component
                    overrides needed.
                </p>
            </div>

            <div className="rounded-lg border border-pecan/10 bg-mesa/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-pecan">
                    How it works in CSS
                </p>
                <pre className="overflow-x-auto text-xs text-pecan/80">{`/* src/styles.css */
@custom-variant dark (&:where(.dark, .dark *));

.dark {
  --color-surface:    oklch(18% 0.01 260);
  --color-sky:        oklch(75% 0.16 205);
  --color-pecan:      oklch(88% 0.02 60);
  /* … all tokens redefined … */
}

/* Components just use semantic tokens — they adapt automatically */
<Card className="bg-surface text-pecan" />`}</pre>
            </div>

            <div className="rounded-lg border border-pecan/10 bg-mesa/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-pecan">
                    Per-state Tailwind modifiers
                </p>
                <p className="mb-3 text-pecan/60">
                    Base UI sets data attributes (
                    <code className="font-mono text-xs">data-disabled</code>,{' '}
                    <code className="font-mono text-xs">data-checked</code>,{' '}
                    <code className="font-mono text-xs">data-open</code>)
                    instead of CSS pseudo-classes. Target them with Tailwind's{' '}
                    <code className="font-mono text-xs">data-[…]:</code>{' '}
                    modifier:
                </p>
                <pre className="overflow-x-auto text-xs text-pecan/80">{`/* ✅ Correct — works with Base UI */
className="data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"

/* ❌ Avoid — :disabled doesn't fire on Base UI primitives */
className="disabled:opacity-50"`}</pre>
            </div>

            <div className="rounded-lg border border-pecan/10 bg-mesa/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-pecan">
                    Activating dark mode in your app
                </p>
                <pre className="overflow-x-auto text-xs text-pecan/80">{`// Toggle .dark on <html> or any container
document.documentElement.classList.toggle('dark');

// Or with a React state approach
<div className={isDark ? 'dark' : ''}>
  <App />
</div>`}</pre>
            </div>

            <Alert variant="info">
                <AlertTitle>Storybook theme toggle</AlertTitle>
                <AlertDescription>
                    Use the <strong>Theme</strong> button in the Storybook
                    toolbar (top-right) to preview any story in dark mode. All
                    components re-render with the correct token values
                    automatically.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export const DarkMode: Story = {
    name: 'Dark Mode',
    render: () => <DarkModeShowcase />
};

/* ── How to Apply a Custom Theme ─────────────────────────────── */

function CustomThemeGuide() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-slab text-2xl font-bold text-pecan">
                    Applying a Custom Theme
                </h2>
                <p className="mt-1 text-sm text-pecan/60">
                    Because every color is a CSS custom property, you can
                    retheme the entire library — or just one section of your
                    page — with a few lines of CSS.
                </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-bold text-sky">
                        1
                    </span>
                    <p className="font-semibold text-pecan">
                        Import the stylesheet
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`// In your app entry point or global CSS
import 'lone-star-ui/styles';`}</pre>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-bold text-sky">
                        2
                    </span>
                    <p className="font-semibold text-pecan">
                        Override tokens in your own CSS
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`/* global.css */
:root {
  --color-sky:          oklch(62% 0.12 220);  /* teal → ocean blue */
  --color-bluebonnet:   oklch(50% 0.16 250);
  --color-prickly-pear: oklch(58% 0.18 350);
  --color-surface:      #f5faff;
}

/* Dark mode overrides apply automatically inside .dark */
.dark {
  --color-surface: oklch(14% 0.01 240);
}`}</pre>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-bold text-sky">
                        3
                    </span>
                    <p className="font-semibold text-pecan">
                        Or scope themes to a subtree
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`/* Apply a "danger zone" red theme to a specific section */
.danger-zone {
  --color-sky:        oklch(55% 0.22 25);
  --color-bluebonnet: oklch(50% 0.20 15);
}

// In React — tokens only affect descendants of this div
<div className="danger-zone">
  <Button>Delete account</Button>
</div>`}</pre>
            </div>

            {/* Step 4 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-bold text-sky">
                        4
                    </span>
                    <p className="font-semibold text-pecan">
                        Use variant configs on your own elements
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`import { buttonVariants, cn } from 'lone-star-ui';

// Apply Button styles to an <a> tag for accessible link-buttons
<a
  href="/dashboard"
  className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
>
  Go to Dashboard
</a>`}</pre>
            </div>

            <Alert variant="warning">
                <AlertTitle>oklch color space</AlertTitle>
                <AlertDescription>
                    Tokens use the <strong>oklch(lightness chroma hue)</strong>{' '}
                    color space for perceptually uniform color manipulation.
                    oklch is supported in all modern browsers. For IE11 or older
                    Safari, provide a hex fallback before the custom property.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export const CustomTheme: Story = {
    name: 'How to Apply a Custom Theme',
    render: () => <CustomThemeGuide />
};

/* ── Tailwind v4 Theme Preset Story ──────────────────────────── */

function ThemePresetGuide() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-slab text-2xl font-bold text-pecan">
                    Theme Preset for Tailwind v4
                </h2>
                <p className="mt-1 text-sm text-pecan/60">
                    If your consuming app also uses Tailwind v4, import the{' '}
                    <strong>theme preset</strong> instead of the pre-built
                    stylesheet. This registers all design tokens directly in your
                    Tailwind config so utilities like{' '}
                    <code className="rounded bg-mesa px-1.5 py-0.5 font-mono text-xs text-pecan">
                        text-sky/65
                    </code>{' '}
                    and{' '}
                    <code className="rounded bg-mesa px-1.5 py-0.5 font-mono text-xs text-pecan">
                        border-pecan/12
                    </code>{' '}
                    work without re-declaring token values.
                </p>
            </div>

            <Alert variant="warning">
                <AlertTitle>Why a separate preset?</AlertTitle>
                <AlertDescription>
                    The pre-built <code>lone-star-ui/styles</code> bundles all
                    Tailwind utilities for the library's own components. If your
                    app also runs Tailwind, importing that bundle plus your own
                    Tailwind can cause double-reset conflicts and forces you to
                    duplicate token values in your{' '}
                    <code>@theme</code> block. The preset avoids both problems.
                </AlertDescription>
            </Alert>

            {/* Option A */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sm font-bold text-sky">
                        A
                    </span>
                    <p className="font-semibold text-pecan">
                        Pre-built bundle (non-Tailwind apps)
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`// Just import the stylesheet — all utilities are pre-compiled
import 'lone-star-ui/styles';`}</pre>
                <p className="text-xs text-pecan/50">
                    Best for apps that don't use Tailwind themselves, or where you
                    don't need token-based utilities in your own code.
                </p>
            </div>

            {/* Option B */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bluebonnet/10 text-sm font-bold text-bluebonnet">
                        B
                    </span>
                    <p className="font-semibold text-pecan">
                        Theme preset (Tailwind v4 apps)
                    </p>
                </div>
                <pre className="rounded-lg bg-mesa/40 p-4 text-xs text-pecan/80">{`/* app.css */
@import 'lone-star-ui/theme';
@import 'tailwindcss';

/* That's it — all Lone Star tokens are now registered.
   You can use bg-sky/10, text-pecan, border-bluebonnet/30,
   etc. in your own components without re-declaring values. */`}</pre>
                <p className="text-xs text-pecan/50">
                    The theme preset exports the{' '}
                    <code className="font-mono">@theme</code> block, dark mode
                    variant, and{' '}
                    <code className="font-mono">.dark</code> token overrides.
                    Lone Star UI remains the single source of truth for all token
                    values.
                </p>
            </div>

            {/* What's included */}
            <div className="rounded-lg border border-pecan/10 bg-mesa/30 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pecan/50">
                    What the preset includes
                </p>
                <pre className="overflow-x-auto text-xs text-pecan/80">{`/* lone-star-ui/theme */

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-slab: 'Zilla Slab', Georgia, serif;
  --color-sky:          oklch(68% 0.17 205);
  --color-longhorn:     oklch(71% 0.17 65);
  --color-pecan:        oklch(35% 0.07 55);
  --color-bluebonnet:   oklch(52% 0.19 282);
  --color-mesa:         oklch(92% 0.02 78);
  --color-prickly-pear: oklch(62% 0.22 345);
  --color-surface:      #ffffff;
}

.dark { /* … all tokens redefined … */ }`}</pre>
            </div>

            <Alert variant="info">
                <AlertTitle>Overriding tokens still works</AlertTitle>
                <AlertDescription>
                    After importing the preset, you can still override individual
                    tokens in your own{' '}
                    <code className="rounded bg-mesa px-1.5 py-0.5 font-mono text-xs text-pecan">
                        :root
                    </code>{' '}
                    or scoped selectors — just like with the pre-built bundle.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export const ThemePreset: Story = {
    name: 'Theme Preset (Tailwind v4)',
    render: () => <ThemePresetGuide />
};
