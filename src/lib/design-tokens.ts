/**
 * Centralized design tokens for type-safe theme access
 *
 * Use these constants throughout the application for consistent theming.
 * Changing colors here will update the entire project.
 */

export const Colors = {
  text: {
    /** Primary text color (foreground) - adapts to light/dark mode */
    primary: 'text-foreground',
    /** Secondary text color (muted foreground) - adapts to light/dark mode */
    secondary: 'text-muted-foreground',
    /** Inverse text color (background) - for dark backgrounds in light mode, light backgrounds in dark mode */
    inverse: 'text-background',
    /** Link color */
    link: 'text-primary',
  },
  bg: {
    /** Base background color */
    base: 'bg-background',
    /** Elevated surfaces (cards, popovers) */
    elevated: 'bg-card',
    /** Overlay backgrounds */
    overlay: {
      light: 'bg-white/10 backdrop-blur-xl',
      dark: 'bg-black/10 backdrop-blur-xl',
    },
  },
  /** Gradient utilities for consistent brand gradients */
  gradients: {
    /** Primary gradient for text (primary-light to secondary) */
    text: 'bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent',
    /** Primary gradient for backgrounds (primary to secondary) */
    primary: 'bg-gradient-to-r from-primary to-secondary',
    /** Accent gradient (primary-light to secondary) */
    accent: 'bg-gradient-to-r from-primary-light to-secondary',
    /** Subtle foreground gradient for dark/light mode */
    subtle: 'bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent',
  },
} as const;

/**
 * Common overlay patterns for consistent effects
 */
export const Overlays = {
  /** Video/image overlay gradient */
  video: 'bg-gradient-to-b from-background/70 via-background/60 to-background/80',
  /** Card background with blur */
  card: 'bg-card/50 backdrop-blur-xl',
  /** Hero section overlay */
  hero: 'bg-background/90',
  /** Glass effect */
  glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
} as const;

/**
 * Border utilities */
export const Borders = {
  /** Default border */
  default: 'border border-border',
  /** Primary themed border */
  primary: 'border border-primary/20',
  /** Card border */
  card: 'border border-border hover:border-primary/50',
} as const;

export type DesignTokenType = typeof Colors;
