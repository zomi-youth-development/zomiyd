import type { StaticImageData } from "next/image";

import volunteerImage from "@/public/images/volunteers.jpg";
import officeImage from "@/public/images/office.jpg";

/**
 * What We Do page content data.
 *
 * Programs are the user-facing offerings (what YD does *for* youth).
 * Departments are the internal org structure (how the work gets done).
 *
 * When we get to Milestone 3 (Strapi), each of these will become its own
 * collection with the same shape. The page component reads them as
 * imports today; it will read them via Strapi client tomorrow — the JSX
 * won't change.
 */

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export interface Program {
  /** Program name (also the H3 in the card). */
  name: string;
  /** Short category label shown as eyebrow above the name. */
  category: string;
  /** Card body copy. Keep to ~2 sentences until we have detail pages. */
  description: string;
  /**
   * Card image. TODO: replace the shared placeholder with per-program
   * imagery when YD has real photos of each program in action.
   */
  image: StaticImageData;
}

export const programs: Program[] = [
  {
    name: "ELL",
    category: "Language",
    description:
      "Helping youths improve their English language skills.",
    image: volunteerImage,
  },
  {
    name: "Mentorship Program",
    category: "Community",
    description:
      "Connecting youths with mentors for personal and professional growth.",
    image: volunteerImage,
  },
  {
    name: "Professional Development",
    category: "Career",
    description:
      "Providing resources and training for career advancement.",
    image: volunteerImage,
  },
];

// ---------------------------------------------------------------------------
// Departments
// ---------------------------------------------------------------------------

export interface Department {
  name: string;
  description: string;
  /**
   * Not currently rendered on this page — departments use a text-only
   * card design to visually distinguish them from Programs. Kept in the
   * data so we can add imagery later if we change the design.
   */
  image?: StaticImageData;
}

export const departments: Department[] = [
  {
    name: "Education",
    description: "Focuses on educational programs and initiatives.",
    image: officeImage,
  },
  {
    name: "Training",
    description: "Provides training and development opportunities.",
    image: officeImage,
  },
  {
    name: "Creative",
    description: "Fosters creativity and innovation in projects.",
    image: officeImage,
  },
  {
    name: "Research",
    description: "Leads research and analysis to support programs.",
    image: officeImage,
  },
  {
    name: "Zomi Language & Literature",
    description: "Promotes the Zomi language and literature.",
    image: officeImage,
  },
];
