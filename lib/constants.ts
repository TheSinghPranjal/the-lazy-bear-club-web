export const STUDIO_NAME = "The Lazy Bear Club";
export const TAGLINE = "We build apps people love to play — and tools people love to use.";

export const CONTACT = {
  email: "adobehomespace@gmail.com",
  phone: "+91 6363957079",
  phoneTel: "tel:+916363957079",
  address: "Bangalore, India",
} as const;

export const DEVELOPER = {
  name: "Pranjal Singh",
  linkedin: "https://www.linkedin.com/in/thesinghpranjal/",
} as const;

export const SITE = {
  url: "https://thelazybearclub.com",
  ogImage: "/studio/logo.png",
} as const;

export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${CONTACT.email}${query ? `?${query}` : ""}`;
}

export const LINKS = {
  contact: mailto(),
  contactInquiry: mailto("The Lazy Bear Club — Inquiry"),
  notifyRelease: mailto("Notify me — New Lazy Bear Club app"),
  privacy: "/privacy",
  terms: "/terms",
  phone: CONTACT.phoneTel,
  developerLinkedIn: DEVELOPER.linkedin,
} as const;

export const NAV_ITEMS = [
  { label: "Apps", href: "/#apps" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy", href: "/privacy" },
] as const;
