import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projectSlugs } from "@/content/projects";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...projectSlugs.map((slug) => `/work/${slug}`)];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
