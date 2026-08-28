import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONTACT, LINKS, STUDIO_NAME } from "@/lib/constants";
import { apps, getAppBySlug } from "@/lib/apps";
import {
  LegalList,
  LegalPageLayout,
  LegalSection,
} from "@/components/layout/LegalPageLayout";

type Props = { params: Promise<{ appSlug: string }> };

export function generateStaticParams() {
  return apps.map((app) => ({ appSlug: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appSlug } = await params;
  const app = getAppBySlug(appSlug);
  if (!app) return { title: "Privacy" };
  return {
    title: `Privacy — ${app.name}`,
    description: `Privacy information for ${app.name} by ${STUDIO_NAME}.`,
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const { appSlug } = await params;
  const app = getAppBySlug(appSlug);
  if (!app) notFound();

  return (
    <LegalPageLayout title={`Privacy — ${app.name}`} lastUpdated="August 28, 2026">
      <p>
        This is the privacy page for <strong>{app.name}</strong> ({app.packageName}), published
        by {STUDIO_NAME}. Replace the sections below with the live Data safety declaration
        before treating them as final.
      </p>

      <LegalSection id="overview" title="1. Overview">
        <p>
          {app.description} This page describes how the app may handle information. For the
          studio website, see the{" "}
          <Link href="/privacy">studio Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="2. Information the app may collect">
        <LegalList
          items={[
            "No account is required unless stated in a later update of this page",
            "Advertising SDKs may be present in some game titles (Guess Hollywood, Puzzle Match) — confirm against the live Play Console form",
            "Tiny Think is designed for young children; confirm Families Policy and any parental controls against the live listing",
            "Dawa Saathi is described as storing reminders on the device — it is not a clinical product",
          ]}
        />
      </LegalSection>

      <LegalSection id="sharing" title="3. Sharing">
        <p>
          We do not sell personal information. Third-party SDKs (for example ads) process data
          under their own policies when those SDKs are included in a build.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="4. Contact">
        <p>
          Questions about {app.name}:{" "}
          <a href={LINKS.contact}>{CONTACT.email}</a>.
        </p>
        {app.playStoreUrl && (
          <p>
            Google Play listing:{" "}
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
              {app.playStoreUrl}
            </a>
          </p>
        )}
      </LegalSection>
    </LegalPageLayout>
  );
}
