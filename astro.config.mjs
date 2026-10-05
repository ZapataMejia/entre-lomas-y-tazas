// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// base "/" = Vercel (live). GitHub Pages project path se puede re-agregar si hace falta.
export default defineConfig({
  site: "https://entre-lomas-y-tazas.vercel.app",
  base: "/",
});
