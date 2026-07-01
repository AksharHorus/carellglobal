import type { Metadata } from "next";

export type PageSeoConfig = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
};

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VITE_SITE_URL;
  return url?.replace(/\/$/, "") ?? "";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}

export function buildMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  image = "/og/default.jpg",
}: PageSeoConfig): Metadata {
  const resolvedTitle = ogTitle ?? title;
  const resolvedDescription = ogDescription ?? description;
  const imageUrl = absoluteUrl(image);
  const pageUrl = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: pageUrl,
      type: "website",
      images: [{ url: imageUrl, alt: resolvedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
  };
}

export const SITEMAP_ENTRIES = [
  { path: "/", changefreq: "weekly" as const, priority: 1.0 },
  { path: "/about", changefreq: "monthly" as const, priority: 0.8 },
  { path: "/solutions", changefreq: "monthly" as const, priority: 0.9 },
  { path: "/industries", changefreq: "monthly" as const, priority: 0.8 },
  { path: "/contact", changefreq: "monthly" as const, priority: 0.7 },
];

export function getGoogleSiteVerification(): string | undefined {
  const code =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
    process.env.VITE_GOOGLE_SITE_VERIFICATION;
  return code?.trim() || undefined;
}
