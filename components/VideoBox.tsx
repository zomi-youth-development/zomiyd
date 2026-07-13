// TODO: fetch video data asynchronously from Strapi as a `homepage_video` content type.

interface VideoBoxProps {
  src: string;
  /** Accessible title for the iframe. Required by WCAG for non-decorative embedded content. */
  title?: string;
}

/**
 * VideoBox — embeds an iframe in a rounded surface that maintains 16:9 aspect.
 *
 * Improvements over previous version:
 * - `aspect-video` keeps proportions consistent across breakpoints
 *   (was fixed h-64 / h-96, which distorted on edge widths).
 * - `title` attribute for screen readers (WCAG 2.4.4).
 * - Highland-900 backplate prevents flash-of-white before iframe loads.
 */
export function VideoBox({ src, title = "Embedded video" }: VideoBoxProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-bone-200 bg-highland-900 shadow-raised">
      <div className="aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          loading="lazy"
        />
      </div>
    </div>
  );
}
