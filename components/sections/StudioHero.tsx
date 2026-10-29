"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LINKS, STUDIO_NAME, TAGLINE } from "@/lib/constants";
import { featuredLiveApps } from "@/lib/apps";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const HIGHLIGHTS = [
  {
    label: ["Fun &", "Engaging Apps"],
    tint: "bg-[#f6dccb]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#c0603a" aria-hidden>
        <path d="M7.5 7h9a4.5 4.5 0 0 1 4.4 5.5l-1 4.4a2.6 2.6 0 0 1-4.4 1.2L13.8 16h-3.6l-1.7 2.1a2.6 2.6 0 0 1-4.4-1.2l-1-4.4A4.5 4.5 0 0 1 7.5 7Z" />
        <path
          d="M8 10.2v3M6.5 11.7h3"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="15.6" cy="10.8" r="1" fill="#fff" />
        <circle cx="17.4" cy="12.8" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    label: ["Educational", "Games"],
    tint: "bg-[#fbe6c2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1V17h5v-1.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3Z"
          fill="#f2b136"
        />
        <path d="M9.5 19.5h5M10.5 21.5h3" stroke="#d9952a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: ["Puzzles", "& Trivia"],
    tint: "bg-[#d3e6f6]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#2f8fd6" aria-hidden>
        <path d="M10 3.5a2 2 0 0 1 4 0V5h3.5A1.5 1.5 0 0 1 19 6.5V10h-1.5a2 2 0 0 0 0 4H19v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a2 2 0 0 0-4 0V19H6.5A1.5 1.5 0 0 1 5 17.5V14h1.5a2 2 0 0 0 0-4H5V6.5A1.5 1.5 0 0 1 6.5 5H10V3.5Z" />
      </svg>
    ),
  },
  {
    label: ["Built", "with Love"],
    tint: "bg-[#f8d7da]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#d9363e" aria-hidden>
        <path d="M12 20.5s-7.5-4.6-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1Z" />
      </svg>
    ),
  },
] as const;

export function StudioHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const stripY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-brand-surface pt-24"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -bottom-20">
        <Image
          src="/studio/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_bottom] md:object-[72%_center]"
        />
      </motion.div>
      {/* Warm cream wash keeps the copy legible while the bear stays vivid on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3e4]/95 via-[#fbf3e4]/70 via-45% to-transparent to-80%" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf3e4]/90 via-[#fbf3e4]/80 via-65% to-transparent md:hidden" />

      <div className="relative mx-auto w-full max-w-7xl flex-1 px-4 pb-10 pt-10 md:px-6 md:pt-14">
        <motion.div
          style={{ y: textY }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-block rounded-full bg-[#f6dcc4]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent"
          >
            Independent studio · Bangalore
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-green-dark sm:text-5xl lg:text-[4.25rem]"
          >
            Apps & games from
            <br />
            <span className="text-brand-accent">{STUDIO_NAME}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted md:text-xl"
          >
            {TAGLINE} Android-first products — interior tools, trivia, puzzles, and early
            learning — built in India.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/#apps" size="lg" className="font-semibold">
              Explore Apps
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              href={LINKS.contactInquiry}
              variant="outline"
              size="lg"
              className="border-brand-green bg-white/40 font-semibold text-brand-green-dark backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-4 gap-2 text-center text-xs font-medium text-brand-muted sm:text-sm"
          >
            {HIGHLIGHTS.map((item) => (
              <li key={item.label.join(" ")} className="flex flex-col items-center gap-2">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full shadow-sm sm:h-14 sm:w-14 ${item.tint}`}
                >
                  {item.icon}
                </span>
                <span className="leading-snug">
                  {item.label[0]}
                  <br />
                  {item.label[1]}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        style={{ y: stripY }}
        className="relative mx-auto flex w-full max-w-5xl flex-wrap items-end justify-center gap-3 px-4 pb-6 sm:gap-4 md:pb-0"
      >
        {featuredLiveApps.map((app, i) => (
          <motion.a
            key={app.id}
            href={`/#spotlight-${app.id}`}
            aria-label={app.name}
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
          >
            <span className="relative block h-16 w-16 overflow-hidden rounded-[22%] bg-white shadow-xl shadow-black/25 ring-2 ring-white/70 transition-transform duration-300 group-hover:-translate-y-2 sm:h-24 sm:w-24 md:h-32 md:w-32">
              <Image
                src={app.icon}
                alt={app.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 128px, 96px"
                priority
              />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
