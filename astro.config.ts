import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  redirects: { "/": "/tasks" },
  integrations: [
    db(),
    svelte({
      compilerOptions: {
        runes: true,
      },
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
