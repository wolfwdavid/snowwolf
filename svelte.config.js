import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Ensures correct routing on GitHub Pages
    }),
    paths: {
      base: dev ? "" : "/snowwolf", // ✅ Fixes navigation issues in GitHub Pages
    },
    appDir: "app", // ✅ Prevents asset loading issues
    prerender: {
      handleHttpError: "warn" // ✅ No error now
    },
  }
};
