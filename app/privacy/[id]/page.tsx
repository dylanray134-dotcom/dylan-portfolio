import Link from "next/link";
import { notFound } from "next/navigation";
import { LatchPolicy } from "@/components/latch-policy";
import { PolicyLayout, PolicyList, PolicySection, policyLinkClass } from "@/components/policy-layout";
import { getProject, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

type PrivacyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} privacy`,
    description: project.privacy.summary,
    path: `/privacy/${project.id}`,
    image: "/og/privacy.png",
    imageAlt: `Privacy policy for ${project.name}`,
  });
}

export default async function ProjectPrivacyPage({ params }: PrivacyPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <PolicyLayout
      kicker={project.name}
      title="Privacy Policy"
      lede={`This policy describes ${project.name}. It is published on Dylan Womack’s portfolio. Visiting this page does not collect the information below and does not sign you into the project. The portfolio website has its own privacy policy.`}
      backHref={`/projects/${project.id}`}
      backLabel={project.name}
    >
      <PolicySection id="summary" title="Summary">
        <p>{project.privacy.summary}</p>
        <p>
          The portfolio site itself is covered by the{" "}
          <Link href="/privacy" className={policyLinkClass}>
            site privacy policy
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection id="collects" title="Information involved">
        <PolicyList items={project.privacy.collects} />
      </PolicySection>

      <PolicySection id="does-not" title="What this project does not do">
        <PolicyList items={project.privacy.does_not} />
      </PolicySection>

      {project.id === "latch" ? <LatchPolicy /> : null}
    </PolicyLayout>
  );
}
