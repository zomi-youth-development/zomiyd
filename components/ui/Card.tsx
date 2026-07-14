import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the puan-stripe accent along the card's top edge. */
  accent?: boolean;
  /** Apply hover lift effect (for clickable cards). */
  interactive?: boolean;
  /** Background tone. `surface` is white; `soft` is bone-50 for nesting on white. */
  tone?: "surface" | "soft";
}

/**
 * Card — bounded content container. Compose with CardHeader / CardBody / CardTitle.
 *
 * Use `accent` to add the puan-stripe motif along the top edge — this is our
 * primary recurring cultural cue. Use sparingly; not every card needs it.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, accent = false, interactive = false, tone = "surface", children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg border border-bone-200 shadow-soft",
          tone === "surface" ? "bg-white" : "bg-bone-50",
          interactive &&
            "transition-all duration-250 ease-out-soft hover:-translate-y-1 hover:shadow-raised",
          className
        )}
        {...props}
      >
        {accent && <span aria-hidden="true" className="puan-stripe block h-1 w-full" />}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-3", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 pb-6", className)} {...props} />
));
CardBody.displayName = "CardBody";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-display text-xl font-medium leading-snug text-highland-700",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export { Card, CardHeader, CardBody, CardTitle };
