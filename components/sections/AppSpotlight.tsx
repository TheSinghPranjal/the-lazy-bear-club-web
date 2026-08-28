"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { featuredLiveApps } from "@/lib/apps";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Image from "next/image";

export function AppSpotlight() {
  return (
    <section className="bg-brand-surface py-8 md:py-12">
      {featuredLiveApps.map((app, index) => {
        const textLeft = index % 2 === 0;
        return <SpotlightRow key={app.id} textLeft={textLeft} index={index} />;
      })}
    </section>
  );
}

function SpotlightRow({
  textLeft,
  index,
}: {
  textLeft: boolean;
  index: number;
}) {
  const app = featuredLiveApps[index]!;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shotY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const textVariants = textLeft ? slideInLeft : slideInRight;
  const shotVariants = textLeft ? slideInRight : slideInLeft;

  return (
    <section
      ref={ref}
      id={`spotlight-${app.id}`}
      className="scroll-mt-24 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-20">
        <motion.div
          className={textLeft ? "md:order-1" : "md:order-2"}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={textVariants} className="flex items-center gap-3">
            <span
              className="relative block h-14 w-14 overflow-hidden bg-white shadow-sm ring-1 ring-brand-green/10"
              style={{ borderRadius: 14 }}
            >
              <Image src={app.icon} alt="" fill className="object-cover" sizes="56px" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold text-brand-text md:text-3xl">{app.name}</h2>
                <StatusBadge status={app.status} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-muted">
                {app.category}
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-brand-muted"
          >
            {app.description}
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-6 space-y-2.5">
            {app.features.map((feature) => (
              <motion.li
                key={feature}
                variants={fadeUp}
                className="flex gap-2 text-brand-text"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {app.playStoreUrl && (
              <Button href={app.playStoreUrl} external>
                Google Play
              </Button>
            )}
            {app.websiteUrl && (
              <Button href={app.websiteUrl} variant="outline" external>
                Visit site
              </Button>
            )}
            <Button href={`/apps/${app.id}`} variant="ghost">
              Learn more
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={textLeft ? "md:order-2" : "md:order-1"}
          variants={shotVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div style={{ y: shotY }} className="flex items-end justify-center gap-4">
            {app.screenshots.slice(0, 2).map((src, i) => (
              <DeviceFrame
                key={src}
                src={src}
                alt={`${app.name} screenshot ${i + 1}`}
                className={i === 1 ? "hidden sm:block sm:-mb-8 sm:w-[240px]" : undefined}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
