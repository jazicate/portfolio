import type { ExperienceItem } from "../../data/portfolioData.ts";
import GlassCard from "../ui/GlassCard.tsx";

type ExperienceCardProps = {
  item: ExperienceItem;
};

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <GlassCard className="group p-6 hover:-translate-y-1 hover:bg-[var(--color-card-hover)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {item.company}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">{item.role}</h3>
          <p className="mt-2 text-sm text-[var(--color-subtle)]">{item.location}</p>
        </div>
        <p className="text-sm font-medium text-[var(--color-muted)]">{item.period}</p>
      </div>

      <ul className="mt-6 space-y-3 text-base leading-8 text-[var(--color-muted)]">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default ExperienceCard;
