import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.svelte"],
  darkMode: ["class"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
