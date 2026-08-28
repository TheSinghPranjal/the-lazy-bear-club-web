"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white shadow-lg shadow-brand-green/25 hover:bg-brand-green-dark",
  secondary:
    "bg-brand-accent text-white shadow-lg shadow-brand-accent/20 hover:opacity-90",
  outline:
    "border-2 border-brand-green/30 text-brand-green hover:border-brand-green hover:bg-brand-green/5",
  ghost: "text-brand-green hover:bg-brand-green/10",
  accent: "bg-brand-gold text-brand-text shadow-md hover:bg-brand-gold/90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  external,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    variants[variant],
    sizes[size],
    disabled && "cursor-not-allowed opacity-50 hover:bg-brand-green",
    className,
  );

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25 },
      };

  if (href && !disabled) {
    if (external || href.startsWith("http") || href.startsWith("mailto")) {
      return (
        <motion.a
          href={href}
          className={classes}
          {...motionProps}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
