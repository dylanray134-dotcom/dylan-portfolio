import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/links";
import { Shell } from "@/components/shell";
import {
  getProject,
  linkTone,
  logoSrc,
  projects,
  type Project,
} from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};

  return pageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.id}`,
    image: `/og/${project.id}.png`,
    imageAlt: `${project.name} — ${project.short}`,
  });
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) {
    return (
      <p className="text-muted">
        No public website, TestFlight, or repository is listed for {project.name}.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {project.links.map((link) => (
        <li key={`${link.label}-${link.url}`}>
          <ExternalLink href={link.url} tone={linkTone(link, project.links)} className="w-full sm:w-auto">
            {link.label}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <main id="content">
      <Shell className="py-10 sm:py-16">
        <p>
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-line underline-offset-4 hover:text-cream hover:decoration-brass"
          >
            All projects
          </Link>
        </p>

        <header className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <Image
            src={logoSrc(project)}
            alt={`${project.name} logo`}
            width={512}
            height={512}
            priority
            sizes="112px"
            className="size-24 rounded-[1.4rem] object-cover sm:size-28"
          />
          <div>
            <h1 className="font-display text-4xl tracking-tight sm:text-6xl">{project.name}</h1>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.name} tags`}>
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-0.5 text-xs tracking-wide text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-pretty text-cream sm:text-xl">
          {project.description}
        </p>

        <section className="mt-10" aria-labelledby="links-heading">
          <h2 id="links-heading" className="font-display text-2xl tracking-tight">
            Links
          </h2>
          <div className="mt-4">
            <ProjectLinks project={project} />
          </div>
        </section>

        <aside className="mt-12 max-w-3xl rounded-3xl border border-line bg-panel px-5 py-6 sm:px-7" aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="font-display text-2xl tracking-tight">
            Privacy
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.privacy.summary}</p>
          <p className="mt-5">
            <Link
              href={`/privacy/${project.id}`}
              className="inline-flex min-h-11 items-center text-sm font-medium text-brass underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
            >
              Read the {project.name} privacy policy
            </Link>
          </p>
        </aside>
      </Shell>
    </main>
  );
}
