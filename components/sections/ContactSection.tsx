"use client";

import { motion } from "framer-motion";
import { CONTACT, LINKS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Work with us / press / partnerships"
          description="Email is the fastest way to reach the studio — for press, partnerships, or product questions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-4"
        >
          <motion.div variants={fadeUp}>
            <Button href={LINKS.contactInquiry} size="lg">
              Email {CONTACT.email}
            </Button>
          </motion.div>
          <motion.a
            variants={fadeUp}
            href={LINKS.phone}
            className="text-sm text-brand-muted hover:text-brand-green"
          >
            {CONTACT.phone}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
