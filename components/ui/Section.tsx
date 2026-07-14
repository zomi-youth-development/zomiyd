import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted" | "dark" | "warm" | "brand";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * - `default` — Bone canvas, ink text. The standard page section.
   * - `muted`   — Slightly sunken bone for visual separation between sections.
   * - `dark`    — Highland Navy background, bone text. For hero or emphasis bands.
   * - `warm`    — Subtle Hearth Amber tint. For "Get Involved" / community sections.
   * - `brand`   — Solid Puan Red. For donation CTA bands or strong identity moments.
   */
  tone?: SectionTone;
  /**
   * - `sm` — modest vertical padding (utility sections)
   * - `md` — default (most content sections)
   * - `lg` — generous (hero-adjacent or feature sections)
   * - `xl` — dramatic (hero, full-bleed editorial)
   */
  spacing?: SectionSpacing;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-canvas text-body",
  muted: "bg-canvas-sunk text-body",
  dark: "bg-highland-700 text-bone-50",
  warm: "bg-hearth-500/10 text-body",
  brand: "bg-puan-500 text-bone-50",
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-32 lg:py-40",
};

/**
 * Vertical content band. Pair with <Container> for the standard page rhythm:
 *
 *   <Section tone="muted" spacing="lg">
 *     <Container>
 *       ...content
 *     </Container>
 *   </Section>
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, tone = "default", spacing = "md", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(toneClasses[tone], spacingClasses[spacing], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };
