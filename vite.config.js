import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Ensures deep links work on Vercel and when refreshing pages
  build: {
    outDir: "dist",
  },
});
