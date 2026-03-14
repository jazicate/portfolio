type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}

export default SectionTitle;
