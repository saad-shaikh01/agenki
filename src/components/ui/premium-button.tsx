"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

type ButtonVariant =
  | "glow"
  | "gradient"
  | "outline"
  | "shimmer"
  | "neon"
  | "glass"
  | "magnetic"
  | "liquid";

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  href?: string;
  className?: string;
}

// Glow Button - Pulsing outer glow effect
const GlowButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group",
      "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]",
      "shadow-[0_0_20px_rgba(158,39,169,0.5)]",
      "hover:shadow-[0_0_40px_rgba(158,39,169,0.8),0_0_60px_rgba(52,30,54,0.4)]",
      "transition-all duration-500 ease-out",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Animated background gradient */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/0 via-white/10 to-white/20" />
  </motion.button>
);

// Gradient Button - Smooth color shifting
const GradientButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className={cn(
      "relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden group",
      "bg-gradient-to-br from-primary via-secondary to-primary",
      "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-secondary/30",
      "transition-all duration-300",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Shine effect */}
    <motion.div
      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
    />
  </motion.button>
);

// Outline Button - Elegant border with fill on hover
const OutlineButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={cn(
      "relative px-8 py-4 rounded-full font-bold overflow-hidden group",
      "border-2 border-white/80 text-white",
      "hover:border-transparent",
      "transition-all duration-300",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Fill animation */}
    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
    <span className="absolute inset-0 flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </span>
  </motion.button>
);

// Shimmer Button - Continuous shimmer animation
const ShimmerButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={cn(
      "relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden group",
      "bg-gradient-to-r from-primary to-secondary",
      "shadow-lg hover:shadow-2xl transition-shadow duration-300",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center">
      <Sparkles className="w-5 h-5" />
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Shimmer overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
      animate={{ x: ["-200%", "200%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
    />
  </motion.button>
);

// Neon Button - Cyberpunk style with glow
const NeonButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(158,39,169,0.8), inset 0 0 20px rgba(158,39,169,0.3)" }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "relative px-8 py-4 rounded-lg font-bold text-white overflow-hidden group",
      "bg-transparent border-2 border-secondary",
      "shadow-[0_0_15px_rgba(158,39,169,0.5),inset_0_0_10px_rgba(158,39,169,0.2)]",
      "transition-all duration-300",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center drop-shadow-[0_0_10px_rgba(158,39,169,0.8)]">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Neon pulse */}
    <motion.div
      className="absolute inset-0 bg-secondary/20"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.button>
);

// Glass Button - Frosted glass effect
const GlassButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03, y: -3 }}
    whileTap={{ scale: 0.97 }}
    className={cn(
      "relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden group",
      "bg-white/10 backdrop-blur-xl",
      "border border-white/20",
      "shadow-xl hover:shadow-2xl",
      "hover:bg-white/20 hover:border-white/40",
      "transition-all duration-300",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </span>
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.button>
);

// Magnetic Button - Follows cursor slightly
const MagneticButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group",
        "bg-gradient-to-br from-primary via-secondary to-primary",
        "shadow-xl hover:shadow-2xl hover:shadow-secondary/40",
        "transition-shadow duration-300",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
        {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
    </motion.button>
  );
};

// Liquid Button - Blob/liquid morphing effect
const LiquidButton: React.FC<PremiumButtonProps> = ({ children, className, icon, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "relative px-10 py-5 rounded-[2rem] font-bold text-white overflow-hidden group",
      "bg-gradient-to-br from-primary to-secondary",
      "shadow-2xl hover:shadow-[0_20px_50px_rgba(158,39,169,0.5)]",
      "transition-all duration-500",
      className
    )}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 justify-center text-lg">
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />}
    </span>
    {/* Liquid blob effect */}
    <motion.div
      className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-tl from-white/20 via-transparent to-transparent rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </motion.button>
);

// Main Export Component with variant selection
export const PremiumButton: React.FC<PremiumButtonProps> = ({
  variant = "gradient",
  href,
  ...props
}) => {
  const ButtonComponent = {
    glow: GlowButton,
    gradient: GradientButton,
    outline: OutlineButton,
    shimmer: ShimmerButton,
    neon: NeonButton,
    glass: GlassButton,
    magnetic: MagneticButton,
    liquid: LiquidButton,
  }[variant];

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <ButtonComponent {...props} />
      </Link>
    );
  }

  return <ButtonComponent {...props} />;
};

// Secondary/Phone Button variants
export const PhoneButton: React.FC<{ phone: string; variant?: "outline" | "glass" | "neon"; className?: string }> = ({
  phone,
  variant = "outline",
  className
}) => {
  if (variant === "glass") {
    return (
      <motion.a
        href={`tel:${phone}`}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold",
          "bg-white/10 backdrop-blur-xl border border-white/20",
          "text-white hover:bg-white/20 hover:border-white/40",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          className
        )}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {phone}
      </motion.a>
    );
  }

  if (variant === "neon") {
    return (
      <motion.a
        href={`tel:${phone}`}
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold",
          "bg-transparent border-2 border-white/60 text-white",
          "shadow-[0_0_10px_rgba(255,255,255,0.2)]",
          "hover:border-white hover:bg-white/5",
          "transition-all duration-300",
          className
        )}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {phone}
      </motion.a>
    );
  }

  // Default outline
  return (
    <motion.a
      href={`tel:${phone}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold",
        "bg-transparent border-2 border-white text-white",
        "hover:bg-white hover:text-primary",
        "transition-all duration-300",
        className
      )}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      {phone}
    </motion.a>
  );
};

export default PremiumButton;
