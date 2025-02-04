import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Important for SPAs
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/snowwolf' // Adjust for GitHub Pages
		},
		appDir: 'app' // Optional: Helps with asset caching
	}
};

export default config;
