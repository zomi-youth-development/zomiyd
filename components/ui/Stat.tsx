"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface StatProps {
  /** Target number the stat counts up to. */
  value: number;
  /** Caption shown below the number. */
  label: string;
  /** Optional suffix appended to the number (e.g. "+", "%"). */
  suffix?: string;
  /** Optional prefix prepended to the number (e.g. "$"). */
  prefix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
}

/**
 * Count up from 0 to `target` using requestAnimationFrame with an ease-out
 * cubic curve. Only starts once `start` becomes true so the consumer can
 * defer animation until the element scrolls into view.
 */
function useCountUp(target: number, durationMs: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out-cubic — fast start, gentle settle
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, durationMs, start]);

  return value;
}

/**
 * Stat — display a count-up number with a caption.
 *
 * Improvements over the previous AnimateCounter:
 * - Animates only when scrolled into view (IntersectionObserver)
 * - Smooth animation via requestAnimationFrame (not 100ms setInterval)
 * - Ease-out cubic curve for a more polished settle
 * - Locale-aware number formatting (commas for thousands)
 * - Stops cleanly on unmount
 *
 * Compose multiple <Stat /> inside a grid for a stats strip.
 */
export function Stat({
  value,
  label,
  suffix,
  prefix,
  duration = 1600,
  className,
}: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const display = useCountUp(value, duration, inView);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center gap-3 text-center", className)}
    >
      <div className="font-display text-5xl font-medium leading-none tracking-tight text-highland-700 sm:text-6xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
        {label}
      </p>
    </div>
  );
}
