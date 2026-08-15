type NoticeCardProps = {
  title?: string;
  children: React.ReactNode;
};

export function NoticeCard({ title = "Demo note", children }: NoticeCardProps) {
  return (
    <div className="rounded-[6px] border border-[color:var(--brand-soft)] bg-[color:var(--brand-tint)] p-5 shadow-[0_18px_50px_rgba(127,29,63,0.07)]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">{children}</p>
    </div>
  );
}
