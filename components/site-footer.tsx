import Link from "next/link";
import { Shell } from "@/components/shell";
import { owner } from "@/lib/projects";

const footerLink =
  "inline-flex min-h-11 items-center text-sm text-cream underline decoration-line underline-offset-4 hover:decoration-brass hover:text-brass";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <Shell className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">© {year} Dylan Womack</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
          <a
            href={owner.github}
            className={footerLink}
            target="_blank"
            rel="me noopener noreferrer"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/privacy" className={footerLink}>
            Privacy
          </Link>
        </nav>
      </Shell>
    </footer>
  );
}
