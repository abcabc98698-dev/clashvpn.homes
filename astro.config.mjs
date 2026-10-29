// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config.ts";

const NOINDEX_BRAND_SLUGS = [
  "/brands/shandianshu/",
  "/brands/yunjiexian/",
  "/brands/liulianyun/",
  "/brands/shenxing/",
  "/brands/huanqiuti/",
  "/brands/yinxingren/",
  "/brands/tiziyun/",
];

export default defineConfig({
  site: process.env.SITE_URL || SITE.url,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      lastmod: new Date("2026-10-29T00:00:00Z"),
      filter: (page) =>
        !page.includes("/thanks/") &&
        !page.includes("/404/") &&
        !NOINDEX_BRAND_SLUGS.some((slug) => page.endsWith(slug)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
