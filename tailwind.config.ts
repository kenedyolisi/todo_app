import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: { xs: "512px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
