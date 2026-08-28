"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { catalogApps } from "@/lib/apps";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppCard } from "@/components/ui/AppCard";
import { cn } from "@/lib/utils";

type Filter = "all" | "live" | "soon";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "soon", label: "Coming soon" },
];

export function AppsGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "live") return catalogApps.filter((app) => app.status === "live");
    if (filter === "soon") {
      return catalogApps.filter(
        (app) => app.status === "in_review" || app.status === "draft" || app.status === "coming_soon",
      );
    }
    return catalogApps;
  }, [filter]);

  return (
    <section id="apps" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our apps"
          description="Live on Google Play, in review, or in development. Status matches the Play Console — no inflated numbers."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === item.id
                  ? "bg-brand-green text-white"
                  : "bg-brand-surface text-brand-muted hover:text-brand-text",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {visible.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </motion.div>

        {visible.length === 0 && (
          <motion.p variants={fadeUp} className="text-center text-brand-muted">
            Nothing in this filter yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
