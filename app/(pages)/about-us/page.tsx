import Image from "next/image";
import { Cover } from "@/components/Cover";
import { TeamMember } from "@/components/TeamMember";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { missionPillars, teamStructure } from "@/lib/about";
import { siteConfig } from "@/lib/site";

import coverImage from "@/public/images/yd_texas1.jpg";
import missionImage from "@/public/images/mission.jpg";
import visionImage from "@/public/images/vision.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description:
    "Meet Zomi Youth Development — our mission, vision, story, and the team of youth leaders shaping our future.",
};

export default function AboutUsPage() {
  return (
    <main id="main-content">
      <Cover
        eyebrow="About us"
        title="Who We Are"
        subtitle="A global network of Zomi youth building the future — together."
        backgroundImage={coverImage}
      />

      {/* ---------- Intro ---------- */}
      <Section tone="default" spacing="lg">
        <Container width="narrow">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="warm">Introducing</Eyebrow>
            <h2 className="mt-3 font-display text-display">
              We are change agents
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              <strong className="font-medium text-ink">
                Zomi Youth Development
              </strong>{" "}
              is a global, non-profit initiative committed to supporting and
              uplifting Zomi youths across the world. As a network of
              students, scholars, and activists, we are united by a shared
              purpose: to foster positive change in Zomi communities
              everywhere.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Driven by the realities of the Zomi Diaspora, our mission is to
              promote the holistic development of Zomi youths&mdash;empowering
              them to lead, thrive, and shape a brighter future for their
              communities. We exist to lift each other up and to be a vehicle
              for growth, connection, and transformation across generations
              and borders.
            </p>
          </div>
        </Container>
      </Section>

      {/* ---------- Mission ---------- */}
      <Section tone="dark" spacing="lg">
        <Container>
          {/* Top: intro + image */}
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-16">
            <div className="md:col-span-7">
              <Eyebrow tone="warm" className="text-hearth-300">
                What drives us
              </Eyebrow>
              <h2 className="mt-3 font-display text-display text-bone-50">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-bone-100">
                At{" "}
                <strong className="font-medium text-bone-50">
                  Zomi Youth Development
                </strong>
                , our mission is to educate and empower Zomi youths around the
                world. We aim to provide age-appropriate education and inspire
                meaningful extracurricular involvement within Zomi
                communities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-bone-200">
                We believe in nurturing well-rounded individuals who are not
                only academically prepared but also socially responsible and
                community-minded.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lifted">
                <Image
                  src={missionImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Two pillar cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {missionPillars.map((pillar) => (
              <article
                key={pillar.name}
                className="rounded-lg border border-highland-500/60 bg-highland-800/60 p-8 backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="puan-stripe mb-6 block h-1 w-16"
                />
                <h3 className="font-display text-2xl font-medium text-bone-50">
                  {pillar.name}
                </h3>
                <p className="mt-1 font-display text-base italic text-hearth-300">
                  {pillar.tagline}
                </p>
                <ul className="mt-6 space-y-4">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-bone-100">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-puan-400"
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Vision ---------- */}
      <Section tone="default" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-16">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-raised">
                <Image
                  src={visionImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow tone="warm">Looking ahead</Eyebrow>
              <h2 className="mt-3 font-display text-display">Our Vision</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                We envision a future where the Zomi people
                thrive&mdash;socially, economically, and culturally. Our goal
                is to uplift the Human Development Index of Zomi communities
                by investing in education, empowering youth, and preserving
                our rich literature, language, and cultural heritage.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                We believe that lasting change begins with our youths. By
                equipping them with knowledge, confidence, and a strong sense
                of identity, we are laying the foundation for a future where
                the Zomi people can recognize and exercise their right to
                self-determination&mdash;with dignity and unity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Story ---------- */}
      {/*
        TODO: Replace this placeholder with real founding-story content.
        Consider covering: the year and place of founding, the founders and
        their motivation, the first initiatives, and how YD has evolved.
        When ready, this will move to a Strapi `about_story` singleton so
        it can be edited without a code change.
      */}
      {/*<Section tone="warm" spacing="lg">
        <Container width="narrow">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="puan">Our story</Eyebrow>
            <h2 className="mt-3 font-display text-display">How YD began</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              <em className="text-ink-muted">
                [Founding story goes here &mdash; replace with content from
                YD leadership. Consider covering when and where YD was
                founded ({siteConfig.founding.year}), who the founders were
                and what motivated them, and how the organization has grown
                since. Two to three paragraphs works well.]
              </em>
            </p>
          </div>
        </Container>
      </Section>
      */}
      
      {/* ---------- Team ---------- */}
      <Section tone="muted" spacing="lg" id="team">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="warm">The people</Eyebrow>
            <h2 className="mt-3 font-display text-display">
              Our Leadership Team
            </h2>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-ink-soft">
              YD&rsquo;s Leadership Team is comprised of the Office of the
              Director, department leaders, and committees. Together, our
              Leadership Team supports and empowers all members of YD to
              succeed in their activities.
            </p>
          </div>

          {teamStructure.map((section) => (
            <div key={section.title} className="mt-16">
              <div className="text-center">
                <h3 className="font-display text-2xl font-medium text-highland-700 sm:text-3xl">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-ink-muted">
                    {section.subtitle}
                  </p>
                )}
              </div>

              {section.flat ? (
                // Single flat group — no subgroup labels
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
                  {section.groups[0].members.map((member) => (
                    <TeamMember key={member.name} {...member} />
                  ))}
                </div>
              ) : (
                // Grouped — each subgroup gets its own label
                <div className="mt-10 space-y-14">
                  {section.groups.map((group) => (
                    <div key={group.title}>
                      {group.title && (
                        <h4 className="mb-8 text-center font-display text-lg font-medium text-puan-600">
                          {group.title}
                        </h4>
                      )}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
                        {group.members.map((member) => (
                          <TeamMember key={member.name} {...member} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Container>
        {/* <div className="mt-16 flex justify-center">
          <Button asChild variant="secondary" size="md">
            <Link href="/about-us/spotlights">See our member spotlights</Link>
          </Button>
        </div> */}
      </Section>
    </main>
  );
}
