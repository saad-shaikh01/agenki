"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { ButtonV2, type ButtonV2Props } from "./button-v2";

/**
 * PhoneButtonV2 - Specialized button for phone number links
 *
 * Automatically formats phone links with tel: protocol and includes a phone icon.
 *
 * Usage:
 * ```tsx
 * <PhoneButtonV2 phone="888-909-9431" />
 * <PhoneButtonV2 phone="888-909-9431" variant="glass" />
 * <PhoneButtonV2 phone="888-909-9431" showIcon={false}>Call Now</PhoneButtonV2>
 * ```
 */

export interface PhoneButtonV2Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Phone number (will be formatted as tel: link) */
  phone: string;
  /** Show phone icon (default: true) */
  showIcon?: boolean;
  /** Button variant */
  variant?: ButtonV2Props["variant"];
  /** Button size */
  size?: ButtonV2Props["size"];
  /** Enable motion animations */
  motion?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const PhoneButtonV2 = React.forwardRef<HTMLAnchorElement, PhoneButtonV2Props>(
  ({ phone, showIcon = true, children, variant = "primary", size, motion, loading, ...props }, ref) => {
    return (
      <ButtonV2
        ref={ref as any}
        href={`tel:${phone}`}
        variant={variant}
        size={size}
        motion={motion}
        loading={loading}
        iconLeft={showIcon ? Phone : undefined}
        {...(props as any)}
      >
        {children || phone}
      </ButtonV2>
    );
  }
);

PhoneButtonV2.displayName = "PhoneButtonV2";
