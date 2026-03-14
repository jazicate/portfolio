import type { ReactNode } from "react";

import { cn } from "../../utils/cn.ts";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
