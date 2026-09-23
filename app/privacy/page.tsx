import Link from "next/link";
import { PolicyLayout, PolicyList, PolicySection, policyLinkClass } from "@/components/policy-layout";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Dylan Womack’s portfolio: a static marketing site with no accounts and standard hosting logs.",
  path: "/privacy",
  image: "/og/privacy.png",
  imageAlt: "Privacy policy for Dylan Womack’s portfolio",
});

export default function SitePrivacyPage() {
  return (
    <PolicyLayout
      kicker="Portfolio site"
      title="Privacy Policy"
      lede="This policy covers Dylan Womack’s portfolio website. It is a static marketing site. It has no accounts. Hosting uses standard server logs."
      backHref="/"
      backLabel="Home"
    >
      <PolicySection id="what-this-site-is" title="What this site is">
        <p>
          The site shows project descriptions, logos, and links, and it publishes a privacy policy
          for each public project. It does not run those projects. Opening one takes you to that
          project’s own site, TestFlight, or GitHub when a link is listed.
        </p>
        <p>
          Catalog browsing, star maps, sounds, hours, location history, and radar happen in those
          separate projects, not on this page.
        </p>
      </PolicySection>

      <PolicySection id="information" title="Information this site handles">
        <PolicyList
          items={[
            "The site does not ask for your name, email address, or location.",
            "It does not sell personal data.",
            "It does not use advertising or a third-party analytics product.",
            "It does not set tracking cookies.",
            "If you add the site to your home screen, the browser may keep a copy of pages and icons on your device so they can open again. That copy stays on your device. You can remove it by clearing the site’s data or deleting the home-screen icon.",
          ]}
        />
      </PolicySection>

      <PolicySection id="hosting" title="Hosting logs">
        <p>
          The site is prepared for ordinary web hosting. When your browser requests a page, the
          host receives connection data needed to deliver it, such as IP address, browser type, and
          the address requested, and may keep standard server logs for security and operations.
          This portfolio does not use those logs to build a profile of you.
        </p>
      </PolicySection>

      <PolicySection id="fonts" title="Fonts">
        <p>
          Typefaces are delivered with the site. This portfolio does not load fonts from a
          third-party font service.
        </p>
      </PolicySection>

      <PolicySection id="project-policies" title="Project policies">
        <p>Each public project has its own policy. Those pages describe the project, not this site.</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-brass">
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/privacy/${project.id}`} className={policyLinkClass}>
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </PolicySection>

      <PolicySection id="changes" title="Changes">
        <p>If this policy changes, the updated version will be posted on this page with a new date.</p>
      </PolicySection>
    </PolicyLayout>
  );
}
