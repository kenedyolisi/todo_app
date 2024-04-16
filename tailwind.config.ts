import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.svelte"],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: { xs: "512px" },
    },
  },
  plugins: [],
} satisfies Config;
