export type PageSeoConfig = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
};

/** Public site URL — set VITE_SITE_URL in production (e.g. https://yourdomain.com). */
export function getSiteUrl(): string {
  const url = import.meta.env.VITE_SITE_URL as string | undefined;
  return url?.replace(/\/$/, "") ?? "";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}

export function buildPageSeo({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  image = "/og/default.jpg",
}: PageSeoConfig) {
  const resolvedTitle = ogTitle ?? title;
  const resolvedDescription = ogDescription ?? description;
  const imageUrl = absoluteUrl(image);
  const pageUrl = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: resolvedTitle },
      { property: "og:description", content: resolvedDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: resolvedTitle },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: resolvedTitle },
      { name: "twitter:description", content: resolvedDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  };
}

export const SITEMAP_ENTRIES = [
  { path: "/", changefreq: "weekly" as const, priority: "1.0" },
  { path: "/about", changefreq: "monthly" as const, priority: "0.8" },
  { path: "/solutions", changefreq: "monthly" as const, priority: "0.9" },
  { path: "/industries", changefreq: "monthly" as const, priority: "0.8" },
  { path: "/contact", changefreq: "monthly" as const, priority: "0.7" },
];

export function getGoogleSiteVerification(): string | undefined {
  const code = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
  return code?.trim() || undefined;
}
