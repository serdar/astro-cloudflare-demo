import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: false
  }),
  integrations: [mdx()],
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    },
    server: {
      proxy: {
        '/api/*': 'http://localhost:8788'
      }
    }
  },
});


