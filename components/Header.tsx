"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";
import logoNoBg from "@/public/images/yd_logo-nobg.png";
import menuSvgIcon from "@/public/icons/list.svg";
import menuCloseSvgIcon from "@/public/icons/x.svg";

/**
 * Header — fixed top bar that:
 * - Becomes opaque after scrolling past the hero (`scrolled` state)
 * - Hides on mobile scroll-down, reappears on scroll-up
 * - Provides accessible mobile navigation via Radix Dialog
 *
 * Scroll detection uses requestAnimationFrame throttling for performance.
 */

// using a stripe payment link for a temp donation solution
const donateToYdStripeLink = "https://donate.stripe.com/28o01n8tpf94fW8000";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 20);
        // Only auto-hide on mobile widths; always show on desktop.
        if (window.innerWidth < 768) {
          setHidden(y > lastY && y > 80);
        } else {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-all duration-300 ease-out-soft",
        scrolled
          ? "bg-highland-700/95 shadow-raised backdrop-blur-sm"
          : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Container width="wide" className="flex items-center justify-between py-3">
        <Link
          href="/"
          aria-label={`${siteConfig.shortName} home`}
          className="flex items-center rounded-md bg-bone-50 p-1.5 shadow-soft transition-transform duration-250 ease-out-soft hover:scale-105"
        >
          <Image
            src={logoNoBg}
            alt=""
            width={160}
            height={160}
            priority
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-250",
                "text-bone-50",
                scrolled ? "hover:bg-highland-600" : "hover:bg-highland-700/40"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="primary" size="sm" className="ml-2">
            {/* <Link href={siteConfig.ctaNav.href}>{siteConfig.ctaNav.label}</Link>
            */}
            <a href={donateToYdStripeLink} target="_blank" rel="noopener norefresher">Donate</a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <MobileNav />
      </Container>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-md p-2 text-bone-50 transition-colors hover:bg-highland-600 md:hidden"
        >
          <Image src={menuSvgIcon} alt="" className="h-6 w-6" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-highland-900/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-bone-50 p-6 shadow-lifted focus:outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-lg font-medium text-highland-700">
              Menu
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="rounded-md p-2 text-highland-700 transition-colors hover:bg-bone-200"
              >
                <Image src={menuCloseSvgIcon} className="h-5 w-5" aria-hidden="true" alt="" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Primary navigation menu
          </Dialog.Description>
          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-highland-700 transition-colors hover:bg-bone-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            variant="primary"
            size="lg"
            className="mt-6"
            onClick={() => setOpen(false)}
          >
            {/*<Link href={siteConfig.ctaNav.href}>{siteConfig.ctaNav.label}</Link>*/}
            <a href={donateToYdStripeLink} target="_blank" rel="noopener norefresher">Donate</a>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
