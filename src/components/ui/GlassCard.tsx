import type { ReactNode } from "react";

import { cn } from "../../utils/cn.ts";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)] backdrop-blur-sm transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-text)_28%,transparent),transparent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default GlassCard;
