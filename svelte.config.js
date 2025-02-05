import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === "development";

export default {
  kit: {
    adapter: adapter({
      strict: false, // Ignores dynamic route warnings
    }),
    paths: {
      base: dev ? "" : "/snowwolf", // GitHub Pages requires this
    },
    prerender: {
      handleHttpError: "warn", // Prevents build failure on 404s
    },
  }
};
