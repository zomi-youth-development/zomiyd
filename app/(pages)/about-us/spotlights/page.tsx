import Image from "next/image";
import Link from "next/link";
import { Cover } from "@/components/Cover";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import {
  spotlights,
  categoryLabels,
  type Spotlight,
  type SpotlightCategory,
} from "@/lib/spotlights";

// TODO: swap for a purpose-shot cover image once available.
import coverImage from "@/public/images/community_pic_yd.jpg";

export const metadata = {
  title: "Member Spotlights",
  description:
    "Celebrating Zomi Youth Development members recognized for outstanding leadership, commitment, and community impact.",
};

/**
 * Small metadata line displayed above a member's name. Category chip
 * (Puan tint) + date label. Used both on the featured hero and the grid.
 */
function SpotlightMeta({
  category,
  dateLabel,
  compact = false,
}: {
  category: SpotlightCategory;
  dateLabel: string;
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "flex flex-wrap items-baseline gap-2 text-[11px] uppercase tracking-[0.1em]"
          : "flex flex-wrap items-baseline gap-3 text-xs uppercase tracking-[0.12em]"
      }
    >
      <span className="rounded-full bg-puan-500/10 px-3 py-1 font-medium text-puan-600">
        {categoryLabels[category]}
      </span>
      <span className="text-ink-muted">{dateLabel}</span>
    </div>
  );
}

export default function SpotlightsPage() {
  // Sort newest-first. First entry becomes the featured spotlight.
  const sorted = [...spotlights].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...past] = sorted as [Spotlight, ...Spotlight[]];

  return (
    <main id="main-content">
      <Cover
        eyebrow="Member spotlights"
        title="Celebrating Excellence"
        subtitle="Honoring the members whose commitment shapes our community."
        backgroundImage={coverImage}
      />

      {/* ---------- Intro ---------- */}
      <Section tone="default" spacing="lg">
        <Container width="narrow">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="warm">Recognition</Eyebrow>
            <h2 className="mt-3 font-display text-display">
              Members who make YD what it is
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We highlight the people whose dedication, leadership, and
              creativity power our community &mdash; through our monthly
              Member of the Month recognition and category awards throughout
              the year.
            </p>
          </div>
        </Container>
      </Section>

      {/* ---------- Featured spotlight ---------- */}
      <Section tone="muted" spacing="lg">
        <Container>
          <div className="mb-10">
            <Eyebrow tone="puan">Latest spotlight</Eyebrow>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center lg:gap-16">
            <div className="md:col-span-7">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-bone-200 bg-bone-200 shadow-lifted">
                <Image
                  src={featured.image}
                  alt={`${featured.member} — ${categoryLabels[featured.category]}, ${featured.dateLabel}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <SpotlightMeta
                category={featured.category}
                dateLabel={featured.dateLabel}
              />
              <h3 className="mt-4 font-display text-display-lg text-highland-700">
                {featured.member}
              </h3>
              {featured.caption && (
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {featured.caption}
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Archive grid ---------- */}
      {past.length > 0 && (
        <Section
          tone="default"
          spacing="lg"
          className="border-t border-bone-200"
        >
          <Container>
            <div className="mb-10">
              <Eyebrow tone="warm">The archive</Eyebrow>
              <h2 className="mt-3 font-display text-display">
                Past spotlights
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((s) => (
                <li key={s.id}>
                  <article className="group">
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-bone-200 bg-bone-200 shadow-soft transition-shadow duration-250 ease-out-soft group-hover:shadow-raised">
                      <Image
                        src={s.image}
                        alt={`${s.member} — ${categoryLabels[s.category]}, ${s.dateLabel}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <SpotlightMeta
                        category={s.category}
                        dateLabel={s.dateLabel}
                        compact
                      />
                      <p className="mt-2 font-display text-lg font-medium text-highland-700">
                        {s.member}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* ---------- CTA ---------- */}
      <Section tone="warm" spacing="md">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="puan">Nominate</Eyebrow>
            <h2 className="mt-3 font-display text-display text-highland-700">
              Know someone worth celebrating?
            </h2>
            <p className="mx-auto mt-5 text-lg leading-relaxed text-ink-soft">
              We celebrate members whose work reflects the values of YD. If
              you know someone deserving of recognition, tell us their story.
            </p>
            {/* TODO: point at a real nomination form / contact page once available. */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link href="/about-us">Meet the team</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
