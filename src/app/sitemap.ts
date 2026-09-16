import type { MetadataRoute } from "next";

const base = "https://www.cincotree.com";

const routes = [
  "",
  "/services",
  "/speaking",
  "/workshops",
  "/about",
  "/contact",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
