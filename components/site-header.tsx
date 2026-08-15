import Link from "next/link";

import { mainNav, siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/86 shadow-[0_12px_40px_rgba(33,23,28,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group min-w-0">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand)]">
              Primary Health Care
            </div>
            <div className="truncate text-lg font-semibold tracking-tight text-[color:var(--foreground)] transition group-hover:text-[color:var(--brand)] sm:text-xl">
              {siteContent.clinicName}
            </div>
          </Link>

          <Link
            href="/contact#enquiry-form"
            className="rounded-[6px] bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(127,29,63,0.2)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)]"
          >
            Book an enquiry
          </Link>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[color:var(--border)] pt-3 text-sm font-medium text-[color:var(--muted-foreground)]">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="fine-link py-1 hover:text-[color:var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
