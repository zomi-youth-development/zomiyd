import type { StaticImageData } from "next/image";

import khaiboihAdminImg from "@/public/images/teams/khaiboih_admin.jpg"
import dalAdminImg from "@/public/images/teams/dalthang_admin.jpg";
import marysiam from "@/public/images/teams/mary_siam.jpg";
import niangHoihAdminImg from "@/public/images/teams/niang_hoih_admin.jpg";
import siamNuAdminImg from "@/public/images/teams/siamnu_admin.jpg";
import dimnemAdminImg from "@/public/images/teams/dimnem_admin.jpg";
// import sanshalomAdminImg from "@/public/images/teams/sanshalom_admin.jpg";
import sungAdminImg from "@/public/images/teams/sungsung_admin.jpg";
import vungpiAdminImg from "@/public/images/teams/vungpi_admin.jpg";
import personIcon from "@/public/icons/person.svg"
// import teamImage from "@/public/images/team.jpg";

/**
 * About page content data.
 *
 * Extracted here so the page component stays focused on layout, and so
 * this data has a clean shape to migrate to Strapi content types in
 * Milestone 3 (each interface below can become a Strapi collection).
 */

// ---------------------------------------------------------------------------
// Mission pillars
// ---------------------------------------------------------------------------

export interface MissionPillar {
  /** Short name in Zomi. */
  name: string;
  /** English-language descriptor beneath the name. */
  tagline: string;
  /** Bullet-point commitments under this pillar. */
  points: string[];
}

export const missionPillars: MissionPillar[] = [
  {
    name: "Zomi Picing",
    tagline: "Raising the Next Generation of Change-Makers",
    points: [
      "Develop generations of Zomi youths who are passionate about contributing their time, talents, and skills toward the social, economic, and political advancement of the Zomi people.",
      "Raise up leaders who value and uphold the rule of law, committed to justice and ethical leadership.",
    ],
  },
  {
    name: "Siamsin Picing",
    tagline: "Fostering Knowledge and Lifelong Learning",
    points: [
      "Equip students with knowledge and skills appropriate for their age and educational level.",
      "Encourage a mindset of lifelong learning, curiosity, and personal growth.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Leadership
// ---------------------------------------------------------------------------

export interface TeamMemberData {
  name: string;
  /**
   * Every position this person holds, most senior first. Rendered on the
   * card separated by " | " (e.g. "Executive Director | Training Manager").
   */
  positions: string[];
  image: StaticImageData;
}

/**
 * Leadership Team, in display order: Office of the Director, then
 * department managers, then committee chairs. One entry per person —
 * add extra positions to `positions` rather than duplicating a person.
 */
export const leadership: TeamMemberData[] = [
  // Office of the Director
  {
    name: "Mary Siam",
    positions: ["Executive Director", "Training Manager"],
    image: marysiam,
  },
  { name: "Niang Hoih", positions: ["Assistant Director", "ZoLL Manager"], image: niangHoihAdminImg },
  { name: "Siam Nu", positions: ["Assistant Director", "Creative Manager"], image: siamNuAdminImg },
  { name: "Dim Nem", positions: ["Assistant Director", "HR Vice Chair"], image: dimnemAdminImg },

  // Departments
  { name: "Khai Boih", positions: ["Education Manager"], image: khaiboihAdminImg },
  { name: "Dal Thang", positions: ["Research Manager"], image: dalAdminImg },
  {
    name: "Zuunpi",
    positions: ["ELL Team Lead"],
    image: personIcon,
  },

  // Committees
  { name: "Sung Sung", positions: ["Finance Chair"], image: sungAdminImg },
  { name: "Vungpi", positions: ["Human Resources Chair"], image: vungpiAdminImg }
];
