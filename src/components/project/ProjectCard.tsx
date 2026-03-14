import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../data/portfolioData.ts";
import GlassCard from "../ui/GlassCard.tsx";
import TechBadge from "../ui/TechBadge.tsx";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const arrowClasses =
    "rounded-full border border-[var(--color-border)] p-3 text-[var(--color-subtle)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]";

  return (
    <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:bg-[var(--color-card-hover)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--color-text)]">{project.name}</h3>
          <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{project.summary}</p>
          <p className="mt-4 text-base font-medium leading-8 text-[var(--color-text-soft)]">
            {project.impact}
          </p>
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} link`}
            className={arrowClasses}
          >
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <div className={arrowClasses}>
            <ArrowUpRight size={18} />
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-base leading-8 text-[var(--color-muted)]">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default ProjectCard;
