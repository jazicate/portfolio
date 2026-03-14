import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useState } from "react";

import { navigation, profile } from "../../data/portfolioData.ts";
import Container from "./Container.tsx";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav)] backdrop-blur-xl transition-colors duration-300">
      <Container className="flex items-center justify-between py-4">
        <a href="#about" className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-text)]">
          {profile.username}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-card-hover)]"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MoonStar size={16} /> : <SunMedium size={16} />}
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-text)]"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MoonStar size={18} /> : <SunMedium size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-text)]"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
