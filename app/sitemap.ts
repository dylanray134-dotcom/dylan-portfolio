import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23");
  const staticRoutes = ["/", "/projects", "/privacy"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }));

  const projectRoutes = projects.flatMap((project) => [
    {
      url: new URL(`/projects/${project.id}`, siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL(`/privacy/${project.id}`, siteUrl).toString(),
      lastModified,
    },
  ]);

  return [...staticRoutes, ...projectRoutes];
}
