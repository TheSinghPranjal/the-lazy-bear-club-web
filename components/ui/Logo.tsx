import Link from "next/link";
import { cn } from "@/lib/utils";
import { STUDIO_NAME } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: number;
  variant?: "light" | "dark";
}

export function Logo({
  className,
  showName = true,
  size = 40,
  variant = "dark",
}: LogoProps) {
  const fill = variant === "light" ? "#F7F4EF" : "#2D4A3E";
  const eye = variant === "light" ? "#1A2E26" : "#F7F4EF";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="shrink-0"
        role="img"
        aria-label={STUDIO_NAME}
      >
        <title>{STUDIO_NAME}</title>
        <circle cx="18" cy="17" r="9" fill={fill} />
        <circle cx="46" cy="17" r="9" fill={fill} />
        <circle cx="32" cy="36" r="19" fill={fill} />
        <circle cx="24.5" cy="33.5" r="3.1" fill={eye} />
        <circle cx="39.5" cy="33.5" r="3.1" fill={eye} />
        <path
          d="M25 44.5c3.4 3.2 10.6 3.2 14 0"
          fill="none"
          stroke={eye}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
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
