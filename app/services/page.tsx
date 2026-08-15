import type { Metadata } from "next";

import { NoticeCard } from "@/components/notice-card";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the primary healthcare service categories presented by Pearl's Primary Health Care Clinic.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Clear service information before a patient arrives."
        description="The clinic website is designed to explain care categories in a simple, reassuring format that helps patients understand what support may be available."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NoticeCard title="Service scope note">
          The supplied company profile states that only services actually offered should appear on the final
          public website. This demo shows the proposed service architecture so the client can see the design
          direction.
        </NoticeCard>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.map((service) => (
            <article
              key={service.title}
              className="luxury-panel rounded-[6px] p-6"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="luxury-panel rounded-[6px] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Why this works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                A patient-friendly structure improves confidence.
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                Rather than overwhelming visitors, the website groups services into familiar healthcare
                categories and uses short explanations that are easy to scan on a phone.
              </p>
            </div>

            <div className="luxury-panel rounded-[6px] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Final launch additions
              </p>
              <ul className="mt-4 space-y-3 text-base leading-8 text-[color:var(--muted-foreground)]">
                <li>Doctor or practitioner credentials</li>
                <li>Scope-specific service wording</li>
                <li>Operating hours and booking guidance</li>
                <li>Direct call and WhatsApp actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
