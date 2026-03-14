import { skillGroups } from "../../data/portfolioData.ts";
import Section from "../layout/Section.tsx";
import SectionTitle from "../layout/SectionTitle.tsx";
import Reveal from "../ui/Reveal.tsx";
import SkillGroup from "../skills/SkillGroup.tsx";

function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionTitle
          eyebrow="Skills"
          title="Tools and foundations"
          description="These are the languages, frameworks, and core CS topics I keep coming back to in coursework and projects."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <SkillGroup group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
