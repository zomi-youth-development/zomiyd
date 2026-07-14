import { cn } from "@/lib/cn";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * - `warm` — Hearth Amber (default, friendliest)
   * - `navy` — Highland Navy (formal)
   * - `puan` — Puan Red (urgent/identity)
   */
  tone?: "warm" | "navy" | "puan";
}

const toneClasses = {
  warm: "text-hearth-700",
  navy: "text-highland-500",
  puan: "text-puan-600",
} as const;

/**
 * Eyebrow — a short uppercase label that pairs above a heading.
 * E.g.:
 *
 *   <Eyebrow>Mentorship</Eyebrow>
 *   <h2>Pasian Khaisak Mentor Program</h2>
 *
 * Establishes hierarchy and adds editorial polish without extra ornament.
 */
export function Eyebrow({ className, tone = "warm", ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "block text-xs font-medium uppercase tracking-[0.12em]",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
