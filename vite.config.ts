import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteSingleFile()],
  build: {
    outDir: "server/hosting",
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
  },
});
