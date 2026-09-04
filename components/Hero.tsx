import Image from "next/image";
// import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollNextSectionBtn } from "@/components/ScrollNextSectionBtn";
import HeroCoverImg from "@/public/images/herocover.png";

/**
 * Hero — full-viewport opening section.
 *
 * Composition:
 * - Background photo with priority loading (LCP candidate).
 * - Dual-stop gradient overlay: darker at top for header legibility,
 *   darker at bottom for CTA contrast, lighter in the middle for the
 *   photo to read through.
 * - Centered text stack: eyebrow → headline → italic tagline → CTA.
 * - puan-stripe accent along the bottom edge as a subtle cultural cue
 *   and visual transition into the next section.
 * - Bouncing scroll affordance pinned to bottom-center.
 */
export function Hero() {
  const donateToYdStripeLink = "https://donate.stripe.com/28o01n8tpf94fW8000";
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src={HeroCoverImg}
        alt=""
        priority
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-highland-900/55 via-highland-900/30 to-highland-900/70"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <Eyebrow tone="warm" className="mx-auto text-hearth-300">
          Zomi Youth Development
        </Eyebrow>
        <h1 className="mt-5 font-display text-display-xl text-bone-50">
          Welcome to Zomi YD
        </h1>
        <p className="mt-4 font-display text-2xl italic text-hearth-300 sm:text-3xl">
          Zomi Picing · Siamsin Picing
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone-100 sm:text-lg">
          A youth-led nonprofit serving Zomi families across America.
        </p>
        <div className="mt-9 flex justify-center">
          <Button asChild variant="primary" size="lg">
            {/*<Link href="/donate">Donate</Link>*/}
            <a href={donateToYdStripeLink} target="_blank" rel="noopener norefresher">Donate</a>
          </Button>
        </div>
      </div>

      <ScrollNextSectionBtn targetId="video-section" />

      {/* puan-stripe accent along the bottom edge */}
      <div
        aria-hidden="true"
        className="puan-stripe absolute inset-x-0 bottom-0 z-10 h-1"
      />
    </section>
  );
}
