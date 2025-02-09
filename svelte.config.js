import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/snowwolf', // MUST MATCH YOUR REPO NAME EXACTLY
    },
    appDir: 'app',
    prerender: {
      entries: ['*'] // Ensures all pages are prerendered
    }
  }
};
