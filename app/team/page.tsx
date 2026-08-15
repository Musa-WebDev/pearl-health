import type { Metadata } from "next";

import { NoticeCard } from "@/components/notice-card";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Preview the practitioner and team section for Pearl's Primary Health Care Clinic.",
};

export default function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Team"
        title="A clear, credible practitioner profile section."
        description="The proposal recommends a dedicated team or practitioner page so patients can see roles, qualifications and professional registration details before visiting the clinic."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NoticeCard title="Publication note">
          The company profile specifically notes that professional credentials, registrations, qualifications
          and claims should be verified before publication. This demo therefore uses a presentation template
          instead of invented staff information.
        </NoticeCard>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="luxury-panel rounded-[6px] bg-[color:var(--surface)] p-8">
            <div className="flex h-52 items-center justify-center rounded-[6px] border border-dashed border-[color:var(--brand-soft)] bg-white text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              Practitioner photo
            </div>
          </div>

          <article className="luxury-panel rounded-[6px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              Lead practitioner
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              Full name to be confirmed
            </h2>
            <p className="mt-2 text-lg text-[color:var(--muted-foreground)]">
              Professional title / role to be confirmed
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[6px] bg-[color:var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                  Qualifications
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  Insert confirmed qualification list
                </p>
              </div>
              <div className="rounded-[6px] bg-[color:var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                  Registration
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  Insert verified registration details if applicable
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-[color:var(--muted-foreground)]">
              This section is prepared for a short professional biography that helps patients understand the
              clinician&apos;s role, care philosophy and service strengths.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
