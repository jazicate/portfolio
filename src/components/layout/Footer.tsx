import { profile } from "../../data/portfolioData.ts";
import Container from "./Container.tsx";

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col gap-3 text-sm text-[var(--color-subtle)] md:flex-row md:items-center md:justify-between">
        <p>{profile.fullName} © 2026</p>
        <p>Built with React, TypeScript, TailwindCSS, and Framer Motion.</p>
      </Container>
    </footer>
  );
}

export default Footer;
