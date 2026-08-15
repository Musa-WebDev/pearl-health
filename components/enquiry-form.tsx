"use client";

import { FormEvent, useState } from "react";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      className="luxury-panel rounded-[6px] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-[color:var(--muted-foreground)]">
          Full name
          <input
            required
            className="w-full rounded-[6px] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_3px_rgba(127,29,63,0.08)]"
            placeholder="Your name"
            name="name"
          />
        </label>

        <label className="space-y-2 text-sm text-[color:var(--muted-foreground)]">
          Phone number
          <input
            required
            className="w-full rounded-[6px] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_3px_rgba(127,29,63,0.08)]"
            placeholder="Your phone number"
            name="phone"
          />
        </label>

        <label className="space-y-2 text-sm text-[color:var(--muted-foreground)] sm:col-span-2">
          Email address
          <input
            type="email"
            className="w-full rounded-[6px] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_3px_rgba(127,29,63,0.08)]"
            placeholder="you@example.com"
            name="email"
          />
        </label>

        <label className="space-y-2 text-sm text-[color:var(--muted-foreground)] sm:col-span-2">
          Reason for enquiry
          <select
            className="w-full rounded-[6px] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_3px_rgba(127,29,63,0.08)]"
            name="reason"
            defaultValue="General enquiry"
          >
            <option>General enquiry</option>
            <option>Appointment request</option>
            <option>Service information</option>
            <option>Clinic operating hours</option>
          </select>
        </label>

        <label className="space-y-2 text-sm text-[color:var(--muted-foreground)] sm:col-span-2">
          Message
          <textarea
            rows={5}
            className="w-full rounded-[6px] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)] focus:shadow-[0_0_0_3px_rgba(127,29,63,0.08)]"
            placeholder="Tell us how we can help."
            name="message"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
          Demo interaction only. Final form delivery can be connected to email, WhatsApp or a CRM during launch.
        </p>
        <button
          type="submit"
          className="rounded-[6px] bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(127,29,63,0.2)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)]"
        >
          Send enquiry
        </button>
      </div>

      {submitted ? (
        <div className="mt-5 rounded-[6px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Enquiry captured for demo purposes. On the live site this can send directly to the clinic or your preferred inbox.
        </div>
      ) : null}
    </form>
  );
}
