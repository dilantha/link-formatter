import esbuild from 'esbuild';
import process from 'process';

const prod = (process.argv[2] === 'production');

const context = await esbuild.context({
    entryPoints: ['main.ts'],
    bundle: true,
    platform: 'node',
    target: ['es2020'],
    format: 'cjs',
    external: [
        'obsidian',
        'electron',
        'node:*'
    ],
    sourcemap: prod ? 'linked' : 'inline',
    minify: prod,
    outfile: 'main.js',
});

if (prod) {
    await context.rebuild();
    await context.dispose();
} else {
    await context.watch();
}