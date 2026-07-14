import { forwardRef, type ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "default" | "narrow" | "wide" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * - `default` (76rem / 1216px) — page sections, hero content
   * - `narrow` (56rem / 896px) — long-form reading, blog posts
   * - `wide` — full-bleed dashboards, image-heavy hero rows
   * - `full` — no max width (rare; use Section padding instead)
   */
  width?: ContainerWidth;
  /** Render as a different element (e.g. "section", "article"). Defaults to "div". */
  as?: ElementType;
}

const widthClasses: Record<ContainerWidth, string> = {
  default: "max-w-content",
  narrow: "max-w-content-narrow",
  wide: "max-w-screen-2xl",
  full: "max-w-none",
};

/**
 * Centers content within a max-width and applies responsive horizontal
 * padding. Use this inside every <Section> to constrain content width
 * while letting the section background fill edge-to-edge.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, width = "default", as: Tag = "div", ...props }, ref) => {
    const Component = Tag as ElementType;
    return (
      <Component
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          widthClasses[width],
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
