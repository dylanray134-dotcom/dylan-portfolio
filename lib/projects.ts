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
  existingPrivacyUrl?: string;
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
    ...("existing_privacy_url" in project && project.existing_privacy_url
      ? { existingPrivacyUrl: project.existing_privacy_url }
      : {}),
  };
}

const omittedIds = new Set(["agent-zero", "catalog-stats", "catastrophe", "ai-cat-videos"]);

function isOmitted(project: { id: string; name: string }) {
  const name = project.name.toLowerCase();
  return (
    omittedIds.has(project.id) ||
    name === "catalog stats" ||
    name === "agent zero" ||
    name.includes("catastrophe") ||
    name.includes("cat video")
  );
}

export const owner = raw.owner;
export const site = raw.site;
export const policyUpdated = "September 23, 2026";

export const projects: Project[] = raw.projects
  .filter((project) => !isOmitted(project))
  .map(toProject);

export const latchLivePolicyUrl =
  projects.find((project) => project.id === "latch")?.existingPrivacyUrl ??
  "https://latch-lock-dylan.web.app/privacy";

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

export function isPrivacyLink(url: string) {
  try {
    return /\/privacy\/?$/.test(new URL(url).pathname);
  } catch {
    return false;
  }
}

/** Primary card action. A live product link wins over GitHub and over a privacy URL. */
export function cardLinks(project: Project) {
  const productLinks = project.links.filter(
    (link) => !isGitHubLink(link.url) && !isPrivacyLink(link.url),
  );
  if (productLinks.length > 0) {
    return [productLinks[0]];
  }

  const otherLinks = project.links.filter((link) => !isGitHubLink(link.url));
  if (otherLinks.length > 0) {
    return [otherLinks[0]];
  }

  return project.links;
}

export function linkTone(link: ProjectLink, links: ProjectLink[]) {
  if (isPrivacyLink(link.url)) return "ghost";
  if (!isGitHubLink(link.url)) return "solid";

  const hasProductLink = links.some((item) => !isGitHubLink(item.url) && !isPrivacyLink(item.url));
  if (hasProductLink) return "ghost";

  const repositories = links.filter((item) => isGitHubLink(item.url));
  return repositories[0]?.url === link.url ? "solid" : "ghost";
}
