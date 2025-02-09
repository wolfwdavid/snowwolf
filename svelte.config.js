import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snowwolf', // ✅ Works for GitHub Pages
      assets: dev ? undefined : '/snowwolf/' // ✅ Fix absolute path issues
    },
    appDir: 'app',
    prerender: {
      entries: ["*"]
    }
  }
};
