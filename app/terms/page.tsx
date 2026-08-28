import type { Metadata } from "next";
import { CONTACT, LINKS, STUDIO_NAME } from "@/lib/constants";
import {
  LegalList,
  LegalPageLayout,
  LegalSection,
} from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Website terms of use for ${STUDIO_NAME}.`,
};

const LAST_UPDATED = "August 28, 2026";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSection id="acceptance" title="1. Acceptance">
        <p>
          By using this website you agree to these Terms. If you do not agree, do not use the
          site.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. The website">
        <p>
          This site is the public studio hub for {STUDIO_NAME}. It describes our apps and how
          to contact us. App downloads are provided through Google Play (and other stores if
          listed). Store terms apply to those downloads.
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. Acceptable use">
        <LegalList
          items={[
            "Do not misuse the site, attempt unauthorized access, or scrape it in a way that harms availability.",
            "Trademarks, app names, and artwork remain our property or that of their respective owners.",
            "Movie titles and studio names used in trivia games belong to their rights holders. We are not affiliated with Hollywood or Bollywood studios.",
          ]}
        />
      </LegalSection>

      <LegalSection id="disclaimer" title="4. Disclaimer">
        <p>
          The website is provided as-is. Apps may be in draft, in review, or live. Status badges
          on this site are informational and may lag the Play Console. Health-related apps
          (including Dawa Saathi) are not medical advice.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="5. Limitation of liability">
        <p>
          To the fullest extent permitted by law, {STUDIO_NAME} is not liable for indirect or
          consequential damages arising from use of this website.
        </p>
      </LegalSection>

      <LegalSection id="law" title="6. Governing law">
        <p>
          These Terms are governed by the laws of India. Courts in Bangalore, Karnataka have
          exclusive jurisdiction, subject to mandatory consumer protections that apply to you.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact">
        <p>
          {CONTACT.email} · {CONTACT.address}. See also{" "}
          <a href={LINKS.privacy}>Privacy Policy</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
