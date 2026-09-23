import type { Metadata } from "next";
import { owner } from "@/lib/projects";

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export const siteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "https://dylan-portfolio.vercel.app",
);

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: owner.name,
  email: owner.email,
  url: siteUrl,
  sameAs: [owner.github],
};
