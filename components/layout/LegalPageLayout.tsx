import Link from "next/link";
import { STUDIO_NAME } from "@/lib/constants";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <article className="bg-brand-surface pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-green transition-colors hover:text-brand-green-dark"
        >
          ← Back to {STUDIO_NAME}
        </Link>

        <header className="mb-10 border-b border-brand-green/10 pb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-brand-text md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-brand-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="legal-content space-y-10 text-brand-muted">{children}</div>
      </div>
    </article>
  );
}

interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-4 text-xl font-bold text-brand-text">{title}</h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
