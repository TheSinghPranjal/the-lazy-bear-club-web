"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LINKS, STUDIO_NAME, TAGLINE } from "@/lib/constants";
import { featuredLiveApps } from "@/lib/apps";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { StudioGrid } from "@/components/ui/StudioGrid";

export function StudioHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const stripY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const stripScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-surface pt-24"
    >
      <StudioGrid animated opacity={0.1} />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 via-transparent to-brand-surface" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center md:px-6">
        <motion.div
          style={{ y: textY }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent"
          >
            Independent studio · Bangalore
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl lg:text-6xl"
          >
            Apps & games from {STUDIO_NAME}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-muted md:text-xl"
          >
            {TAGLINE} Android-first products — interior tools, trivia, puzzles, and early
            learning — built in India.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/#apps" size="lg">
              Explore Apps
            </Button>
            <Button href={LINKS.contactInquiry} variant="outline" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: stripY, scale: stripScale }}
          className="mt-16 flex w-full max-w-2xl flex-wrap items-center justify-center gap-5 md:gap-8"
        >
          {featuredLiveApps.map((app, i) => (
            <motion.a
              key={app.id}
              href={`/#spotlight-${app.id}`}
              className="group relative"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.6 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <span
                className="relative block h-16 w-16 overflow-hidden bg-white shadow-lg shadow-brand-green/10 ring-1 ring-brand-green/10 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                style={{ borderRadius: 18 }}
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </span>
              <span className="mt-2 block text-xs font-medium text-brand-muted">{app.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
