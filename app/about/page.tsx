import type { Metadata } from "next";
import Link from "next/link";

import { NoticeCard } from "@/components/notice-card";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pearl's Primary Health Care Clinic, its mission, values and patient-centred approach to care.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About the clinic"
        title="Built around trust, dignity and accessible care."
        description="Pearl's Primary Health Care Clinic is positioned as a modern primary healthcare practice focused on compassionate service, responsible care and clear communication."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              Company overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              A patient-focused healthcare practice with a calm and professional identity.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
              {siteContent.summary}
            </p>
            <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
              {siteContent.brandPromise}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="luxury-panel rounded-[6px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Vision
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {siteContent.vision}
              </p>
            </article>
            <article className="luxury-panel rounded-[6px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Mission
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {siteContent.mission}
              </p>
            </article>
            <article className="luxury-panel rounded-[6px] p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Brand personality
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteContent.personality.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-[6px] border border-[color:var(--brand-soft)] bg-[color:var(--brand-tint)] px-4 py-2 text-sm font-medium text-[color:var(--brand)]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              Core values
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Principles that shape the patient experience.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.values.map((value) => (
              <article
                key={value.title}
                className="luxury-panel rounded-[6px] p-6"
              >
                <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NoticeCard title="Launch information">
          Final registration details, address, operating hours and contact channels can be inserted into
          this section once they are confirmed for publication.
        </NoticeCard>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-[6px] bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(127,29,63,0.2)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)]"
          >
            View contact page
          </Link>
        </div>
      </section>
    </div>
  );
}
