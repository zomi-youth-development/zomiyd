import Link from "next/link";
import Image from "next/image";
import { FileHeart, Camera, MonitorPlay, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StripeAccent } from "@/components/ui/StripeAccent";
import { siteConfig } from "@/lib/site";
import logoNoBg from "@/public/images/yd_logo-nobg.png";

/**
 * Footer — site-wide footer. Reads all data from `siteConfig` so updates
 * to nav links, social URLs, or org description happen in one place.
 *
 * Visual structure:
 * - puan-stripe accent at the top edge
 * - 12-column grid: brand (5) / explore links (4) / social (3) on desktop
 * - bottom row with copyright + credit
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: siteConfig.links.facebook, label: "Facebook", Icon: FileHeart },
    { href: siteConfig.links.instagram, label: "Instagram", Icon: Camera },
    { href: siteConfig.links.youtube, label: "YouTube", Icon: MonitorPlay },
  ];

  return (
    <footer className="relative bg-highland-700 text-bone-50">
      <StripeAccent
        orientation="horizontal"
        className="absolute inset-x-0 top-0"
      />
      <Container width="wide" className="py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <Link
              href="/"
              aria-label={`${siteConfig.shortName} home`}
              className="rounded-md bg-bone-50 p-2 shadow-soft"
            >
              <Image
                src={logoNoBg}
                alt=""
                width={64}
                height={64}
                className="h-12 w-12"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-bone-200">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="font-display text-base font-medium text-bone-50">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-bone-200 transition-colors hover:text-hearth-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.ctaNav.href}
                  className="text-bone-200 transition-colors hover:text-hearth-300"
                >
                  {siteConfig.ctaNav.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div className="md:col-span-3">
            <h2 className="font-display text-base font-medium text-bone-50">
              Follow
            </h2>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-highland-500 text-bone-100 transition-colors hover:bg-highland-600 hover:text-hearth-300"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start gap-2 border-t border-highland-500 pt-6 text-xs text-bone-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.founding.year}–{currentYear}{" "}
            <Link
              href="/"
              className="text-hearth-300 transition-colors hover:text-hearth-200"
            >
              {siteConfig.shortName}
            </Link>
            . All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Made with{" "}
            <Heart
              className="h-3 w-3 fill-puan-500 text-puan-500"
              aria-hidden="true"
            />{" "}
            by{" "}
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noreferrer nofollow"
              className="text-hearth-300 transition-colors hover:text-hearth-200"
            >
              {siteConfig.developer.tag}
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
