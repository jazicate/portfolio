import { experience } from "../../data/portfolioData.ts";
import ExperienceCard from "../experience/ExperienceCard.tsx";
import Section from "../layout/Section.tsx";
import SectionTitle from "../layout/SectionTitle.tsx";
import Reveal from "../ui/Reveal.tsx";

function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle
          eyebrow="Experience"
          title="Experience"
          description="My teaching assistant work gave me a lot of practice debugging with other people, explaining technical concepts clearly, and staying patient when the problem is still fuzzy."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {experience.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <ExperienceCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
