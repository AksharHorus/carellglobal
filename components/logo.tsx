import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className }: LogoProps) {
  if (variant === "footer") {
    return (
      <Link
        href="/"
        aria-label="Karell Global — Home"
        className={cn("inline-flex shrink-0 items-center gap-3", className)}
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2.5">
          <Image
            src="/images/karell-logo.png"
            alt=""
            width={48}
            height={48}
            aria-hidden
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="leading-tight">
          <div className="font-display text-lg font-semibold text-white">Karell Global</div>
          <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
            Enterprise IT Partner
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Karell Global — Home"
      className={cn("inline-flex shrink-0 items-center gap-3", className)}
    >
      <Image
        src="/images/karell-logo.png"
        alt=""
        width={44}
        height={44}
        aria-hidden
        className="h-11 w-11 shrink-0 object-contain"
      />
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold tracking-tight text-navy-deep">
          Karell Global
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Enterprise IT Partner
        </div>
      </div>
    </Link>
  );
}
