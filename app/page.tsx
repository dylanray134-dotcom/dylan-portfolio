import Link from "next/link";
import { ProjectIndex } from "@/components/project-index";
import { ExternalLink, ghostButtonClass } from "@/components/links";
import { Shell } from "@/components/shell";
import { owner, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Dylan Womack",
  description: owner.tagline,
  path: "/",
  image: "/og/home.png",
  imageAlt: "Dylan Womack, indie apps and web tools",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main id="content">
      <Shell>
        <section className="pb-12 pt-12 sm:pb-16 sm:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">Portfolio</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,12vw,7.4rem)] leading-[0.86] tracking-[-0.04em]">
            <span className="block">Dylan</span>
            <span className="block italic text-brass">Womack</span>
          </h1>
          <div className="mt-6 h-px w-24 bg-brass" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            {owner.tagline}
          </p>
          <p className="mt-3 text-sm text-muted">
            {projects.length} projects, each with its own privacy policy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ExternalLink href={owner.github} className="w-full sm:w-auto">
              GitHub profile
            </ExternalLink>
            <Link href="/#work" className={ghostButtonClass("w-full sm:w-auto")}>
              View projects
            </Link>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading" className="pb-16 sm:pb-24">
          <div className="mb-2 flex items-end justify-between gap-4">
            <h2 id="work-heading" className="font-display text-3xl tracking-tight sm:text-4xl">
              Projects
            </h2>
            <p className="pb-1 text-sm tabular-nums text-muted">{projects.length}</p>
          </div>
          <ProjectIndex />
        </section>
      </Shell>
    </main>
  );
}
