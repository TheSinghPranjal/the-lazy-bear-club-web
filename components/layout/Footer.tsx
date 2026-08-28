import Link from "next/link";
import { CONTACT, DEVELOPER, LINKS, STUDIO_NAME, TAGLINE } from "@/lib/constants";
import { catalogApps, archivedApps, liveApps } from "@/lib/apps";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-green/10 bg-brand-text text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" size={44} className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{TAGLINE}</p>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href={LINKS.contactInquiry}
                className="block text-white/60 transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
              <a
                href={LINKS.phone}
                className="block text-white/60 transition-colors hover:text-white"
              >
                {CONTACT.phone}
              </a>
              <p className="text-white/60">{CONTACT.address}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Studio
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#apps" className="text-sm text-white/60 transition-colors hover:text-white">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-white/60 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.contactInquiry}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href={LINKS.privacy} className="text-sm text-white/60 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={LINKS.terms} className="text-sm text-white/60 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.developerLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn — {DEVELOPER.name}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              App privacy
            </h4>
            <ul className="space-y-3">
              {liveApps.map((app) => (
                <li key={app.id}>
                  <Link
                    href={app.privacyPolicyUrl ?? `/privacy/${app.id}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {archivedApps.length > 0 && (
          <p className="mt-10 text-xs text-white/35">
            Past projects:{" "}
            {archivedApps.map((app) => app.name).join(", ")}. Not currently distributed.
          </p>
        )}

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/40">
          <p>
            © {year} {STUDIO_NAME}. All rights reserved.
          </p>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
          <p>
            Built by {DEVELOPER.name}. {catalogApps.length} apps in the current catalog.
          </p>
        </div>
      </div>
    </footer>
  );
}
