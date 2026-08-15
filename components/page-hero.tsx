type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(247,239,239,0.96),rgba(255,250,249,0.94))]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[color:var(--brand)]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">{description}</p>
        </div>
      </div>
    </section>
  );
}
