import type { CSSProperties } from "react";

import { cn } from "../../utils/cn.ts";

type TechBadgeProps = {
  label: string;
  className?: string;
};

type TechSpec = {
  icon?: string;
  tint: string;
  ink: string;
};

const defaultSpec: TechSpec = {
  tint: "color-mix(in srgb, var(--color-text-soft) 16%, transparent)",
  ink: "var(--color-text-soft)",
};

const techSpecs: Record<string, TechSpec> = {
  Electron: {
    icon: "EL",
    tint: "color-mix(in srgb, var(--color-orb-one) 42%, var(--color-accent-soft))",
    ink: "color-mix(in srgb, var(--color-text) 78%, var(--color-orb-one))",
  },
  React: {
    icon: "R",
    tint: "color-mix(in srgb, var(--color-orb-one) 48%, transparent)",
    ink: "color-mix(in srgb, var(--color-text) 72%, var(--color-orb-one))",
  },
  TypeScript: {
    icon: "TS",
    tint: "color-mix(in srgb, var(--color-orb-one) 54%, transparent)",
    ink: "color-mix(in srgb, var(--color-text) 70%, #2f72cc)",
  },
  TailwindCSS: {
    icon: "TW",
    tint: "color-mix(in srgb, var(--color-orb-one) 36%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 60%, #1f9fb6)",
  },
  "Drizzle ORM": {
    icon: "DZ",
    tint: "color-mix(in srgb, var(--color-orb-three) 42%, transparent)",
    ink: "color-mix(in srgb, var(--color-text) 72%, #4e8f66)",
  },
  SQLite: {
    icon: "DB",
    tint: "color-mix(in srgb, var(--color-orb-one) 30%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 70%, #446e9d)",
  },
  "Node.js": {
    icon: "ND",
    tint: "color-mix(in srgb, var(--color-orb-three) 48%, transparent)",
    ink: "color-mix(in srgb, var(--color-text) 74%, #2f7a50)",
  },
  Vitest: {
    icon: "VT",
    tint: "color-mix(in srgb, var(--color-accent-soft) 70%, var(--color-orb-three))",
    ink: "color-mix(in srgb, var(--color-accent-deep) 70%, #567b34)",
  },
  "C++": {
    icon: "C+",
    tint: "color-mix(in srgb, var(--color-orb-one) 44%, transparent)",
    ink: "color-mix(in srgb, var(--color-text) 72%, #315d9f)",
  },
  OpenSSL: {
    icon: "OS",
    tint: "color-mix(in srgb, var(--color-accent-soft) 78%, transparent)",
    ink: "color-mix(in srgb, var(--color-accent-deep) 72%, #8d4f23)",
  },
  CMake: {
    icon: "CM",
    tint: "color-mix(in srgb, var(--color-orb-one) 28%, var(--color-accent-soft))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #6d5ca5)",
  },
  Catch2: {
    icon: "C2",
    tint: "color-mix(in srgb, var(--color-accent-soft) 74%, transparent)",
    ink: "color-mix(in srgb, var(--color-accent-deep) 76%, #9b4f58)",
  },
  Python: {
    icon: "PY",
    tint: "linear-gradient(135deg, color-mix(in srgb, var(--color-orb-one) 48%, transparent), color-mix(in srgb, var(--color-accent-soft) 82%, transparent))",
    ink: "color-mix(in srgb, var(--color-text) 70%, #6f7c29)",
  },
  Rust: {
    icon: "RS",
    tint: "color-mix(in srgb, var(--color-accent-soft) 78%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 76%, #7a4b26)",
  },
  JavaScript: {
    icon: "JS",
    tint: "color-mix(in srgb, var(--color-orb-two) 48%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #8a6b10)",
  },
  "C#": {
    icon: "C#",
    tint: "color-mix(in srgb, var(--color-orb-one) 24%, var(--color-accent-soft))",
    ink: "color-mix(in srgb, var(--color-text) 70%, #6d54b5)",
  },
  MATLAB: {
    icon: "ML",
    tint: "color-mix(in srgb, var(--color-orb-two) 42%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #9e5a22)",
  },
  SQL: {
    icon: "SQ",
    tint: "color-mix(in srgb, var(--color-orb-one) 34%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #33658b)",
  },
  Flask: {
    icon: "FL",
    tint: "color-mix(in srgb, var(--color-text-soft) 14%, var(--color-card-strong))",
    ink: "var(--color-text)",
  },
  Django: {
    icon: "DJ",
    tint: "color-mix(in srgb, var(--color-orb-three) 36%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 72%, #2b6a44)",
  },
  PostgreSQL: {
    icon: "PG",
    tint: "color-mix(in srgb, var(--color-orb-one) 38%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #336790)",
  },
  Prisma: {
    icon: "PR",
    tint: "color-mix(in srgb, var(--color-orb-one) 20%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 76%, #1d4b63)",
  },
  Git: {
    icon: "GT",
    tint: "color-mix(in srgb, var(--color-accent-soft) 82%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-accent-deep) 70%, #c14d20)",
  },
  Docker: {
    icon: "DK",
    tint: "color-mix(in srgb, var(--color-orb-one) 48%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #1572b6)",
  },
  pytest: {
    icon: "PT",
    tint: "color-mix(in srgb, var(--color-accent-soft) 72%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-accent-deep) 74%, #6a8b2b)",
  },
  Jupyter: {
    icon: "JP",
    tint: "color-mix(in srgb, var(--color-orb-two) 42%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #c96a1d)",
  },
  "Scikit-learn": {
    icon: "SK",
    tint: "color-mix(in srgb, var(--color-accent-soft) 82%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-accent-deep) 70%, #d07c1d)",
  },
  Pandas: {
    icon: "PD",
    tint: "color-mix(in srgb, var(--color-orb-one) 24%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 72%, #5b4a9c)",
  },
  Matplotlib: {
    icon: "MP",
    tint: "color-mix(in srgb, var(--color-orb-two) 34%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 74%, #9a6430)",
  },
  Seaborn: {
    icon: "SB",
    tint: "color-mix(in srgb, var(--color-orb-three) 32%, var(--color-card-strong))",
    ink: "color-mix(in srgb, var(--color-text) 72%, #2f7d88)",
  },
};

function getTechMonogram(label: string) {
  const compact = label.replace(/[^A-Za-z0-9+#]/g, "");
  if (compact.length > 0 && compact.length <= 3) {
    return compact.toUpperCase();
  }

  const words = label.split(/[^A-Za-z0-9+#]+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
  }

  return label.slice(0, 2).toUpperCase();
}

function TechBadge({ label, className }: TechBadgeProps) {
  const spec = techSpecs[label] ?? defaultSpec;
  const style = {
    "--tech-badge-tint": spec.tint,
    "--tech-badge-ink": spec.ink,
  } as CSSProperties;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-strong)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[var(--color-text-soft)] shadow-[0_12px_32px_rgba(15,23,42,0.08)]",
        className,
      )}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-border)] text-[9px] font-bold leading-none"
        style={{
          ...style,
          background: "var(--tech-badge-tint)",
          color: "var(--tech-badge-ink)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.32)",
        }}
        aria-hidden="true"
      >
        {spec.icon ?? getTechMonogram(label)}
      </span>
      <span>{label}</span>
    </span>
  );
}

export default TechBadge;
