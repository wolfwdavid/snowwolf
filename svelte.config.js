import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production'; // ✅ Ensure this is defined BEFORE usage

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snowwolf' // ✅ Use `dev` safely
    },
    appDir: 'snowwolf',
    prerender: {
      entries: ["*"]
    }
  }
};
