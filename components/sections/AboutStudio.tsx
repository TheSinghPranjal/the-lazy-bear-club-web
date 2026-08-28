"use client";

import { motion } from "framer-motion";
import { CONTACT, DEVELOPER, LINKS, STUDIO_NAME } from "@/lib/constants";
import { apps, liveApps } from "@/lib/apps";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: apps.length, suffix: "", label: "apps in portfolio" },
  { value: liveApps.length, suffix: "", label: "live on Google Play" },
  { value: 1, suffix: "", label: "Android-first studio" },
];

export function AboutStudio() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Studio"
          title={`About ${STUDIO_NAME}`}
          description="An indie studio in Bangalore building mobile apps and games for Android — tools for work, and games people actually finish."
        />

        <motion.div
          className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-brand-green/10 bg-brand-surface p-8 text-center"
            >
              <p className="text-4xl font-bold text-brand-green md:text-5xl">
                {stat.label === "Android-first studio" ? (
                  "Android"
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-2 font-medium text-brand-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-xl rounded-3xl border border-brand-green/10 bg-brand-surface p-8 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Developer
          </p>
          <p className="mt-2 text-2xl font-bold text-brand-text">{DEVELOPER.name}</p>
          <p className="mt-2 text-brand-muted">{CONTACT.address}</p>
          <a
            href={LINKS.developerLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-brand-green hover:underline"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
