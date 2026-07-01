import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-10", className)} {...rest}>
      {children}
    </div>
  );
}
