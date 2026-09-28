import Link from "next/link";
import { cn } from "@/lib/utils";
import { STUDIO_NAME } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: number;
  variant?: "light" | "dark";
}

const PALETTE = {
  dark: {
    fur: "#2D4A3E",
    ear: "#C47B4A",
    eye: "#F7F4EF",
    muzzle: "#F7F4EF",
    nose: "#1A2E26",
    z: "#C47B4A",
  },
  light: {
    fur: "#F7F4EF",
    ear: "#D4A574",
    eye: "#1A2E26",
    muzzle: "#D4A574",
    nose: "#1A2E26",
    z: "#D4A574",
  },
} as const;

/** Sleepy bear mark: closed eyes, muzzle, and a couple of drifting z's. */
export function LogoMark({
  size = 40,
  variant = "dark",
  className,
}: Pick<LogoProps, "size" | "variant" | "className">) {
  const p = PALETTE[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={STUDIO_NAME}
    >
      <title>{STUDIO_NAME}</title>
      <circle cx="16" cy="21" r="8.5" fill={p.fur} />
      <circle cx="44" cy="21" r="8.5" fill={p.fur} />
      <circle cx="16" cy="21" r="4.2" fill={p.ear} />
      <circle cx="44" cy="21" r="4.2" fill={p.ear} />
      <ellipse cx="30" cy="39" rx="21" ry="18.5" fill={p.fur} />
      <path
        d="M17.5 35.5q4 3.6 8 0M34.5 35.5q4 3.6 8 0"
        fill="none"
        stroke={p.eye}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <ellipse cx="30" cy="46" rx="9" ry="7" fill={p.muzzle} />
      <ellipse cx="30" cy="42.6" rx="3.4" ry="2.4" fill={p.nose} />
      <path
        d="M27 47.2q3 2.2 6 0"
        fill="none"
        stroke={p.nose}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M52 6h6.5l-6.5 7.5h6.5"
        fill="none"
        stroke={p.z}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 17.5h3.6l-3.6 4h3.6"
        fill="none"
        stroke={p.z}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.75}
      />
    </svg>
  );
}

export function Logo({
  className,
  showName = true,
  size = 40,
  variant = "dark",
}: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={size} variant={variant} />
      {showName && (
        <span
          className={cn(
            "text-lg font-semibold leading-none",
            variant === "light" ? "text-white" : "text-brand-text",
          )}
        >
          {STUDIO_NAME}
        </span>
      )}
    </Link>
  );
}
