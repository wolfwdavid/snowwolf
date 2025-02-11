import adapter from '@sveltejs/adapter-static';
<<<<<<< HEAD
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Use Vite's preprocessing
  preprocess: vitePreprocess(),

=======
const dev = process.argv.includes('dev');

export default {
>>>>>>> 55732fa5ae9657c043781406eb6f70b0fc6e0f27
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    paths: {
      base: dev ? "" : "/snowwolf",
    },
    appDir: "app",
    prerender: {
<<<<<<< HEAD
      entries: ['*'],
    }
  }
};

export default config;
=======
      handleHttpError: 'warn',
      entries: ['*'],
    }
  }
};
>>>>>>> 55732fa5ae9657c043781406eb6f70b0fc6e0f27
