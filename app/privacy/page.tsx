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
  description: `${STUDIO_NAME} does not collect user data. Our apps are local UI experiences with no accounts or sign-in.`,
};

const LAST_UPDATED = "August 28, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        {STUDIO_NAME} does not collect user data. We do not sell personal information. This
        policy covers this website and our Google Play apps.
      </p>

      <LegalSection id="overview" title="1. Overview">
        <p>
          {STUDIO_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this
          studio website and publishes mobile applications on Google Play. Our apps are
          complete on-device UI experiences. They do not use accounts, single sign-on (SSO),
          or cloud login.
        </p>
      </LegalSection>

      <LegalSection id="website" title="2. This website">
        <p>
          You can browse this site without creating an account. We do not run a contact form
          that stores submissions on our servers. We do not use analytics on this website.
        </p>
        <p>
          If you email us, whatever you include in that message is sent through your email
          provider to {CONTACT.email}. We use it only to reply.
        </p>
      </LegalSection>

      <LegalSection id="apps" title="3. Our apps — no data collection">
        <p>
          The following apps do <strong>not</strong> collect user information. They do not
          require sign-in, do not use SSO, and do not send personal data to our servers.
          Gameplay and settings stay on the device.
        </p>
        <LegalList
          items={[
            "Abode Home",
            "Guess Hollywood",
            "Guess Bollywood",
            "Bollywood Hollywood",
            "Puzzle Match",
            "Tiny Think",
            "Bao and Family",
            "Bao and Friends",
            "Dawa Saathi",
          ]}
        />
        <p>
          This matches the Google Play Data safety declarations for live titles (no data
          collected, no data shared with third parties). Each app also has a short privacy
          page:
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
          This website is not directed at children under 13. Tiny Think, Bao and Family, and
          Bao and Friends are products for young children. Those apps do not collect personal
          information from children. We do not knowingly collect personal information from
          children through this website.
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
