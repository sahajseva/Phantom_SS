import { defineConfig } from "tsup";

import { markAsExternalPlugin } from "../shared/mark-as-external-plugin";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: true,
  format: ["cjs", "esm"],
  outExtension: ({ format }) => ({ js: format === "cjs" ? ".cjs" : ".mjs" }),
  platform: "browser",
  esbuildPlugins: [markAsExternalPlugin],
  loader: {
    ".svg": "dataurl",
  },
  onSuccess: "npm run types",
});
