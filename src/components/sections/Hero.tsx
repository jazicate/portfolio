import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "../../data/portfolioData.ts";
import Section from "../layout/Section.tsx";
import Badge from "../ui/Badge.tsx";
import Button from "../ui/Button.tsx";
import GlassCard from "../ui/GlassCard.tsx";
import Reveal from "../ui/Reveal.tsx";
import SocialLink from "../ui/SocialLink.tsx";

function Hero() {
  return (
    <Section id="about" className="relative overflow-hidden pt-16 lg:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <Reveal immediate>
          <div>
            <Badge className="border-transparent bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
              Open to software engineering internships and new graduate roles
            </Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              {profile.fullName}
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-[var(--color-text-soft)] sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {profile.summary}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-subtle)]">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">
                View projects
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <SocialLink href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Email
              </SocialLink>
              <SocialLink href={profile.github}>
                <Github size={18} />
                GitHub
              </SocialLink>
              <SocialLink href={profile.linkedin}>
                <Linkedin size={18} />
                LinkedIn
              </SocialLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} immediate>
          <GlassCard className="group p-6 lg:-translate-y-6">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-strong)] p-6 transition duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-subtle)]">
                    Based in
                  </p>
                  <p className="mt-2 text-lg font-medium text-[var(--color-text)]">
                    {profile.location}
                  </p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.6)]" />
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] p-5">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
                  Education
                </p>
                <p className="mt-3 text-lg font-medium text-[var(--color-text)]">
                  {profile.education.degree}
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                  {profile.education.school} | {profile.education.graduation}
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export default Hero;
