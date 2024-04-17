import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
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
