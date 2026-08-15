import Link from "next/link";

import { mainNav, siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand)]">
            {siteContent.shortName}
          </div>
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {siteContent.tagline}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--muted-foreground)]">
            {siteContent.summary}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand)]">
            Explore
          </h3>
          <ul className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[color:var(--brand)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand)]">
            Launch details
          </h3>
          <ul className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
            <li>Address to be confirmed</li>
            <li>Phone and WhatsApp to be confirmed</li>
            <li>Operating hours to be confirmed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
