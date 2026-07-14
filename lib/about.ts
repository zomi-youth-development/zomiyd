import type { StaticImageData } from "next/image";

import dal from "@/public/images/teams/dal.jpeg";
import khaiboih from "@/public/images/teams/khai_boih.jpeg";
import marysiam from "@/public/images/teams/mary_siam.jpg";
import mungno from "@/public/images/teams/mungno.jpeg";
import siamnu from "@/public/images/teams/siam_nu.jpeg";
import teamImage from "@/public/images/team.jpg";

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
// Team structure
// ---------------------------------------------------------------------------

export interface TeamMemberData {
  name: string;
  role: string;
  image: StaticImageData;
}

export interface TeamSubgroup {
  /** Subgroup label (e.g. "Education"). Set empty string to hide. */
  title: string;
  members: TeamMemberData[];
}

export interface TeamSectionData {
  /** Section heading (e.g. "Departments"). */
  title: string;
  /** Optional descriptor under the section title. */
  subtitle?: string;
  /**
   * When true, subgroup titles are hidden — used for the Office of the
   * Director, where there's only one "flat" group of members.
   */
  flat?: boolean;
  groups: TeamSubgroup[];
}

export const teamStructure: TeamSectionData[] = [
  {
    title: "Office of the Director",
    flat: true,
    groups: [
      {
        title: "",
        members: [
          { name: "Lia Mary Siam", role: "Executive Director", image: marysiam },
          { name: "Lia Niang Hoih", role: "Assistant Director", image: teamImage },
          { name: "Lia Siam Nu", role: "Assistant Director", image: siamnu },
        ],
      },
    ],
  },
  {
    title: "Departments",
    subtitle: "Program-focused teams",
    groups: [
      {
        title: "Education",
        members: [
          { name: "Khai Boih", role: "Manager", image: khaiboih },
        ],
      },
      {
        title: "Training",
        members: [
          { name: "Lia Mary Siam", role: "Manager", image: marysiam },
        ],
      },
      {
        title: "Research",
        members: [
          { name: "Tg. Dal Thang", role: "Manager", image: teamImage },
        ],
      },
      {
        title: "Zomi Language & Literature",
        members: [
          { name: "San Shalom", role: "Manager", image: teamImage },
        ],
      },
      {
        title: "Creative",
        members: [
          { name: "Siamnu", role: "Manager", image: teamImage },
        ],
      },
    ],
  },
  {
    title: "Committees",
    subtitle: "Operational support",
    groups: [
      {
        title: "Finance",
        members: [
          { name: "Niang Hoih", role: "Chair", image: teamImage },
          { name: "Sung Sung", role: "Vice Chair", image: teamImage}
        ],
      },
      {
        title: "Human Resources",
        members: [
          { name: "Vungpi", role: "Chair", image: teamImage },
          { name: "Dim Nem", role: "Vice Chair", image: teamImage },
        ],
      },
    ],
  },
];
