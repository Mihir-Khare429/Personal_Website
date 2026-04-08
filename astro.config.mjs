// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://mihir-khare429.github.io/Personal_Website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
