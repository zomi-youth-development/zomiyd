import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand colors with full 50–950 scales.
      // Named semantically so usage is clear at a glance.
      colors: {
        // Puan Red — primary brand accent. Use sparingly for CTAs,
        // active states, and identity moments.
        puan: {
          50:  "#FDF2F2",
          100: "#FADADC",
          200: "#F2A8AD",
          300: "#E87178",
          400: "#C84452",
          500: "#9C1B26", // base
          600: "#8A1722",
          700: "#6E1119",
          800: "#510C13",
          900: "#3D080E",
          950: "#220408",
        },
        // Highland Navy — grounding color. Headers, footers, body text on light,
        // dark hero sections.
        highland: {
          50:  "#E8EAF4",
          100: "#C5CADF",
          200: "#9CA4C5",
          300: "#727DAB",
          400: "#4D5A99",
          500: "#2E3A7C",
          600: "#1B2762",
          700: "#0B164A", // base
          800: "#070E2E",
          900: "#03061A",
          950: "#01030D",
        },
        // Hearth Amber — warmth and energy. Highlights, secondary CTAs,
        // eyebrow labels, hover accents.
        hearth: {
          50:  "#FDF4E5",
          100: "#FBE6C2",
          200: "#F9D69A",
          300: "#F7C786",
          400: "#F5B85F",
          500: "#F2A842", // base
          600: "#D48F2C",
          700: "#B07614",
          800: "#85580F",
          900: "#5A3A0B",
          950: "#3A2606",
        },
        // Bone — warm off-white. Page backgrounds, card backgrounds on
        // colored sections, gentle dividers.
        bone: {
          50:  "#FEFDFB",
          100: "#FAF8F4", // base — primary page background
          200: "#F1ECE2",
          300: "#E4DCC9",
          400: "#C9C2B1",
          500: "#948D7B",
          600: "#6E6859",
          700: "#4D4839",
          800: "#322E22",
          900: "#1F1C14",
        },
        // Ink — warm near-black. Primary text on light backgrounds.
        // Not pure black — kinder to the eyes on warm canvases.
        ink: {
          DEFAULT: "#1A1A1A",
          soft:    "#3A3A36",
          muted:   "#6E6859",
          subtle:  "#948D7B",
        },
      },

      // Semantic aliases — use these in components for portability.
      // If we ever rebrand, only this section changes.
      // (Tailwind v3 doesn't let us alias inside `colors` without
      // redefining, so we expose them as background/text utilities.)
      backgroundColor: ({ theme }) => ({
        ...theme("colors"),
        canvas:        theme("colors.bone.100"),
        "canvas-soft": theme("colors.bone.50"),
        "canvas-sunk": theme("colors.bone.200"),
        surface:       "#FFFFFF",
        "brand":       theme("colors.puan.500"),
        "brand-dark":  theme("colors.highland.700"),
        "brand-warm":  theme("colors.hearth.500"),
      }),
      textColor: ({ theme }) => ({
        ...theme("colors"),
        body:    theme("colors.ink.DEFAULT"),
        muted:   theme("colors.ink.muted"),
        subtle:  theme("colors.ink.subtle"),
        brand:   theme("colors.puan.500"),
        "on-brand": theme("colors.bone.50"),
      }),
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.bone.300"),
        subtle:  theme("colors.bone.200"),
        strong:  theme("colors.bone.500"),
        brand:   theme("colors.puan.500"),
      }),

      fontFamily: {
        // Display + headings — set via next/font in app/layout.tsx,
        // exposed here as the `font-display` utility.
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // Body — set via next/font in app/layout.tsx.
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Editorial scale — slightly larger than Tailwind defaults
        // to support the serif display feel.
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-lg": ["clamp(2.25rem, 4vw + 0.5rem, 3.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "500" }],
        "display":    ["clamp(1.875rem, 3vw + 0.25rem, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" }],
        "eyebrow":    ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
      },

      // Restrained shadow set — soft, warm, never harsh.
      boxShadow: {
        soft:   "0 1px 2px rgba(31, 28, 20, 0.04), 0 1px 3px rgba(31, 28, 20, 0.06)",
        raised: "0 4px 10px rgba(31, 28, 20, 0.06), 0 2px 4px rgba(31, 28, 20, 0.05)",
        lifted: "0 12px 28px rgba(31, 28, 20, 0.10), 0 4px 8px rgba(31, 28, 20, 0.06)",
      },

      borderRadius: {
        // Slightly larger than Tailwind defaults — modern but not playful.
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },

      // Animation tokens for framer-motion + Tailwind transitions.
      transitionTimingFunction: {
        "out-soft":   "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-soft":"cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },

      // Container customization — used by the `container` plugin if you enable it,
      // and also referenced by our <Container> component below.
      maxWidth: {
        prose: "68ch",
        "content": "76rem",  // 1216px — comfortable for desktop
        "content-narrow": "56rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};

export default config;