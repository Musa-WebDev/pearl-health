import Image from "next/image";
import Link from "next/link";

import { NoticeCard } from "@/components/notice-card";
import { siteContent } from "@/lib/site-content";

export default function Home() {
  return (
    <div>
      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
                Patient-centred outpatient care
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl">
                Healthcare shaped by compassion, dignity and clear communication.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
                {siteContent.clinicName} is being introduced as a trusted primary healthcare destination
                with a warm patient experience, accessible service information and a professional digital
                presence designed for mobile and desktop visitors alike.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#enquiry-form"
                className="rounded-[6px] bg-[color:var(--brand)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_36px_rgba(127,29,63,0.2)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)]"
              >
                Request an appointment
              </Link>
              <Link
                href="/services"
                className="rounded-[6px] border border-[color:var(--border)] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:shadow-[0_14px_32px_rgba(33,23,28,0.07)]"
              >
                Explore our services
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {siteContent.clinicHighlights.map((item) => (
                <div
                  key={item}
                  className="luxury-panel rounded-[6px] p-5 text-sm leading-7 text-[color:var(--muted-foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[6px] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_30px_80px_rgba(40,20,28,0.12)]">
            <Image
              src="/clinic-hero.jpg"
              alt="Pearl's Primary Health Care Clinic demo visual"
              width={1366}
              height={768}
              priority
              className="h-full min-h-[360px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(33,23,28,0.62)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <div className="max-w-md rounded-[6px] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  Brand direction
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{siteContent.tagline}</h2>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  Deep maroon accents, clean typography, generous white space and a calm patient-first tone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NoticeCard>{siteContent.demoNotice}</NoticeCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              About the clinic
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              A trusted care experience rooted in respect.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
              {siteContent.summary}
            </p>
            <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
              {siteContent.brandPromise}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteContent.values.slice(0, 4).map((value) => (
              <article
                key={value.title}
                className="luxury-panel rounded-[6px] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
              Core services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Clear, patient-friendly service categories.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[color:var(--brand)]">
            View all services
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.slice(0, 6).map((service) => (
            <article
              key={service.title}
              className="luxury-panel rounded-[6px] p-6"
            >
              <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Patient experience
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
                Every touchpoint should feel warm, organised and professional.
              </h2>
              <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                The clinic brand is designed to be experienced before, during and after care. Patients are
                welcomed with clear communication, practical guidance and a service environment built on trust.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="luxury-panel rounded-[6px] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
                Contact & appointments
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                Ready to show patients how to reach the clinic.
              </h2>
              <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                The final live version can include click-to-call, WhatsApp, a map embed, confirmed hours,
                team credentials and appointment instructions as soon as those details are signed off.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.practicalInfo.slice(0, 4).map((item) => (
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
        </div>
      </section>
    </div>
  );
}
