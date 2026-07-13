import Image from "next/image";
import type { TeamMemberData } from "@/lib/about";

/**
 * TeamMember — a single team member card.
 *
 * Design:
 * - Circular avatar (128px on mobile, larger on desktop-scale layouts)
 * - Fraunces name for editorial hierarchy
 * - Muted Inter role for supporting detail
 * - Bone-200 placeholder background on the avatar for graceful loading
 *
 * Improvements over the previous AvatarCards approach:
 * - Photo uses <Image fill> inside a fixed-aspect wrapper — the previous
 *   version applied w-32 h-32 directly to <Image>, which can distort
 *   non-square photos rather than object-cover cropping them.
 * - No inner "card" chrome (bg-white/shadow) — the team grid works better
 *   with airy avatars on a shared background than with individual boxes.
 */
export function TeamMember({ name, role, image }: TeamMemberData) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-bone-200 shadow-raised ring-4 ring-white sm:h-32 sm:w-32">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-cover"
        />
      </div>
      <p className="mt-4 font-display text-lg font-medium leading-tight text-highland-700">
        {name}
      </p>
      <p className="mt-1 text-sm text-ink-muted">{role}</p>
    </div>
  );
}
