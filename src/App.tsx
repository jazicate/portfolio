import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/layout/Navbar.tsx";
import BackgroundIllustrations from "./components/layout/BackgroundIllustrations.tsx";
import Footer from "./components/layout/Footer.tsx";

import Hero from "./components/sections/Hero.tsx";
import Projects from "./components/sections/Projects.tsx";
import Experience from "./components/sections/Experience.tsx";
import Skills from "./components/sections/Skills.tsx";
import Contact from "./components/sections/Contact.tsx";

import "./App.css";

const STORAGE_KEY = "portfolio-theme";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="app-shell relative isolate min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="orb-float absolute left-[-8%] top-[-6%] h-[32rem] w-[32rem] rounded-full bg-[var(--color-orb-one)] blur-3xl" />
        <div className="orb-float-delayed absolute right-[-10%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-[var(--color-orb-two)] blur-3xl" />
        <div className="orb-float-slow absolute bottom-[-10%] left-[28%] h-[24rem] w-[24rem] rounded-full bg-[var(--color-orb-three)] blur-3xl" />
      </div>
      <BackgroundIllustrations />
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />
      <main className="app-main relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <div className="app-footer relative z-10">
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
