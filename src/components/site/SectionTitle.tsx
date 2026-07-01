import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-royal",
        className
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
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl",
          invert ? "text-white" : "text-navy-deep"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
