import type { ReactNode } from "react";
import Link from "next/link";
import { Shell } from "@/components/shell";
import { owner, policyUpdated } from "@/lib/projects";

const textLink =
  "text-brass underline decoration-brass/40 underline-offset-4 hover:decoration-brass";

export function PolicyLayout({
  kicker,
  title,
  lede,
  backHref,
  backLabel,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <main id="content">
      <Shell className="py-10 sm:py-16">
        <p>
          <Link
            href={backHref}
            className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-line underline-offset-4 hover:text-cream hover:decoration-brass"
          >
            {backLabel}
          </Link>
        </p>
        <article className="mt-6 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">Last updated {policyUpdated}</p>
          {lede ? <p className="mt-6 text-lg leading-relaxed text-pretty text-muted">{lede}</p> : null}
          <div className="mt-8 space-y-10 text-base leading-relaxed">{children}</div>
          <section className="mt-10" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="font-display text-2xl tracking-tight">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy:{" "}
              <a className={textLink} href={`mailto:${owner.email}`}>
                {owner.email}
              </a>
            </p>
          </section>
        </article>
      </Shell>
    </main>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="font-display text-2xl tracking-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-brass">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export const policyLinkClass = textLink;
