import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snowwolf' // Replace with your actual GitHub repo name
    },
    appDir: "app",
    prerender: {
      entries: ['*']
    },
    
  }
};

export default config;
