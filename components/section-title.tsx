import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-royal",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-royal" />
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl",
          invert ? "text-white" : "text-navy-deep",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
