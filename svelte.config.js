import adapter from '@sveltejs/adapter-static'; // Use static adapter for GitHub Pages
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev'); // Define "dev" for paths.base

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(), // ✅ Fixed comma issue
		paths: {
			base: dev ? '' : '/snowwolf' // ✅ Fixed: dev is now defined
		},
		appDir: "app",
		prerender: {
			entries: ['*'] // ✅ Fixed bracket placement
		}
	}
};

export default config;
