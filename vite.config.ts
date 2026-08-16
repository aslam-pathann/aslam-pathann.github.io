import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Explicit root base path — this site is deployed at the domain root
// (https://<username>.github.io/), so assets must resolve from "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
