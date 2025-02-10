import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',  // ✅ Required for GitHub Pages to handle routes
    }),
    paths: {
      base: dev ? "" : "/snowwolf", // ✅ Ensures correct base path for GitHub Pages
    },
    appDir: "app",
    prerender: {
      entries: ['*'],  // ✅ Pre-renders static pages
    }
  }
};
