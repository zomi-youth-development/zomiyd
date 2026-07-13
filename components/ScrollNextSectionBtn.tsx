"use client";

import { ChevronDown } from "lucide-react";

interface ScrollNextSectionBtnProps {
  targetId: string;
}

/**
 * Scroll affordance pinned to the bottom-center of the hero.
 *
 * Improvements over previous version:
 * - Properly centered via `left-1/2 -translate-x-1/2` (the previous
 *   version had no horizontal anchoring and relied on flex parent positioning).
 * - Uses Lucide `ChevronDown` instead of inline SVG.
 * - Adds `type="button"` and `aria-label` for accessibility.
 * - Backdrop-blur and subtle border for legibility over varied hero imagery.
 */
export function ScrollNextSectionBtn({ targetId }: ScrollNextSectionBtnProps) {
  const scrollToNextSection = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to next section"
      className="absolute bottom-8 left-1/2 z-10 inline-flex h-12 w-12 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-bone-50/20 bg-highland-900/40 text-bone-50 shadow-soft backdrop-blur-sm transition-colors hover:bg-highland-900/60"
    >
      <ChevronDown className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
