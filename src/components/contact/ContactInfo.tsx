import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { contactLinks, profile } from "../../data/portfolioData.ts";
import GlassCard from "../ui/GlassCard.tsx";

function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="block"
        >
          <GlassCard className="flex items-center justify-between p-5 transition duration-200 hover:bg-[var(--color-card-hover)]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                {item.label}
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">{item.value}</p>
            </div>
            <ArrowUpRight className="text-[var(--color-subtle)]" size={18} />
          </GlassCard>
        </a>
      ))}

      <GlassCard className="p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Direct
        </p>
        <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
          <p className="flex items-center gap-3">
            <Mail size={16} className="text-[var(--color-accent)]" />
            {profile.email}
          </p>
          <p className="flex items-center gap-3">
            <Phone size={16} className="text-[var(--color-accent)]" />
            {profile.phone}
          </p>
          <p className="flex items-center gap-3">
            <Github size={16} className="text-[var(--color-accent)]" />
            jazicate
          </p>
          <p className="flex items-center gap-3">
            <Linkedin size={16} className="text-[var(--color-accent)]" />
            Jerome Azicate
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

export default ContactInfo;
