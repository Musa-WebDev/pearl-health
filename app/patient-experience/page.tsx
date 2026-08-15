import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Patient Experience",
  description:
    "See how Pearl's Primary Health Care Clinic presents a warm, organised and professional patient journey.",
};

export default function PatientExperiencePage() {
  return (
    <div>
      <PageHero
        eyebrow="Patient experience"
        title="A healthcare brand is felt at every point of contact."
        description="The proposal and company profile emphasise a clinic experience that is warm, respectful, organised and easy to understand."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              Experience pillars
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Warm. Professional. Trustworthy. Modern. Compassionate.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
              The visual system uses deep maroon, charcoal grey, clean sans-serif typography and generous
              white space to communicate confidence and care.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.patientJourney.map((step, index) => (
              <article
                key={step.title}
                className="luxury-panel rounded-[6px] p-6"
              >
                <div className="text-sm font-semibold text-[color:var(--brand)]">0{index + 1}</div>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="luxury-panel rounded-[6px] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Communication style
              </p>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                The clinic messaging avoids complexity and uses short, reassuring copy that helps patients feel
                informed rather than overwhelmed.
              </p>
            </article>

            <article className="luxury-panel rounded-[6px] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Community focus
              </p>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                Health education, practical guidance and responsible follow-up support position the clinic as a
                trusted local healthcare presence rather than only a treatment point.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
