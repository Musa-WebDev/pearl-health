import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pearl's Primary Health Care Clinic",
    template: "%s | Pearl's Primary Health Care Clinic",
  },
  description:
    "A modern, mobile-friendly demo website for Pearl's Primary Health Care Clinic built around compassionate, patient-centred primary healthcare.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main className="page-shell flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
