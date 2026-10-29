import type { APIRoute } from "astro";
import { SITE } from "../config";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL(SITE.url);
  const sitemap = new URL("sitemap.xml", baseUrl).href;
  return new Response(`User-agent: *\nAllow: /\nDisallow: /thanks/\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
