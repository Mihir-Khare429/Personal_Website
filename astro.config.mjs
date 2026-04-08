// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/Personal_Website/",
  vite: {
    plugins: [tailwindcss()],
    site: 'https://mihir-khare429.github.io/Portfolio/',
  },
});
