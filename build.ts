const result = await Bun.build({
    entrypoints: ['src/index.ts'],
    outdir: './dist',
    format: 'esm',
    target: 'browser',
    external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
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

const css = await Bun.build({
    entrypoints: ['src/styles.css'],
    outdir: './dist'
});

if (!css.success) {
    console.error('CSS build failed');

    for (const message of css.logs) {
        console.error(message);
    }

    process.exit(1);
}

console.log('✓ Build complete');
