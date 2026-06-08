/**
 * Single source of truth for site-wide config.
 *
 * Anything that appears in more than one component (nav links, social URLs,
 * description copy, founding year, etc.) lives here. Header, Footer, and
 * metadata all read from this object so we don't drift between them.
 */
export const siteConfig = {
  name: "Zomi Youth Development",
  shortName: "Zomi YD",
  tagline: "Zomi Picing | Siamsin Picing",
  description:
    "Zomi Youth Development is a non-profit organization dedicated to empowering Zomi youths through education, leadership, and community engagement.",
  url: "https://www.zomiyouthdevelopment.org",
  ogImage: "/images/og-default.jpg", // TODO: create this 1200x630 image

  links: {
    facebook: "https://www.facebook.com/zomiyd",
    instagram: "https://www.instagram.com/zomiyd/",
    youtube: "https://www.youtube.com/@zomiyd",
  },

  /**
   * Primary navigation shown in Header desktop nav, mobile drawer, and Footer.
   * Keep this list short — 4 items max. The Donate CTA lives separately below.
   */
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/stories", label: "Stories" }, // future blog landing
  ],

  /** Prominent CTA shown as a button in the header and footer. */
  ctaNav: {
    href: "/donate",
    label: "Donate",
  },

  founding: {
    year: 2022,
  },

  developer: {
    tag: "KM",
    url: "https://kmung.github.io/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
