import { ProjectIndex } from "@/components/project-index";
import { Shell } from "@/components/shell";
import { owner, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description: owner.tagline,
  path: "/projects",
  image: "/og/home.png",
  imageAlt: "Dylan Womack projects",
});

export default function ProjectsPage() {
  return (
    <main id="content">
      <Shell className="py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">Work</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">Projects</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{owner.tagline}</p>
        <p className="mt-2 text-sm text-muted">{projects.length} public projects</p>
        <div className="mt-8">
          <ProjectIndex titleLevel="h2" />
        </div>
      </Shell>
    </main>
  );
}
