import { projects } from "../../data/portfolioData.ts";
import Section from "../layout/Section.tsx";
import SectionTitle from "../layout/SectionTitle.tsx";
import ProjectCard from "../project/ProjectCard.tsx";
import Reveal from "../ui/Reveal.tsx";

function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle
          eyebrow="Projects"
          title="Selected projects"
          description="A few projects that reflect the kind of work I like doing: building useful software, working through tradeoffs, and getting the details right."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
