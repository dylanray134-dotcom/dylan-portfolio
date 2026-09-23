import type { MetadataRoute } from "next";
import { owner } from "@/lib/projects";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dylan Womack",
    short_name: "Dylan Womack",
    description: owner.tagline,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#08090d",
    theme_color: "#08090d",
    lang: "en",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
