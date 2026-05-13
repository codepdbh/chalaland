import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-heading font-semibold tracking-wide rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 hover:-translate-y-0.5";

  const variants = {
    primary: "bg-teal text-white hover:bg-teal-hover shadow-lg shadow-teal/15 hover:shadow-xl",
    secondary: "bg-orange text-white hover:bg-orange-hover shadow-lg shadow-orange/20 hover:shadow-xl",
    outline: "border-2 border-orange text-orange hover:bg-orange hover:text-white bg-white/70",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-dark bg-white/10 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
