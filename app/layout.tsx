import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE, STUDIO_NAME, TAGLINE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/layout/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${STUDIO_NAME} — Mobile Apps & Games`,
    template: `%s — ${STUDIO_NAME}`,
  },
  description:
    "Official studio site. Abode Home, Guess Hollywood, Puzzle Match, Tiny Think, and more — built for Android.",
  keywords: [
    "The Lazy Bear Club",
    "Abode Home",
    "Guess Hollywood",
    "Puzzle Match",
    "Tiny Think",
    "Android games",
    "indie studio",
  ],
  icons: {
    icon: "/studio/logo.png",
    apple: "/studio/logo.png",
  },
  openGraph: {
    title: `${STUDIO_NAME} — Mobile Apps & Games`,
    description:
      "Official studio site. Abode Home, Guess Hollywood, Puzzle Match, Tiny Think, and more — built for Android.",
    images: [{ url: SITE.ogImage, width: 512, height: 512, alt: `${STUDIO_NAME} logo` }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: STUDIO_NAME,
    description: TAGLINE,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
