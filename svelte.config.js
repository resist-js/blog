import path from "path"

import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

import Unocss from "unocss/vite"

import defineConfig from "./unocss.config.js"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "app.html",
      precompress: true,
    }),

    browser: {
      hydrate: false,
      router: false,
    },

    prerender: {
      default: true,
      concurrency: 20,
      onError: ({ path }) => {
        if (!path.includes("resource.")) throw new Error("Failure in blog.")
      },
    },

    inlineStyleThreshold: 200000,

    vite: {
      define: {
        __APPNAME__: JSON.stringify(process.env.VITE_APP_NAME),
      },
      build: {
        sourcemap: false,
        chunkSizeWarningLimit: 3500,
      },
      resolve: {
        alias: {
          "@components": path.resolve("./src/components"),
        },
      },
      plugins: [Unocss(defineConfig)],
    },
  },
}

export default config
