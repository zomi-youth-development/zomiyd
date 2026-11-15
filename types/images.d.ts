/**
 * Make `StaticImageData` available globally so it can be referenced in
 * component prop types without explicit imports. This matches the pattern
 * already used in AvatarCards.tsx, Cover.tsx, and page.tsx.
 *
 * Alternatively, components can `import type { StaticImageData } from "next/image"`
 * — both work. This declaration just keeps the existing implicit usage valid.
 */
import type { StaticImageData as NextStaticImageData } from "next/image";

declare global {
  type StaticImageData = NextStaticImageData;
}

export {};
