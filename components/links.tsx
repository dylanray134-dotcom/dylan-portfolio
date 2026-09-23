import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition-colors";

export function solidButtonClass(extra = "") {
  return `${base} bg-brass text-brass-ink hover:bg-brass-2 ${extra}`;
}

export function ghostButtonClass(extra = "") {
  return `${base} border border-line bg-transparent text-cream hover:border-brass hover:text-brass ${extra}`;
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 shrink-0">
      <path
        d="M4 12 12 4M6 4h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  tone = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "ghost";
  className?: string;
}) {
  const toneClass = tone === "solid" ? solidButtonClass() : ghostButtonClass();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${toneClass} ${className}`}
    >
      {children}
      <ArrowIcon />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
