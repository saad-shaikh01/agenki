"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/functions";
import type { LucideIcon } from "lucide-react";

/**
 * Unified Button component system (v2)
 *
 * Uses ONLY the .btn classes defined in globals.css
 * Ensures consistent styling across the entire website in both light and dark modes
 *
 * Features:
 * - All button variants from globals.css (.btn-primary, .btn-secondary, etc.)
 * - Size variants (.btn-sm, .btn-lg, .btn-xl)
 * - Icon support (left/right)
 * - Link support (href prop)
 * - Motion animations (opt-in)
 * - Fully theme-aware (works in light and dark mode)
 *
 * Usage:
 * ```tsx
 * <ButtonV2 variant="primary" size="lg">Get Started</ButtonV2>
 * <ButtonV2 href="/about" variant="secondary" iconRight={ArrowRight}>Learn More</ButtonV2>
 * <ButtonV2 variant="outline-primary" motion>Animated</ButtonV2>
 * ```
 */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "destructive"
  | "outline"
  | "outline-primary"
  | "outline-secondary"
  | "outline-accent"
  | "outline-destructive"
  | "white"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "xl";

// Base props shared by all button variants
interface BaseButtonV2Props {
  /** Button variant (maps to .btn-* classes in globals.css) */
  variant?: ButtonVariant;
  /** Button size (maps to .btn-sm, .btn-lg, .btn-xl classes) */
  size?: ButtonSize;
  /** Use Slot component for composition */
  asChild?: boolean;
  /** Icon to display on the left */
  iconLeft?: React.ReactNode | LucideIcon;
  /** Icon to display on the right */
  iconRight?: React.ReactNode | LucideIcon;
  /** Enable Framer Motion animations */
  motion?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Additional className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}

// Props for button element
interface ButtonElementProps extends BaseButtonV2Props, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonV2Props> {
  href?: never;
}

// Props for link element
interface LinkElementProps extends BaseButtonV2Props, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonV2Props | 'href'> {
  /** Make button a link (uses Next.js Link) */
  href: string;
}

export type ButtonV2Props = ButtonElementProps | LinkElementProps;

const ButtonV2 = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonV2Props
>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      href,
      iconLeft,
      iconRight,
      motion: enableMotion = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    // Build className from globals.css classes
    const btnClasses = cn(
      "btn", // Base .btn class
      "btn-icon", // Icon support class
      variant && `btn-${variant}`, // Variant class (.btn-primary, .btn-secondary, etc.)
      size !== "default" && `btn-${size}`, // Size class (.btn-sm, .btn-lg, .btn-xl)
      className
    );

    // Render icon helper
    const renderIcon = (
      icon: React.ReactNode | LucideIcon,
      side: "left" | "right"
    ) => {
      if (!icon) return null;
      if (React.isValidElement(icon)) return icon;

      const IconComponent = icon as LucideIcon;
      return (
        <IconComponent
          className={cn(
            "h-5 w-5",
            side === "right" && "transition-transform group-hover:translate-x-1"
          )}
        />
      );
    };

    const content = (
      <>
        {loading && <LoadingSpinner />}
        {!loading && iconLeft && renderIcon(iconLeft, "left")}
        {children}
        {!loading && iconRight && renderIcon(iconRight, "right")}
      </>
    );

    // For motion.button, exclude props that conflict with Framer Motion
    // (drag and animation handlers have different signatures in FM vs React)
    const {
      onDrag,
      onDragEnd,
      onDragStart,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...restProps
    } = props as any;

    // Motion-specific rendering
    if (enableMotion && !asChild && !href) {
      return (
        <motion.button
          ref={ref as any}
          className={btnClasses}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={{ duration: 0.2 }}
          {...restProps}
        >
          {content}
        </motion.button>
      );
    }

    // Link rendering
    if (href && !asChild) {
      return (
        <Link
          ref={ref as any}
          href={href}
          className={btnClasses}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    // Regular button or Slot rendering
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref as any} className={btnClasses} {...(props as any)}>
        {content}
      </Comp>
    );
  }
);

ButtonV2.displayName = "ButtonV2";

/** Loading spinner component */
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export { ButtonV2 };
