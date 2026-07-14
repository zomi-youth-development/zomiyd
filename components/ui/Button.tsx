import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Button — the workhorse interactive component.
 *
 * Use `asChild` to wrap a Next.js <Link>, an <a>, or any other element that
 * should *look* like a button without being a literal <button>. This avoids
 * the invalid-HTML pattern of nesting an <a> inside a <button>:
 *
 *   <Button asChild variant="primary">
 *     <Link href="/donate">Donate</Link>
 *   </Button>
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md font-medium tracking-wide",
    "transition-colors duration-250 ease-out-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-puan-500",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        // Primary CTA — Puan Red. Use sparingly; reserve for the single
        // most important action on a page (Donate, Get Involved).
        primary:
          "bg-puan-500 text-bone-50 hover:bg-puan-600 active:bg-puan-700",
        // Secondary CTA — Highland Navy. Use for important but non-primary
        // actions (Learn More, Read All Stories).
        secondary:
          "bg-highland-700 text-bone-50 hover:bg-highland-600 active:bg-highland-800",
        // Warm CTA — Hearth Amber. Use for inviting actions that aren't
        // monetary (Subscribe, RSVP, Volunteer).
        warm: "bg-hearth-500 text-highland-900 hover:bg-hearth-600 active:bg-hearth-700",
        // Outline — quiet but available. Use on dark hero backgrounds
        // or as the partner to a primary button.
        outline:
          "border border-highland-700 bg-transparent text-highland-700 hover:bg-highland-700 hover:text-bone-50",
        // Outline on dark — for use inside dark Sections.
        "outline-light":
          "border border-bone-50 bg-transparent text-bone-50 hover:bg-bone-50 hover:text-highland-700",
        // Ghost — no border, no background. Use in tight UI like card actions.
        ghost: "bg-transparent text-highland-700 hover:bg-bone-200",
        // Link — looks like a hyperlink but has button affordances.
        link: "h-auto bg-transparent px-0 text-puan-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
