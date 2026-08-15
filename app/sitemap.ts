import type { MetadataRoute } from "next";

const baseUrl = "https://pearl-health.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/services",
    "/patient-experience",
    "/team",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
