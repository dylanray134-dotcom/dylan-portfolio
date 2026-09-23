import Link from "next/link";
import { solidButtonClass } from "@/components/links";
import { Shell } from "@/components/shell";

export default function NotFound() {
  return (
    <main id="content">
      <Shell className="py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">404</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          That address is not part of this portfolio.
        </p>
        <p className="mt-8">
          <Link href="/" className={solidButtonClass()}>
            Back home
          </Link>
        </p>
      </Shell>
    </main>
  );
}
