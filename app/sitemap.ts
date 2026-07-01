import type { MetadataRoute } from "next";
import { absoluteUrl, SITEMAP_ENTRIES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ENTRIES.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(),
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
