import { cn } from "@/lib/cn";

interface StripeAccentProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

/**
 * The puan-stripe motif as a standalone graphic element.
 *
 * Inspired by the proportional bands of color in traditional puan textile
 * weaving. Use as a top border on cards, a section divider, a footer
 * top-edge accent, or any place where you want a subtle cultural cue
 * without dominating the composition.
 *
 * The horizontal version reads as a strong bar; the vertical version
 * works well as a sidebar accent or alongside images.
 */
export function StripeAccent({
  orientation = "horizontal",
  className,
}: StripeAccentProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        orientation === "horizontal"
          ? "puan-stripe block h-1 w-full"
          : "puan-stripe-vertical block h-full w-1",
        className
      )}
    />
  );
}
