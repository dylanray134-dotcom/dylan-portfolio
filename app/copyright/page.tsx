import { PolicyLayout, PolicyList, PolicySection } from "@/components/policy-layout";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Copyright",
  description:
    "Copyright notice for Dylan Womack’s portfolio: site content, design, original product names, ideas, and assets.",
  path: "/copyright",
  image: "/og/home.png",
  imageAlt: "Dylan Womack portfolio",
});

export default function CopyrightPage() {
  return (
    <PolicyLayout
      kicker="Portfolio site"
      title="Copyright"
      updated="October 3, 2026"
      contactLead="Questions about this notice:"
      lede="© 2026 Dylan Womack. This notice covers the portfolio and the original work presented on it."
      backHref="/"
      backLabel="Home"
    >
      <PolicySection id="ownership" title="What Dylan Womack owns">
        <p>
          Dylan Womack owns the copyright in the site content, the design, and his original product
          names, ideas, concepts, branding, and materials presented here.
        </p>
        <p>That includes:</p>
        <PolicyList
          items={[
            "The writing and other content on these pages",
            "The layout and visual design of this site",
            "Original logos and other assets he created for this site and his projects",
            "The code for this portfolio",
            "His original product names, ideas, concepts, and branding",
          ]}
        />
        <p>
          The original names and concepts shown here include Motorcycle Catalog, Polaris, Latch
          Lock Sounds, Hours Tracker, Personal Location Tracker, DFW Radar, and Finance.
        </p>
      </PolicySection>

      <PolicySection id="third-parties" title="Third-party names and marks">
        <p>
          Names and marks that belong to someone else remain their owners’ property. Examples
          include Apple, Honda, Tesla, Firebase, Google, GitHub, TestFlight, WFAA, and Vercel.
        </p>
        <p>
          Those names are used only so you can identify a project or follow a link to it. Using
          them here does not mean Dylan Womack is affiliated with, endorsed by, or sponsored by
          their owners, unless a page says so.
        </p>
        <p>
          Motorcycle Catalog describes Honda motorcycles. It is not an official Honda product.
        </p>
      </PolicySection>

      <PolicySection id="not-allowed" title="What is not allowed">
        <p>Without permission from Dylan Womack, you may not:</p>
        <PolicyList
          items={[
            "Copy this site or its content, design, or code",
            "Scrape the site to train a model",
            "Reuse his product names, ideas, concepts, designs, branding, logos, or other assets",
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}
