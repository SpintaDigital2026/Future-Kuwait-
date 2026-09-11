// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

// The bundled assets proxy (which resolves the /__l5e/assets-v1/* URLs in
// src/assets/**/*.asset.json) reads LOVABLE_PREVIEW_HOST from the process
// environment when the plugin is constructed — earlier than Vite applies .env.
// Promote it here so the value in .env is enough and no shell export is needed.
const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
if (!process.env.LOVABLE_PREVIEW_HOST && env.LOVABLE_PREVIEW_HOST) {
  process.env.LOVABLE_PREVIEW_HOST = env.LOVABLE_PREVIEW_HOST;
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
