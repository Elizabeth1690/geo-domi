import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // (recomendado para resolver tsconfig.paths automáticamente)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@frontend": path.resolve(__dirname, "frontend/src"),
      "@backend": path.resolve(__dirname, "backend"), // correcto para usar en Vite
    },
  },
});
