const result = await Bun.build({
    entrypoints: ['src/index.ts'],
    outdir: './dist',
    format: 'esm',
    target: 'browser',
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
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

console.log('✓ Build complete');
