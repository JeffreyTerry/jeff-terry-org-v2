// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jeffterry.org",
  integrations: [sitemap()],
  // Scope component styles with a class (rather than a data attribute) so the
  // scope reaches elements rendered by child components that forward `class`,
  // e.g. the inline SVGs from <Icon> and the <img> from <Image>.
  scopedStyleStrategy: "class",
  build: {
    // The whole site is one page, so inlining its CSS saves a render-blocking request.
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5 still uses @import and global Sass functions
          quietDeps: true,
          silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
        },
      },
    },
  },
});
