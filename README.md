## Cloudflare and Astro.build Demo App

Demo app utilising Astro.build SSR with Cloudflare Pages Functions.

Run `pnpm pages:dev` to startup the Astro Dev server the wrangler dev server (defaults to port `8788`).

To deploy run `pnpm pages:deploy` once you have your project created in CloudFlare. (Might need to remove the proxy config from `astro.config.mjs`)