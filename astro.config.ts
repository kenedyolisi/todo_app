import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    svelte({
      compilerOptions: {
        runes: true,
      },
    }),
    tailwind({ applyBaseStyles: false, nesting: true }),
  ],
});
