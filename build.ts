import { Glob } from 'bun';

// Discover all component entrypoints
const componentEntrypoints: string[] = [];
const glob = new Glob('src/components/*/index.ts');
for await (const file of glob.scan('.')) {
    componentEntrypoints.push(file);
}

const result = await Bun.build({
    entrypoints: ['src/index.ts', ...componentEntrypoints, 'src/utils/cn.ts'],
    outdir: './dist',
    root: './src',
    format: 'esm',
    target: 'browser',
    splitting: true,
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@base-ui/react',
        '@base-ui/react/*'
    ],
    sourcemap: 'external',
    define: {
        'process.env.NODE_ENV': '"production"'
    }
});

if (!result.success) {
    console.error('Build failed');

    for (const message of result.logs) {
        console.error(message);
    }

    process.exit(1);
}

// ── Deduplicate exports ─────────────────────────────────────────────────────
// Bun.build with splitting + multiple entrypoints can emit duplicate export
// statements (the inlined module exports AND the barrel re-exports). This
// causes fatal "Duplicate export" errors in Node's ESM loader and Vite.
const dedupeGlob = new Glob('dist/**/*.js');
for await (const file of dedupeGlob.scan('.')) {
    let content = await Bun.file(file).text();
    const seen = new Set<string>();
    const updated = content.replace(
        /export\s*\{([^}]+)\}\s*;?/g,
        (_match, inner: string) => {
            const names = inner
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean);
            const fresh = names.filter((n) => {
                const exported = n.split(/\s+as\s+/).pop()!.trim();
                if (seen.has(exported)) return false;
                seen.add(exported);
                return true;
            });
            if (fresh.length === 0) return '';
            return `export { ${fresh.join(', ')} };`;
        }
    );
    if (updated !== content) {
        await Bun.write(file, updated);
    }
}

const cssProc = Bun.spawnSync([
    'bunx', '@tailwindcss/cli',
    '-i', 'src/styles.css',
    '-o', 'dist/styles.css',
    '--minify'
]);

if (cssProc.exitCode !== 0) {
    console.error('CSS build failed');
    console.error(cssProc.stderr.toString());
    process.exit(1);
}

await Bun.write('dist/fonts.css', Bun.file('src/fonts.css'));
await Bun.write('dist/theme.css', Bun.file('src/theme.css'));

console.log('✓ Build complete');
