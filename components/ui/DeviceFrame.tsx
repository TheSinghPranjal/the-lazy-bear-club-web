"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export function DeviceFrame({ src, alt, className }: DeviceFrameProps) {
  return (
    <motion.div
      className={cn("relative mx-auto w-[240px] sm:w-[280px]", className)}
      style={{ perspective: 1200 }}
      whileHover={{ rotateY: -4, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-brand-text/90 bg-brand-text shadow-2xl shadow-brand-green/20">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="relative aspect-[9/19] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 240px, 280px"
          />
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-green/5 blur-2xl" />
    </motion.div>
  );
}
