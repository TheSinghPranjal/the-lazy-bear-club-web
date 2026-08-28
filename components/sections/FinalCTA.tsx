"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { StudioGrid } from "@/components/ui/StudioGrid";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-24 md:py-32">
      <StudioGrid opacity={0.12} />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            Follow our next release
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          >
            Want a note when the next Lazy Bear Club app goes live? Send us an email —
            no form, no list to manage.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Button
              href={LINKS.notifyRelease}
              variant="accent"
              size="lg"
            >
              Notify me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
