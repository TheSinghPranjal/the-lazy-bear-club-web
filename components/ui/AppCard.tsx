"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { isPlayReady, STATUS_LABEL, type StudioApp } from "@/lib/apps";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AppScreenshotCarousel } from "@/components/ui/AppScreenshotCarousel";

export function AppCard({ app }: { app: StudioApp }) {
  const playReady = isPlayReady(app);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group flex h-full w-[min(100%,20rem)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm md:w-full"
    >
      <div className="p-5 pb-3">
        <div className="flex items-start gap-3">
          <span
            className="relative block h-[72px] w-[72px] shrink-0 overflow-hidden bg-brand-surface"
            style={{ borderRadius: 16 }}
          >
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="72px"
            />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-lg font-semibold text-brand-text">{app.name}</h3>
              <StatusBadge status={app.status} />
            </div>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-muted">
              {app.category}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{app.tagline}</p>
      </div>

      <div className="px-5">
        <AppScreenshotCarousel images={app.screenshots} alt={app.name} />
      </div>

      <div className="mt-auto flex flex-wrap gap-2 p-5 pt-4">
        {playReady ? (
          <Button href={app.playStoreUrl} size="sm" external>
            Google Play
          </Button>
        ) : (
          <Button size="sm" disabled>
            {STATUS_LABEL[app.status]}
          </Button>
        )}
        <Button href={`/apps/${app.id}`} variant="ghost" size="sm">
          Learn more
        </Button>
      </div>
    </motion.article>
  );
}
