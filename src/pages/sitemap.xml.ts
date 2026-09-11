import type { APIRoute } from "astro";
import { PLATFORMS_DATA } from "../data/platforms";
import { COMPARISONS_DATA } from "../data/comparisons";

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export const GET: APIRoute = async () => {
  const siteUrl = "https://platformfeematrix.com";
  const today = new Date().toISOString().split("T")[0];

  const entries: SitemapEntry[] = [
    // Core Pages
    { loc: `${siteUrl}/`, lastmod: today, changefreq: "daily", priority: "1.0" },
    { loc: `${siteUrl}/calculator`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${siteUrl}/platforms`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${siteUrl}/compare`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${siteUrl}/guide`, lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: `${siteUrl}/faq`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${siteUrl}/about`, lastmod: today, changefreq: "monthly", priority: "0.5" },
    { loc: `${siteUrl}/privacy`, lastmod: today, changefreq: "yearly", priority: "0.3" },
    { loc: `${siteUrl}/terms`, lastmod: today, changefreq: "yearly", priority: "0.3" },
  ];

  // 14 Programmatic Platform Pages
  for (const slug of Object.keys(PLATFORMS_DATA)) {
    entries.push({
      loc: `${siteUrl}/platforms/${slug}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.85",
    });
  }

  // 12 Programmatic Comparison Matchup Pages
  for (const slug of Object.keys(COMPARISONS_DATA)) {
    entries.push({
      loc: `${siteUrl}/compare/${slug}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.85",
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
