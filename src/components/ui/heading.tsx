import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/functions";

/**
 * Heading component with responsive variants for consistent typography
 *
 * Usage:
 * ```tsx
 * <Heading size="h1" variant="gradient">Welcome</Heading>
 * <H1>Welcome</H1>  // Convenience component
 * <H2 variant="default" align="center">About Us</H2>
 * ```
 */

const headingVariants = cva(
  "font-bold leading-tight tracking-tight",
  {
    variants: {
      /** Responsive size variants */
      size: {
        h1: "text-5xl md:text-6xl lg:text-7xl",
        h1Sm: "text-4xl md:text-5xl lg:text-6xl",
        h2: "text-4xl md:text-5xl lg:text-6xl",
        h2Sm: "text-3xl md:text-4xl lg:text-5xl",
        h3: "text-2xl md:text-3xl lg:text-4xl",
        h3Sm: "text-xl md:text-2xl lg:text-3xl",
        h4: "text-xl md:text-2xl lg:text-3xl",
        h4Sm: "text-lg md:text-xl lg:text-2xl",
        subtitle: "text-lg md:text-xl lg:text-2xl",
        subtitleSm: "text-base md:text-lg lg:text-xl",
      },

      /** Color/appearance variants */
      variant: {
        default: "text-foreground",
        gradient: "bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent",
        gradientSubtle: "bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent",
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted-foreground",
        inverse: "text-background",
      },

      /** Text alignment */
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },

      /** Font weight overrides */
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
    },
    defaultVariants: {
      size: "h2",
      variant: "default",
      align: "left",
      weight: "bold",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** HTML element to render (h1, h2, h3, h4, h5, h6, p) */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
}

export function Heading({
  as: Component = "h2",
  size,
  variant,
  align,
  weight,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, variant, align, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/** H1 convenience component */
export const H1 = ({ ...props }: Omit<HeadingProps, "as">) => (
  <Heading as="h1" size="h1" {...props} />
);

/** H2 convenience component */
export const H2 = ({ ...props }: Omit<HeadingProps, "as">) => (
  <Heading as="h2" size="h2" {...props} />
);

/** H3 convenience component */
export const H3 = ({ ...props }: Omit<HeadingProps, "as">) => (
  <Heading as="h3" size="h3" {...props} />
);

/** H4 convenience component */
export const H4 = ({ ...props }: Omit<HeadingProps, "as">) => (
  <Heading as="h4" size="h4" {...props} />
);

/** Subtitle convenience component */
export const Subtitle = ({ ...props }: Omit<HeadingProps, "as">) => (
  <Heading as="p" size="subtitle" variant="muted" {...props} />
);
