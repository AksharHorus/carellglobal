import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "cta";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-deep text-white hover:-translate-y-0.5 hover:shadow-elevated",
  secondary:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10",
  ghost:
    "text-navy-deep hover:text-royal",
  cta:
    "bg-cta-gradient text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(255,122,0,0.65)]",
};

export function CTAButton({
  to,
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(120px 60px at var(--mx,50%) 50%, rgba(255,255,255,.18), transparent 60%)" }}
      />
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={classes}>
      {content}
    </a>
  );
}
