"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StudioGridProps {
  className?: string;
  animated?: boolean;
  opacity?: number;
}

export function StudioGrid({ className, animated = false, opacity = 0.08 }: StudioGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: "radial-gradient(#2D4A3E 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
        animate={animated ? { backgroundPosition: ["0px 0px", "28px 28px"] } : undefined}
        transition={animated ? { duration: 22, repeat: Infinity, ease: "linear" } : undefined}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--color-brand-surface, #F7F4EF) 72%)",
        }}
      />
    </div>
  );
}
