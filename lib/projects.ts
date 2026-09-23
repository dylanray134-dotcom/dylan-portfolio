import raw from "@/data/projects.json";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectPrivacy = {
  summary: string;
  collects: string[];
  does_not: string[];
};

export type Project = {
  id: string;
  name: string;
  short: string;
  description: string;
  links: ProjectLink[];
  logo: string | null;
  tags: string[];
  privacy: ProjectPrivacy;
  note?: string;
};

type RawProject = (typeof raw.projects)[number];

function toProject(project: RawProject): Project {
  return {
    id: project.id,
    name: project.name,
    short: project.short,
    description: project.description,
    links: project.links.map((link) => ({ label: link.label, url: link.url })),
    logo: project.logo,
    tags: [...project.tags],
    privacy: {
      summary: project.privacy.summary,
      collects: [...project.privacy.collects],
      does_not: [...project.privacy.does_not],
    },
    ...("note" in project ? { note: project.note } : {}),
  };
}

const excludedNames = new Set(
  raw.exclude_from_public_portfolio.map((item) => item.name),
);

export const owner = raw.owner;
export const site = raw.site;
export const policyUpdated = "September 23, 2026";

export const projects: Project[] = raw.projects
  .filter((project) => !excludedNames.has(project.name))
  .map(toProject);

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function logoSrc(project: Project) {
  if (project.logo?.endsWith(".png")) {
    return `/${project.logo}`;
  }

  return `/logos/${project.id}.png`;
}

export function isGitHubLink(url: string) {
  try {
    const hostname = new URL(url).hostname;
    return hostname === "github.com" || hostname.endsWith(".github.com");
  } catch {
    return false;
  }
}

/** Primary card actions. Live product links win. GitHub-only projects show every repo link. */
export function cardLinks(project: Project) {
  const productLinks = project.links.filter((link) => !isGitHubLink(link.url));
  if (productLinks.length > 0) {
    return [productLinks[0]];
  }

  return project.links;
}

export function linkTone(link: ProjectLink, links: ProjectLink[]) {
  const hasProductLink = links.some((item) => !isGitHubLink(item.url));
  if (!hasProductLink) {
    return links[0]?.url === link.url ? "solid" : "ghost";
  }

  return isGitHubLink(link.url) ? "ghost" : "solid";
}
