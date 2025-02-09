import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snowwolf', // ✅ Works locally and on GitHub Pages
      assets: dev ? undefined : '/snowwolf' // ✅ Prevents absolute path error
    },
    appDir: 'app',
    prerender: {
      entries: ["*"]
    }
  }
};
