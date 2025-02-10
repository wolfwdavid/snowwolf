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
    appDir: "snowwolf", // ✅ Prevents asset loading issues (was "app" before)
    prerender: {
      handleHttpError: "warn", // ✅ Prevents build failure on missing pages
      entries: ["*"], // ✅ Ensures all pages are pre rendered
    },
  }
};
