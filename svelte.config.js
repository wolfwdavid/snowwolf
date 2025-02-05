import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build', // Ensures static files go to 'build' folder
      assets: 'build',
      fallback: 'index.html' // Needed for SPAs
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/snowwolf" : "",
    },
    prerender: {
      entries: ["*"], // Prerender all pages
    },
  }
};
