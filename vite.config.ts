import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    paraglide({
      project: './project.inlang',
      outdir: './src/lib/paraglide'
    })
  ],
  css: {
    postcss: "./postcss.config.cjs"
  }
});
