import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import { profile } from "../../data/portfolioData.ts";
import Button from "../ui/Button.tsx";
import GlassCard from "../ui/GlassCard.tsx";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [showFallback, setShowFallback] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subjectLine = form.subject.trim() || `Portfolio inquiry from ${name}`;
    const message = form.message.trim();
    const searchParams = new URLSearchParams({
      subject: subjectLine,
      body: `Name: ${name}\r\nEmail: ${email}\r\n\r\n${message}`,
    });
    const mailtoHref = `mailto:${profile.email}?${searchParams.toString()}`;
    const mailLink = document.createElement("a");

    mailLink.href = mailtoHref;
    mailLink.style.display = "none";
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
    setShowFallback(true);
  };

  return (
    <GlassCard className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-[var(--color-muted)]">Name</span>
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-[var(--color-muted)]">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm text-[var(--color-muted)]">Subject</span>
          <input
            value={form.subject}
            onChange={(event) =>
              setForm((current) => ({ ...current, subject: event.target.value }))
            }
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm text-[var(--color-muted)]">Message</span>
          <textarea
            required
            rows={7}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            className="w-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-card-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>

        <Button type="submit" className="mt-6">
          Send via email
          <ArrowUpRight size={16} />
        </Button>

        {showFallback ? (
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
            If your mail app did not open, email{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-[var(--color-accent)] underline decoration-[color:var(--color-accent-border)] underline-offset-4"
            >
              {profile.email}
            </a>{" "}
            directly.
          </p>
        ) : null}
      </form>
    </GlassCard>
  );
}

export default ContactForm;
