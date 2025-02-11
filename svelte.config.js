import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // ✅ Important for SPA routing
    }),
    paths: {
      base: dev ? '' : '/snowwolf' // ✅ Ensure this matches your GitHub repo name
    },
    appDir: "app",
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
