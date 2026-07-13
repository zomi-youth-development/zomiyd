import Image from "next/image";
import Link from "next/link";
import { Cover } from "@/components/Cover";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { programs, departments } from "@/lib/what-we-do";

import coverImage from "@/public/images/img3.jpg";

export const metadata = {
  title: "What We Do",
  description:
    "Explore Zomi Youth Development's programs and departments — the work that turns our mission into action.",
};

export default function WhatWeDoPage() {
  return (
    <main id="main-content">
      <Cover
        eyebrow="What we do"
        title="Programs &amp; Departments"
        subtitle="The programs and teams powering our mission."
        backgroundImage={coverImage}
      />

      {/* ---------- Intro ---------- */}
      <Section tone="default" spacing="lg">
        <Container width="narrow">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="warm">Purpose in action</Eyebrow>
            <h2 className="mt-3 font-display text-display">
              How YD serves the community
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Our programs are designed to empower Zomi youth through
              education, cultural connection, and leadership development.
              Together, our departments turn our mission into meaningful
              action &mdash; one initiative at a time.
            </p>
          </div>
        </Container>
      </Section>

      {/* ---------- Programs (rich cards with images) ---------- */}
      <Section tone="muted" spacing="lg">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Eyebrow tone="puan">Our programs</Eyebrow>
              <h2 className="mt-3 font-display text-display">
                What we offer
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-ink-soft">
                Each program meets Zomi youth where they are &mdash;
                supporting language, career, and mentorship goals with
                cultural grounding at the core.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.name} accent interactive>
                <div className="relative aspect-[4/3] overflow-hidden bg-bone-200">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <Eyebrow tone="warm" className="mb-2">
                    {program.category}
                  </Eyebrow>
                  <CardTitle>{program.name}</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="leading-relaxed text-ink-soft">
                    {program.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Departments (quiet text-only cards) ---------- */}
      <Section tone="default" spacing="lg" className="border-t border-bone-200">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Eyebrow tone="warm">The structure</Eyebrow>
              <h2 className="mt-3 font-display text-display">
                Our departments
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-ink-soft">
                Five departments deliver YD&rsquo;s programs and shape the
                direction of the organization. Each is led by a manager and
                supported by teammates and volunteers.
              </p>
              <p className="mt-5">
                <Link
                  href="/about-us#team"
                  className="inline-flex items-center gap-1 text-sm font-medium text-puan-600 transition-colors hover:text-puan-700"
                >
                  Meet the people behind each department
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <li key={dept.name}>
                <article className="relative h-full overflow-hidden rounded-lg border border-bone-200 bg-white shadow-soft transition-shadow duration-250 ease-out-soft hover:shadow-raised">
                  {/* Left-edge puan accent — the visual counterpart to
                      the top-edge puan stripe on Program cards. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-puan-500"
                  />
                  <div className="p-6 pl-7">
                    <h3 className="font-display text-lg font-medium text-highland-700">
                      {dept.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {dept.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section tone="dark" spacing="md">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="warm" className="text-hearth-300">
              Get involved
            </Eyebrow>
            <h2 className="mt-3 font-display text-display text-bone-50">
              Support the work
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bone-100">
              Our programs are powered by community. Your support helps us
              reach more Zomi youth with mentorship, education, and cultural
              grounding.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link href="/donate">Donate</Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link href="/about-us">Meet the team</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
