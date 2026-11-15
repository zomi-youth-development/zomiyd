import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with intelligent Tailwind conflict resolution.
 *
 * Why this matters: writing `cn("p-4 p-6")` returns `"p-6"` (last write wins).
 * Plain string concatenation would give you both classes and Tailwind would
 * apply them in stylesheet order, which is not what you want for component
 * composition where consumers pass overriding classes via props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
