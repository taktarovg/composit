import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700",
  outline:
    "border-2 border-white text-white hover:bg-white/15",
  ghost:
    "text-primary-500 hover:text-primary-600 hover:underline",
};

export function Button({
  children,
  variant = "primary",
  href,
  external,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        className={base}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
