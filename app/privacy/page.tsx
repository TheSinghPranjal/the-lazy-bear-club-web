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
  description: `Privacy policy for ${STUDIO_NAME} and our Google Play apps, including how advertising and app configuration data is handled.`,
};

const LAST_UPDATED = "November 15, 2026";

const APPS_WITHOUT_ADS_OR_FIREBASE = [
  "Abode Home",
  "Tiny Think",
  "Bao and Family",
  "GK Adventure",
  "Match & Sort: Kids",
  "Unscramble For Kids",
  "Dog Game: Doodle Pup",
  "Ludo",
  "Couple Quest",
  "Connect Dots",
  "Parachute Rescue",
  "Bollywood Pictorial Quiz",
  "My Pet Cat",
];

const ADMOB_APPS = [
  "Find the Imposter",
  "Undercover",
  "Imposter Game",
  "Spy Imposter Game",
  "Guess Hollywood",
  "Guess Bollywood",
  "Bollywood Hollywood",
  "Bollywood Game: Guess Movie",
  "Puzzle Match",
  "Dawa Saathi",
  "ReactMaster",
  "AngularMaster",
  "Unscramble",
];

const FIREBASE_APPS = ["Bao and Friends", "Poko & Friends"];

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This policy is published by {STUDIO_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). It covers this website and our Google Play apps. Contact us at{" "}
        <a href={LINKS.contact}>{CONTACT.email}</a>. We do not sell personal information.
      </p>

      <LegalSection id="overview" title="1. Overview">
        <p>
          Our apps are complete on-device experiences. They do not use accounts, single
          sign-on (SSO), or cloud login. Most apps collect no personal information: gameplay
          and settings stay on the device, and we do not send personal data to our own
          servers.
        </p>
        <p>
          Some apps show ads through Google AdMob, and some use Firebase (Google) for app
          configuration. Those apps may collect and, where ads are shown, share limited
          device and usage data as described below.
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

      <LegalSection id="apps" title="3. Our apps">
        <p>
          The following apps do not include advertising or Firebase SDKs and do not collect
          personal information. They do not require sign-in, do not use SSO, and do not send
          personal data to our servers. Gameplay and settings stay on the device.
        </p>
        <LegalList items={APPS_WITHOUT_ADS_OR_FIREBASE} />
        <p>
          Apps that show ads, or that use Firebase for configuration, are listed in the
          sections below. Each app also has a short privacy page; if a short page is out of
          date, this studio policy is the current statement:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {catalogApps.map((app) => (
            <li key={app.id}>
              <Link href={app.privacyPolicyUrl ?? `/privacy/${app.id}`}>{app.name}</Link>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="advertising" title="4. Advertising (Google AdMob)">
        <p>
          The following apps show ads using Google AdMob (the Google Mobile Ads SDK):
        </p>
        <LegalList items={ADMOB_APPS} />
        <p>
          We do not use this data to identify you by name, and we do not sell it. Google
          AdMob may collect and share device identifiers (including the advertising ID),
          approximate location derived from IP address, app interaction data (such as app
          launches, taps, and video views), and diagnostic data (such as app launch time,
          hang rate, and energy usage). Google uses this information for advertising,
          analytics, and fraud prevention.
        </p>
        <p>
          Where required, these apps request consent through Google&apos;s User Messaging
          Platform (UMP) before personalized ads are served. You can also manage ad
          preferences in{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          and reset or delete your advertising ID in your device settings.
        </p>
        <p>
          For more about how Google handles this data, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites or apps that use our services
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="firebase" title="5. Firebase">
        <p>
          Some apps use Firebase (Google) for app configuration and diagnostics, specifically
          Firebase Core and Firebase Remote Config. They do not use Firebase for advertising.
          Those apps are:
        </p>
        <LegalList items={FIREBASE_APPS} />
        <p>
          Firebase may collect an app installation identifier, app identifiers, country,
          language, and time zone, plus limited diagnostic and device information needed to
          provide and maintain configuration. This data is used to change the behavior or
          appearance of the app without a store update, and by Google to provide and maintain
          Firebase services. It is not used to show ads in these apps.
        </p>
        <p>
          See also{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="children" title="6. Children's privacy">
        <p>
          This website is not directed at children under 13. Tiny Think, Bao and Family, Bao
          and Friends, Poko &amp; Friends, GK Adventure, Match &amp; Sort: Kids, and
          Unscramble For Kids are products for young children. Those apps do not show AdMob
          ads, and we do not knowingly collect personal information from children through
          those apps or this website.
        </p>
        <p>
          Bao and Friends and Poko &amp; Friends use Firebase only for app configuration and
          diagnostics, not for advertising, as described above.
        </p>
      </LegalSection>

      <LegalSection id="deletion" title="7. Data deletion and your choices">
        <p>
          To request deletion of data associated with our apps, email{" "}
          <a href={LINKS.contact}>{CONTACT.email}</a>. We will handle your request and, where
          the data is held by Google for advertising or Firebase services, we will also
          direct you to the relevant Google controls or process the request with Google as
          appropriate.
        </p>
        <p>
          For advertising, you can use{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          and the advertising ID controls in your Android settings at any time.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes">
        <p>
          We may update this policy. The &ldquo;Last updated&rdquo; date at the top will
          change when we do. Continued use of the website after an update means you accept
          the revised policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact">
        <p>
          Privacy questions:{" "}
          <a href={LINKS.contact}>{CONTACT.email}</a>
          . Developer: {CONTACT.address}.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
