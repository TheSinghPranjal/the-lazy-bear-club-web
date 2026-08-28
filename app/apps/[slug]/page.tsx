import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { apps, getAppBySlug, isPlayReady, STATUS_LABEL } from "@/lib/apps";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AppScreenshotCarousel } from "@/components/ui/AppScreenshotCarousel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return apps.filter((app) => app.status !== "archived").map((app) => ({ slug: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App" };
  return {
    title: app.name,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app || app.status === "archived") notFound();

  const playReady = isPlayReady(app);

  return (
    <article className="bg-brand-surface pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <span
            className="relative block h-24 w-24 shrink-0 overflow-hidden bg-white shadow-sm ring-1 ring-brand-green/10"
            style={{ borderRadius: 22 }}
          >
            <Image src={app.icon} alt={`${app.name} icon`} fill className="object-cover" sizes="96px" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold text-brand-text md:text-4xl">{app.name}</h1>
              <StatusBadge status={app.status} />
            </div>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-muted">
              {app.category}
            </p>
            <p className="mt-4 max-w-2xl text-lg text-brand-muted">{app.description}</p>
            <p className="mt-2 font-mono text-xs text-brand-muted/80">{app.packageName}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {playReady ? (
            <Button href={app.playStoreUrl} external>
              Google Play
            </Button>
          ) : (
            <Button disabled>{STATUS_LABEL[app.status]}</Button>
          )}
          {app.websiteUrl && (
            <Button href={app.websiteUrl} variant="outline" external>
              Visit site
            </Button>
          )}
          {app.privacyPolicyUrl && (
            <Button href={app.privacyPolicyUrl} variant="ghost">
              Privacy
            </Button>
          )}
        </div>

        {app.features.length > 0 && (
          <ul className="mt-10 space-y-2">
            {app.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-brand-text">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12">
          <h2 className="mb-4 text-lg font-semibold text-brand-text">Screenshots</h2>
          <p className="mb-4 text-sm text-brand-muted">
            Drop replacements in <code className="text-brand-text">public/apps/{app.id}/</code>
          </p>
          <AppScreenshotCarousel images={app.screenshots} alt={app.name} />
        </div>
      </div>
    </article>
  );
}
