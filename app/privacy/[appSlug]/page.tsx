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
    description: `${app.name} does not collect user data. No accounts or SSO. Published by ${STUDIO_NAME}.`,
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const { appSlug } = await params;
  const app = getAppBySlug(appSlug);
  if (!app) notFound();

  const isArchived = app.status === "archived";

  return (
    <LegalPageLayout title={`Privacy — ${app.name}`} lastUpdated="August 28, 2026">
      <p>
        This privacy page is for <strong>{app.name}</strong> ({app.packageName}), published by{" "}
        {STUDIO_NAME}. For the studio website, see the{" "}
        <Link href="/privacy">studio Privacy Policy</Link>.
      </p>

      {isArchived ? (
        <LegalSection id="overview" title="1. Overview">
          <p>
            This title is no longer distributed. It is not available on Google Play. Historical
            privacy practices are not restated as current collection.
          </p>
        </LegalSection>
      ) : (
        <>
          <LegalSection id="overview" title="1. Overview">
            <p>
              {app.name} is a complete on-device UI app. It does <strong>not</strong> collect
              user information, does not require an account, and does not use single sign-on
              (SSO) such as Google or Apple Sign-In.
            </p>
          </LegalSection>

          <LegalSection id="collect" title="2. Information we collect">
            <LegalList
              items={[
                "We do not collect personal information",
                "We do not create user accounts or use SSO",
                "We do not send your data to our servers",
                "Settings and progress stay on the device",
              ]}
            />
            {app.id === "dawa-saathi" && (
              <p>
                Reminder times you enter in Dawa Saathi are saved on the device only. Dawa
                Saathi is a reminder companion — it does not diagnose, treat, or replace a
                clinician.
              </p>
            )}
          </LegalSection>

          <LegalSection id="sharing" title="3. Sharing">
            <p>
              We do not share, sell, or transfer user data. Live listings on Google Play
              declare that no data is collected and no data is shared with third parties.
            </p>
          </LegalSection>
        </>
      )}

      <LegalSection id="contact" title={isArchived ? "2. Contact" : "4. Contact"}>
        <p>
          Questions about {app.name}:{" "}
          <a href={LINKS.contact}>{CONTACT.email}</a>.
        </p>
        {app.playStoreUrl && (
          <p>
            Google Play:{" "}
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
              {app.playStoreUrl}
            </a>
          </p>
        )}
      </LegalSection>
    </LegalPageLayout>
  );
}
