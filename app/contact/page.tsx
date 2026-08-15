import type { Metadata } from "next";

import { EnquiryForm } from "@/components/enquiry-form";
import { NoticeCard } from "@/components/notice-card";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and appointment enquiry page for Pearl's Primary Health Care Clinic.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Designed for easy appointment and enquiry flows."
        description="The live version can support click-to-call, WhatsApp, appointment guidance and a map embed. This demo shows the layout and interaction style using the confirmed project information available so far."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <NoticeCard>{siteContent.demoNotice}</NoticeCard>

            <div className="luxury-panel rounded-[6px] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Contact information
              </p>

              <div className="mt-6 space-y-4">
                {siteContent.practicalInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[6px] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[6px] border border-dashed border-[color:var(--brand-soft)] bg-[color:var(--brand-tint)] p-8 shadow-[0_18px_50px_rgba(127,29,63,0.07)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Map area
              </p>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                Google Maps can be embedded here once the clinic address is confirmed.
              </p>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
