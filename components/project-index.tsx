import Image from "next/image";
import Link from "next/link";
import { ExternalLink, solidButtonClass } from "@/components/links";
import { cardLinks, linkTone, logoSrc, projects, type Project } from "@/lib/projects";

function ProjectActions({ project }: { project: Project }) {
  const links = cardLinks(project);

  if (links.length === 0) {
    return (
      <Link
        href={`/projects/${project.id}`}
        className={solidButtonClass("w-full sm:w-auto lg:w-full")}
      >
        View project
      </Link>
    );
  }

  return (
    <>
      {links.map((link) => (
        <ExternalLink
          key={`${link.label}-${link.url}`}
          href={link.url}
          tone={linkTone(link, links)}
          className="w-full sm:w-auto lg:w-full"
        >
          {link.label}
        </ExternalLink>
      ))}
    </>
  );
}

export function ProjectIndex({ titleLevel = "h3" }: { titleLevel?: "h2" | "h3" }) {
  const Title = titleLevel;

  return (
    <ol className="border-b border-line">
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <li key={project.id} className="border-t border-line">
            <article className="py-7 sm:py-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="flex min-w-0 gap-4 sm:gap-5">
                <Image
                  src={logoSrc(project)}
                  alt={`${project.name} logo`}
                  width={512}
                  height={512}
                  priority={index === 0}
                  sizes="80px"
                  className="size-[4.5rem] shrink-0 rounded-[1.15rem] object-cover sm:size-20"
                />
                <div className="min-w-0">
                  <p className="font-display text-sm tabular-nums text-brass">{number}</p>
                  <Title className="mt-1 font-display text-[1.65rem] leading-none tracking-tight sm:text-3xl">
                    <Link
                      href={`/projects/${project.id}`}
                      className="rounded-sm underline decoration-transparent underline-offset-[6px] hover:text-brass hover:decoration-brass"
                    >
                      {project.name}
                    </Link>
                  </Title>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-pretty text-muted sm:text-base">
                    {project.short}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${project.name} tags`}>
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
              </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap lg:w-52 lg:flex-col">
                  <ProjectActions project={project} />
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
