import { SITE } from "../config";

export interface CrumbItem {
  label: string;
  href?: string;
}

/**
 * schema.org Organization & WebSite built from src/config.ts.
 */
export function localBusinessJsonLd(site: URL) {
  const orgId = new URL("/#organization", site).href;
  const siteUrl = new URL("/", site).href;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.name,
        alternateName: SITE.shortName,
        description: SITE.description,
        url: siteUrl,
        email: SITE.email,
        logo: {
          "@type": "ImageObject",
          url: new URL("/favicon.svg", site).href,
        },
        image: new URL("/og.png", site).href,
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", site).href,
        url: siteUrl,
        name: SITE.name,
        description: SITE.tagline,
        inLanguage: SITE.lang,
        publisher: {
          "@id": orgId,
        },
      },
    ],
  };
}

/**
 * schema.org BreadcrumbList built from page breadcrumb items.
 */
export function breadcrumbJsonLd(site: URL, currentPath: string, crumbs: CrumbItem[]) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "首页",
      item: new URL("/", site).href,
    },
    ...crumbs.map((c, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: c.label,
      item: new URL(c.href ?? currentPath, site).href,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function faqPageJsonLd(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function itemListJsonLd(
  site: URL,
  name: string,
  items: { rank: number; name: string; urlPath: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.rank,
      name: item.name,
      description: item.description,
      url: new URL(item.urlPath, site).href,
    })),
  };
}

export function collectionPageJsonLd(
  site: URL,
  opts: {
    name: string;
    description: string;
    urlPath: string;
  }
) {
  const pageUrl = new URL(opts.urlPath, site).href;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: opts.name,
    description: opts.description,
    url: pageUrl,
    inLanguage: SITE.lang,
    isPartOf: {
      "@id": new URL("/#website", site).href,
    },
  };
}

export function webPageJsonLd(
  site: URL,
  opts: {
    name: string;
    description: string;
    urlPath: string;
    type?: "WebPage" | "AboutPage";
  }
) {
  const pageUrl = new URL(opts.urlPath, site).href;
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: opts.name,
    description: opts.description,
    url: pageUrl,
    inLanguage: SITE.lang,
    isPartOf: {
      "@id": new URL("/#website", site).href,
    },
  };
}

export function articleJsonLd(
  site: URL,
  opts: {
    headline: string;
    description: string;
    urlPath: string;
    imagePath?: string;
    datePublished: string;
    dateModified: string;
  }
) {
  const pageUrl = new URL(opts.urlPath, site).href;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: opts.headline,
    description: opts.description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    image: new URL(opts.imagePath || "/og.png", site).href,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: new URL("/", site).href,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.svg", site).href,
      },
    },
  };
}

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
