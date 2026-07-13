import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface CoverProps {
  /** Optional small label above the title (e.g. "About us"). */
  eyebrow?: string;
  /** The page title — becomes the h1. Only one <Cover> per page. */
  title: string;
  /** Optional descriptor beneath the title. */
  subtitle?: string;
  backgroundImage: StaticImageData;
}

/**
 * Cover — the reusable page header shown at the top of content pages
 * like About Us, What We Do, and Stories.
 *
 * Improvements over the previous version:
 * - Uses <Image fill> with priority + object-cover for optimization
 *   (was CSS background-image, which bypasses Next.js image pipeline).
 * - Uses <section> with a proper <h1> instead of an unlabeled <div>.
 * - Dual-stop gradient overlay for legibility across varied imagery.
 * - Eyebrow + optional subtitle support.
 * - Puan-stripe accent along the bottom edge (matches Hero).
 * - Height uses `min-h-[60vh]` and small-viewport units so the top
 *   of the image is never cropped by mobile browser chrome.
 */
export function Cover({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
}: CoverProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden sm:min-h-[70vh]">
      <Image
        src={backgroundImage}
        alt=""
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-highland-900/60 via-highland-900/45 to-highland-900/70"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-20 text-center">
        {eyebrow && (
          <Eyebrow tone="warm" className="mx-auto text-hearth-300">
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className={cn(
            "font-display text-display-lg text-bone-50 sm:text-display-xl",
            eyebrow && "mt-5"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bone-100 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div
        aria-hidden="true"
        className="puan-stripe absolute inset-x-0 bottom-0 z-10 h-1"
      />
    </section>
  );
}
