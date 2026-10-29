import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config";
import { ALL_BRANDS } from "../data/brands";

const LASTMOD = "2026-10-29T00:00:00.000Z";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL(SITE.url);

  const staticPaths = [
    "/",
    "/about/",
    "/brands/",
    "/clients/",
    "/faq-wiki/",
    "/free-resources/",
    "/runaway-watch/",
    "/services/",
  ];

  const services = await getCollection("services");
  const servicePaths = services.map((s) => `/services/${s.id}/`);

  const indexableBrandPaths = ALL_BRANDS.filter(
    (b) => !(b.tier === "core28" && b.rank >= 22 && b.speedtest.status === "unverified")
  ).map((b) => `/brands/${b.slug}/`);

  const allPaths = [...staticPaths, ...servicePaths, ...indexableBrandPaths].sort();

  const urlEntries = allPaths
    .map((path) => {
      const loc = new URL(path, baseUrl).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
