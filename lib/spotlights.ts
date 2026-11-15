import type { StaticImageData } from "next/image";

// Placeholder images — using existing team headshots until real spotlight
// graphics are uploaded to /public/images/spotlights/. Replace when ready.
import marysiam from "@/public/images/teams/mary_siam.jpg";
import dal from "@/public/images/teams/dal.jpeg";
import khaiboih from "@/public/images/teams/khai_boih.jpeg";
import mungno from "@/public/images/teams/mungno.jpeg";
import siamnu from "@/public/images/teams/siam_nu.jpeg";

/**
 * Member Spotlights content data.
 *
 * Spotlights are pre-designed graphic cards (typically 1:1 square, ~1080px)
 * that already include the member photo, name, category, achievement copy,
 * and YD branding on the image itself. The page displays each graphic
 * with lightweight supporting metadata for search and accessibility.
 *
 * Two flavors:
 *   - `monthly`   — recurring Member of the Month recognition
 *   - all others  — one-off category awards (Leadership, Community, etc.)
 *
 * When we migrate to Strapi in Milestone 3, this becomes a `spotlight`
 * collection with the same shape.
 */

export type SpotlightCategory =
  | "monthly"
  | "leadership"
  | "community"
  | "academic"
  | "service"
  | "creativity";

/**
 * Human-readable label for each category. Kept as a single lookup so
 * copy edits happen in one place.
 */
export const categoryLabels: Record<SpotlightCategory, string> = {
  monthly: "Member of the Month",
  leadership: "Leadership",
  community: "Community Impact",
  academic: "Academic Excellence",
  service: "Service",
  creativity: "Creativity",
};

export interface Spotlight {
  /** Stable slug used for React keys and future anchor links. */
  id: string;
  /** Name of the person being recognized. */
  member: string;
  category: SpotlightCategory;
  /** Human-readable date label (e.g. "November 2025"). */
  dateLabel: string;
  /** ISO date for sorting (YYYY-MM-DD). */
  date: string;
  /** The pre-designed graphic card. */
  image: StaticImageData;
  /**
   * Optional short caption shown alongside the featured spotlight.
   * Not used in the archive grid to keep it visually quiet.
   */
  caption?: string;
}

/**
 * PLACEHOLDER DATA.
 *
 * Real graphics should be uploaded to /public/images/spotlights/ and
 * referenced here (or, in Milestone 3, pulled from Strapi automatically).
 * The team headshots below are stand-ins so the page renders during
 * development.
 *
 * Sorted newest-first at render time; the first item is displayed as the
 * featured spotlight. Adding a new spotlight to the top of the list will
 * automatically promote it to the featured slot.
 */
export const spotlights: Spotlight[] = [
  {
    id: "2025-11-monthly",
    member: "Lia Mary Siam",
    category: "monthly",
    dateLabel: "November 2025",
    date: "2025-11-01",
    image: marysiam,
    caption:
      "For her steady leadership of the Office of the Director and unwavering commitment to the mission of Zomi Youth Development.",
  },
  {
    id: "2025-10-monthly",
    member: "Tg. Dal",
    category: "monthly",
    dateLabel: "October 2025",
    date: "2025-10-01",
    image: dal,
  },
  {
    id: "2025-09-monthly",
    member: "Khai Boih",
    category: "monthly",
    dateLabel: "September 2025",
    date: "2025-09-01",
    image: khaiboih,
  },
  {
    id: "2025-leadership-mungno",
    member: "Mung No",
    category: "leadership",
    dateLabel: "August 2025",
    date: "2025-08-15",
    image: mungno,
  },
  {
    id: "2025-community-siamnu",
    member: "Lia Siam Nu",
    category: "community",
    dateLabel: "July 2025",
    date: "2025-07-20",
    image: siamnu,
  },
];
