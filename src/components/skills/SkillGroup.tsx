import type { SkillGroupData } from "../../data/portfolioData.ts";
import Badge from "../ui/Badge.tsx";
import GlassCard from "../ui/GlassCard.tsx";
import TechBadge from "../ui/TechBadge.tsx";

type SkillGroupProps = {
  group: SkillGroupData;
};

function SkillGroup({ group }: SkillGroupProps) {
  const useTechBadges = group.badgeStyle === "tech";

  return (
    <GlassCard className="group p-6 hover:-translate-y-1 hover:bg-[var(--color-card-hover)]">
      <h3 className="text-xl font-semibold text-[var(--color-text)]">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-3">
        {group.items.map((item) => (
          useTechBadges ? <TechBadge key={item} label={item} /> : <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </GlassCard>
  );
}

export default SkillGroup;
