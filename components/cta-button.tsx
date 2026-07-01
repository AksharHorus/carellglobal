import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "cta";

const styles: Record<Variant, string> = {
  primary: "bg-navy-deep text-white hover:-translate-y-0.5 hover:shadow-elevated",
  secondary: "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10",
  ghost: "text-navy-deep hover:text-royal",
  cta: "bg-cta-gradient text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.55)] hover:-translate-y-0.5",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-semibold tracking-wide transition-all duration-300",
    styles[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
        {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
