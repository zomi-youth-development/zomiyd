import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/components/Hero";
import { VideoBox } from "@/components/VideoBox";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";

import AboutUsImg from "@/public/images/img4.png";
import EducationImg from "@/public/images/education_temp_img.jpg";
import CommunityImg from "@/public/images/community_pic_yd.jpg";
import LeadershipImg from "@/public/images/leadership_yd.jpg";

interface Program {
  name: string;
  description: string;
  image: StaticImageData;
  eyebrow: string;
}

export default function Home() {
  // TODO: load the theme song URL from Strapi as a `homepage_video` content type.
  const themeSongYoutubeLink =
    "https://www.youtube.com/embed/PLuHDYufJRM?si=VeGebn5-6uru1Ns5";

  const programs: Program[] = [
    {
      name: "Youth Leadership Program",
      description:
        "Empowering young leaders through training and mentorship.",
      image: LeadershipImg,
      eyebrow: "Leadership",
    },
    {
      name: "Community Outreach",
      description:
        "Engaging with the community to provide support and resources.",
      image: CommunityImg,
      eyebrow: "Community",
    },
    {
      name: "Educational Workshops",
      description:
        "Offering workshops on various educational topics for youth and families.",
      image: EducationImg,
      eyebrow: "Education",
    },
  ];

  return (
    <main id="main-content">
      <Hero />

      {/* Video — narrow container keeps focus on the video itself */}
      <Section id="video-section" tone="default" spacing="md">
        <Container width="narrow">
          <Suspense
            fallback={
              <div className="aspect-video w-full animate-pulse rounded-xl bg-bone-200" />
            }
          >
            <VideoBox
              src={themeSongYoutubeLink}
              title="Zomi YD theme song"
            />
          </Suspense>
        </Container>
      </Section>

      {/* Stats — sunken bone tone separates this band visually */}
      <Section tone="muted" spacing="md">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <Stat value={100} suffix="+" label="YD Workforce" />
            <Stat value={3} label="Countries Represented" />
            <Stat value={40} suffix="+" label="Outside Volunteers" />
          </div>
        </Container>
      </Section>

      {/* About — asymmetric 5/7 split, portrait image, editorial typography */}
      <Section tone="default" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-16">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-raised">
                <Image
                  src={AboutUsImg}
                  alt="Zomi YD community"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow tone="warm">About us</Eyebrow>
              <h2 className="mt-3 font-display text-display">
                A community of youth, by youth, for youth
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Zomi Youth Development is a non-profit organization that
                supports and uplifts Zomi youths around the world.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Our slogan — &ldquo;Zomi Picing, Siamsin Picing!&rdquo; —
                captures the shared vision of our member body. We rise
                together, in identity and in capability.
              </p>
              <Button asChild variant="secondary" size="md" className="mt-7">
                <Link href="/about-us">Learn more about YD</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programs — asymmetric intro, then accent-striped cards */}
      <Section
        tone="default"
        spacing="lg"
        className="border-t border-bone-200"
      >
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Eyebrow tone="puan">What we do</Eyebrow>
              <h2 className="mt-3 font-display text-display">
                Our programs
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-ink-soft">
                Our programs are designed to empower the youth through
                education, community engagement, and leadership development.
                We believe in the power of cultural identity and connection
                to transform lives and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.name} accent interactive>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-400 ease-out-soft group-hover:scale-[1.03]"
                  />
                </div>
                <CardHeader>
                  <Eyebrow tone="warm" className="mb-2">
                    {program.eyebrow}
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
    </main>
  );
}
