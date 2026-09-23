import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/shell";

const navLink =
  "inline-flex min-h-11 items-center rounded-full px-2.5 text-sm text-muted hover:text-cream sm:px-3";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/75 backdrop-blur-md">
      <Shell className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 rounded-full">
          <Image
            src="/icons/icon-192.png"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-lg"
          />
          <span className="truncate font-display text-base tracking-tight sm:text-lg">
            Dylan Womack
          </span>
        </Link>
        <nav aria-label="Primary" className="flex shrink-0 items-center">
          <Link href="/#work" className={navLink}>
            Work
          </Link>
          <Link href="/privacy" className={navLink}>
            Privacy
          </Link>
        </nav>
      </Shell>
    </header>
  );
}
