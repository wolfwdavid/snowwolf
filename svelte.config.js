import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snowwolf',  // 🔥 FORCE `snowwolf`
      assets: dev ? undefined : 'https://wolfwdavid.github.io/snowwolf'            // ✅ Prevents absolute path issues
    },
    appDir: 'app',
    prerender: {
      entries: ["*"]
    }
  }
};
