import {
  Binary,
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

type Illustration = {
  icon: typeof Code2;
  className: string;
  sizeClassName: string;
  label: string;
  floatX: number[];
  floatY: number[];
  rotate: number[];
  clickRange: { x: number; y: number };
  scrollRange: [number, number];
  iconClassName: string;
  chipClassName: string;
};

type IllustrationItemProps = {
  illustration: Illustration;
  offset: { x: number; y: number; rotate: number };
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  onClick: (label: string, clickRange: Illustration["clickRange"]) => void;
};

const illustrations: Illustration[] = [
  {
    icon: Code2,
    className: "left-[-2%] top-[18%] hidden lg:flex",
    sizeClassName: "h-28 w-28 xl:h-36 xl:w-36",
    label: "< / >",
    floatX: [0, 10, -8, 0],
    floatY: [0, 16, 8, 0],
    rotate: [0, 2, -2, 0],
    clickRange: { x: 18, y: 20 },
    scrollRange: [-80, 72],
    iconClassName: "text-[var(--color-accent)]",
    chipClassName:
      "bg-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] text-[var(--color-accent-deep)] ring-1 ring-[var(--color-accent-border)]",
  },
  {
    icon: Cpu,
    className: "right-[-2%] top-[24%] hidden lg:flex",
    sizeClassName: "h-24 w-24 xl:h-32 xl:w-32",
    label: "CPU",
    floatX: [0, -8, 10, 0],
    floatY: [0, 12, -6, 0],
    rotate: [0, -2, 1, 0],
    clickRange: { x: 16, y: 18 },
    scrollRange: [70, -64],
    iconClassName: "text-sky-500",
    chipClassName: "bg-[rgba(14,165,233,0.16)] text-sky-700 ring-1 ring-[rgba(14,165,233,0.28)] dark:text-sky-200",
  },
  {
    icon: Database,
    className: "left-[-2%] bottom-[22%] hidden lg:flex",
    sizeClassName: "h-24 w-24 xl:h-32 xl:w-32",
    label: "SQL",
    floatX: [0, 12, -6, 0],
    floatY: [0, -10, 14, 0],
    rotate: [0, 2, -1, 0],
    clickRange: { x: 18, y: 18 },
    scrollRange: [-64, 78],
    iconClassName: "text-emerald-500",
    chipClassName:
      "bg-[rgba(16,185,129,0.16)] text-emerald-700 ring-1 ring-[rgba(16,185,129,0.26)] dark:text-emerald-200",
  },
  {
    icon: GitBranch,
    className: "right-[-2%] bottom-[18%] hidden lg:flex",
    sizeClassName: "h-24 w-24 xl:h-28 xl:w-28",
    label: "git",
    floatX: [0, -10, 8, 0],
    floatY: [0, 14, -8, 0],
    rotate: [0, -2, 2, 0],
    clickRange: { x: 16, y: 16 },
    scrollRange: [82, -58],
    iconClassName: "text-orange-500",
    chipClassName:
      "bg-[rgba(249,115,22,0.16)] text-orange-700 ring-1 ring-[rgba(249,115,22,0.26)] dark:text-orange-200",
  },
  {
    icon: Binary,
    className: "left-[6%] top-[12%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "01",
    floatX: [0, 6, -10, 0],
    floatY: [0, 10, 4, 0],
    rotate: [0, 1, -2, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [-46, 42],
    iconClassName: "text-fuchsia-500",
    chipClassName:
      "bg-[rgba(217,70,239,0.16)] text-fuchsia-700 ring-1 ring-[rgba(217,70,239,0.24)] dark:text-fuchsia-200",
  },
  {
    icon: Network,
    className: "right-[8%] top-[42%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "NET",
    floatX: [0, -8, 8, 0],
    floatY: [0, 8, -10, 0],
    rotate: [0, -1, 1, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [42, -38],
    iconClassName: "text-cyan-500",
    chipClassName: "bg-[rgba(6,182,212,0.16)] text-cyan-700 ring-1 ring-[rgba(6,182,212,0.26)] dark:text-cyan-200",
  },
  {
    icon: Workflow,
    className: "left-[7%] bottom-[36%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "API",
    floatX: [0, 10, -6, 0],
    floatY: [0, -8, 10, 0],
    rotate: [0, 1, -2, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [-36, 44],
    iconClassName: "text-violet-500",
    chipClassName:
      "bg-[rgba(139,92,246,0.16)] text-violet-700 ring-1 ring-[rgba(139,92,246,0.24)] dark:text-violet-200",
  },
  {
    icon: Braces,
    className: "right-[6%] bottom-[12%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "{}",
    floatX: [0, -6, 10, 0],
    floatY: [0, 8, -12, 0],
    rotate: [0, -1, 2, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [44, -40],
    iconClassName: "text-amber-500",
    chipClassName:
      "bg-[rgba(245,158,11,0.16)] text-amber-700 ring-1 ring-[rgba(245,158,11,0.26)] dark:text-amber-200",
  },
  {
    icon: ShieldCheck,
    className: "right-[7%] bottom-[34%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "SEC",
    floatX: [0, -10, 6, 0],
    floatY: [0, 10, -8, 0],
    rotate: [0, -1, 2, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [38, -34],
    iconClassName: "text-rose-500",
    chipClassName: "bg-[rgba(244,63,94,0.16)] text-rose-700 ring-1 ring-[rgba(244,63,94,0.26)] dark:text-rose-200",
  },
  {
    icon: ServerCog,
    className: "right-[9%] top-[58%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "OPS",
    floatX: [0, -8, 10, 0],
    floatY: [0, 10, -6, 0],
    rotate: [0, -1, 2, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [46, -42],
    iconClassName: "text-indigo-500",
    chipClassName:
      "bg-[rgba(99,102,241,0.16)] text-indigo-700 ring-1 ring-[rgba(99,102,241,0.24)] dark:text-indigo-200",
  },
  {
    icon: LockKeyhole,
    className: "right-[10%] bottom-[24%] hidden 2xl:flex",
    sizeClassName: "h-20 w-20",
    label: "AUTH",
    floatX: [0, -9, 7, 0],
    floatY: [0, 9, -10, 0],
    rotate: [0, -2, 1, 0],
    clickRange: { x: 10, y: 12 },
    scrollRange: [40, -36],
    iconClassName: "text-teal-500",
    chipClassName:
      "bg-[rgba(20,184,166,0.16)] text-teal-700 ring-1 ring-[rgba(20,184,166,0.24)] dark:text-teal-200",
  },
];

function IllustrationItem({ illustration, offset, scrollYProgress, onClick }: IllustrationItemProps) {
  const {
    icon: Icon,
    className,
    sizeClassName,
    label,
    floatX,
    floatY,
    rotate,
    clickRange,
    scrollRange,
    iconClassName,
    chipClassName,
  } = illustration;
  const rawScrollOffset = useTransform(scrollYProgress, [0, 1], scrollRange);
  const scrollOffset = useSpring(rawScrollOffset, {
    stiffness: 70,
    damping: 22,
    mass: 0.8,
  });

  return (
    <motion.div className={`absolute ${className}`} style={{ y: scrollOffset }}>
      <motion.button
        type="button"
        className={`tech-badge pointer-events-auto absolute items-center justify-center rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/82 backdrop-blur-[3px] ${sizeClassName}`}
        animate={{
          x: floatX.map((value) => value + offset.x),
          y: floatY.map((value) => value + offset.y),
          rotate: rotate.map((value) => value + offset.rotate),
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          times: [0, 0.35, 0.7, 1],
        }}
        whileHover={{
          scale: 1.08,
          x: offset.x + 12,
          y: offset.y - 12,
          rotate: offset.rotate + 4,
        }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onClick(label, clickRange)}
        tabIndex={-1}
      >
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_62%)]" />
        <Icon size={44} strokeWidth={1.55} className={iconClassName} />
        <span
          className={`absolute bottom-3 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] ${chipClassName}`}
        >
          {label}
        </span>
      </motion.button>
    </motion.div>
  );
}

function BackgroundIllustrations() {
  const { scrollYProgress } = useScroll();
  const [offsets, setOffsets] = useState<Record<string, { x: number; y: number; rotate: number }>>({});

  const handleClick = (label: string, clickRange: Illustration["clickRange"]) => {
    const nextX = (Math.random() * 2 - 1) * clickRange.x;
    const nextY = (Math.random() * 2 - 1) * clickRange.y;
    const nextRotate = (Math.random() * 2 - 1) * 7;

    setOffsets((current) => ({
      ...current,
      [label]: {
        x: nextX,
        y: nextY,
        rotate: nextRotate,
      },
    }));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block" aria-hidden="true">
      {illustrations.map((illustration) => (
        <IllustrationItem
          key={`${illustration.label}-${illustration.className}`}
          illustration={illustration}
          offset={offsets[illustration.label] ?? { x: 0, y: 0, rotate: 0 }}
          scrollYProgress={scrollYProgress}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default BackgroundIllustrations;
