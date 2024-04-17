import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [svelte({ compilerOptions: { runes: true } })],
});
