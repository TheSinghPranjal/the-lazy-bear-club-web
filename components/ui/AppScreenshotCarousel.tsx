"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppScreenshotCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function AppScreenshotCarousel({
  images,
  alt,
  className,
}: AppScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const shots = images;

  if (shots.length === 0) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center rounded-xl border border-dashed border-brand-green/20 bg-brand-green/5 text-sm text-brand-muted",
          className,
        )}
      >
        Add screenshots in public/apps/
      </div>
    );
  }

  const goTo = (i: number) => {
    setIndex(i);
    const el = scrollerRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
          if (i !== index) setIndex(i);
        }}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((src, i) => (
          <div
            key={src}
            className="relative aspect-video w-full shrink-0 snap-center overflow-hidden bg-brand-green/5"
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        ))}
      </div>
      {shots.length > 1 && (
        <div className="mt-2 flex justify-center gap-1.5">
          {shots.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-brand-green" : "w-1.5 bg-brand-green/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
