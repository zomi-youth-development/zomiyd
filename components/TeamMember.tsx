import Image from "next/image";
import type { TeamMemberData } from "@/lib/about";

/**
 * TeamMember — leadership card for the About page grid.
 *
 * Design (corporate / restrained):
 * - Full-bleed 4:5 portrait with a light gray overlay that lifts on hover
 * - Bold sans-serif name, muted positions separated by " | "
 * - Left-aligned text, thin border, soft shadow, small radius
 * - h-full so cards in the same grid row match height when positions wrap
 */
export function TeamMember({ name, positions, image }: TeamMemberData) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-bone-200 bg-white shadow-soft transition-shadow duration-200 hover:shadow-raised">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone-200">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 384px"
          className="object-cover object-center"
        />
        {/* Light gray overlay — fades slightly on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-400/20 transition-opacity duration-200 group-hover:opacity-50"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-bone-200 px-5 py-4">
        <h3 className="text-base font-bold leading-snug text-ink">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          {positions.map((position, i) => (
            <span key={position}>
              {i > 0 && (
                <span aria-hidden="true" className="mx-1.5 text-bone-400">
                  |
                </span>
              )}
              {i > 0 && <span className="sr-only">, </span>}
              {position}
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
