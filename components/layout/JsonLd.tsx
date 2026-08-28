import { CONTACT, DEVELOPER, LINKS, SITE, STUDIO_NAME, TAGLINE } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: STUDIO_NAME,
    url: SITE.url,
    logo: `${SITE.url}${SITE.ogImage}`,
    description: TAGLINE,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    sameAs: [DEVELOPER.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT.email,
      telephone: CONTACT.phone,
      contactType: "customer support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
