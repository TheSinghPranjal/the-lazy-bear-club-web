import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, LINKS, STUDIO_NAME } from "@/lib/constants";
import { catalogApps } from "@/lib/apps";
import {
  LegalList,
  LegalPageLayout,
  LegalSection,
} from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${STUDIO_NAME} handles information on this website, and how each app publishes its own privacy details.`,
};

const LAST_UPDATED = "August 28, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This policy covers the {STUDIO_NAME} website. Each mobile app has its own privacy
        summary — linked below. We do not sell personal information.
      </p>

      <LegalSection id="overview" title="1. Overview">
        <p>
          {STUDIO_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this
          studio website and publishes mobile applications on Google Play. This page explains
          what we collect from website visitors. App-specific collection is described in each
          app&apos;s privacy page and in the Google Play Data safety form.
        </p>
      </LegalSection>

      <LegalSection id="data" title="2. Data we collect">
        <p>On this website we may collect:</p>
        <LegalList
          items={[
            "Information you send us by email (name, address, and whatever you include in the message)",
            "Standard server or hosting logs (IP address, browser type, pages requested) if our host records them",
            "Optional analytics, only if we enable a privacy-respecting analytics tool in the future — we will update this page if that happens",
          ]}
        />
        <p>
          We do not require an account to browse this site. We do not run a contact form that
          stores submissions on our servers.
        </p>
      </LegalSection>

      <LegalSection id="apps" title="3. Our apps">
        <p>
          Each app&apos;s data practices are documented separately. Live titles on Google Play
          also declare collection in the Play Console Data safety section.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {catalogApps.map((app) => (
            <li key={app.id}>
              <Link href={app.privacyPolicyUrl ?? `/privacy/${app.id}`}>{app.name}</Link>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="children" title="4. Children's privacy">
        <p>
          This website is not directed at children under 13. Tiny Think and Bao and Family are
          products for young children; each has its own privacy page. We do not knowingly
          collect personal information from children through this studio website.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="5. Changes">
        <p>
          We may update this policy. The &ldquo;Last updated&rdquo; date at the top will change
          when we do. Continued use of the website after an update means you accept the revised
          policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="6. Contact">
        <p>
          Privacy questions:{" "}
          <a href={LINKS.contact}>{CONTACT.email}</a>
          . Developer: {CONTACT.address}.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
