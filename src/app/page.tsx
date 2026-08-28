import { builds } from "./data/builds";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import {
  currentStreak,
  formatRelative,
  heatmap,
  longestStreak,
  totalBuildDays,
} from "./streak";

const HEATMAP_DAYS = 84;

export default function Home() {
  const sorted = [...builds].sort((a, b) => (a.date < b.date ? 1 : -1));
  const streak = currentStreak(builds);
  const best = longestStreak(builds);
  const totalDays = totalBuildDays(builds);
  const cells = heatmap(builds, HEATMAP_DAYS);

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
          @{profile.handle}
        </div>
        <a
          href={profile.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
        >
          Follow on X →
        </a>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-24 pt-6">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-8 sm:p-12">
          {/* decorative grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-6">
            {/* Logomark */}
            <div className="flex items-center gap-3">
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-black shadow-[0_0_40px_-10px_rgba(52,211,153,0.6)]">
                <span className="font-mono text-lg font-bold tracking-tight">
                  <span className="text-emerald-400">ai</span>
                  <span className="text-white">.dev</span>
                </span>
                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-black" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {profile.name}
                </p>
                <a
                  href={profile.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-emerald-300"
                >
                  @{profile.handle} · {profile.location}
                </a>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${profile.available ? "bg-emerald-400 opacity-75" : "opacity-0"}`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${profile.available ? "bg-emerald-400" : "bg-zinc-500"}`}
                />
              </span>
              {profile.available
                ? "Booking 1 new client this month"
                : "Heads down — not taking work"}
            </span>

            <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              {profile.tagline.split(" — ")[0]}{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.tagline.split(" — ")[1] ?? ""}
              </span>
            </h1>

            <p className="max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
              {profile.pitch}
            </p>

            <ul className="flex flex-col gap-2 text-sm text-zinc-200 sm:flex-row sm:flex-wrap sm:gap-x-5">
              {profile.valueProps.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    className="h-4 w-4 shrink-0 text-emerald-400"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {v}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:bg-emerald-400"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {profile.ctaPrimary.label}
                <span aria-hidden>→</span>
              </a>
              <a
                href={profile.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
              >
                {profile.ctaSecondary.label}
              </a>
              <p className="text-xs text-zinc-500">
                Avg. reply &lt; 24h · No-pressure intro call
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="group relative flex flex-col gap-1 bg-black p-5 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between">
                <StatIcon name={s.icon} />
                {s.live ? (
                  <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Live
                  </span>
                ) : null}
              </div>
              <p className="mt-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                {s.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">
                {s.label}
              </p>
              {s.sub ? (
                <p className="text-[11px] text-zinc-500">{s.sub}</p>
              ) : null}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/0 to-transparent transition-colors group-hover:via-emerald-400/60"
              />
            </div>
          ))}
        </section>

        {/* Streak + Heatmap */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Build streak
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">
                {streak} {streak === 1 ? "day" : "days"}{" "}
                <span className="text-emerald-400">🔥</span>
              </p>
            </div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Longest
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {best} {best === 1 ? "day" : "days"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Total
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {totalDays} {totalDays === 1 ? "day" : "days"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Window
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {HEATMAP_DAYS}d
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-1.5 sm:grid-cols-[repeat(28,minmax(0,1fr))]">
            {cells.map((c) => {
              const cls =
                c.level === 0
                  ? "bg-white/[0.04]"
                  : c.level === 1
                    ? "bg-emerald-500/20"
                    : c.level === 2
                      ? "bg-emerald-500/40"
                      : c.level === 3
                        ? "bg-emerald-500/60"
                        : "bg-emerald-400/90";
              return (
                <div
                  key={c.date}
                  title={`${c.date} · ${c.count} ${c.count === 1 ? "build" : "builds"}`}
                  className={`aspect-square rounded-[3px] ${cls}`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-end gap-2 text-[10px] uppercase tracking-wider text-zinc-500">
            Less
            <span className="h-2.5 w-2.5 rounded-[2px] bg-white/[0.04]" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500/20" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500/40" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500/60" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400/90" />
            More
          </div>
        </section>

        {/* Daily log */}
        <section className="mt-16">
          <SectionHeading
            kicker="Daily log"
            title="What I shipped"
            subtitle="Every entry is a real thing built that day. No 'thoughts'. No 'frameworks'."
          />
          <ol className="mt-6 space-y-3">
            {sorted.map((b) => (
              <li
                key={`${b.date}-${b.title}`}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-black/30 px-4 py-4 transition-colors hover:border-white/15"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium text-zinc-100">
                      {b.title}
                    </p>
                    {b.tag ? (
                      <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400">
                        {b.tag}
                      </span>
                    ) : null}
                  </div>
                  {b.detail ? (
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {b.detail}
                    </p>
                  ) : null}
                  <p className="mt-1 text-xs text-zinc-500">
                    {formatRelative(b.date)} · {b.date}
                  </p>
                </div>
                {b.link ? (
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    View →
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <SectionHeading
            kicker="Shipped"
            title="Projects in the wild"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <StatusPill status={p.status} />
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{p.blurb}</p>
                {p.metric ? (
                  <p className="mt-4 font-mono text-xs text-emerald-400/80">
                    {p.metric}
                  </p>
                ) : null}
              </a>
            ))}
          </div>
        </section>

        {/* Skills / hire-me */}
        <section className="mt-16">
          <SectionHeading
            kicker="Hire me for"
            title="What I'm good at"
            subtitle="If any of this matches what you need, the DMs are open."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-semibold tracking-tight">{s.label}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{s.for}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Like the work? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Grab a 15-min slot — I&apos;ll tell you straight if I can help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={profile.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-400"
            >
              {profile.ctaPrimary.label}
            </a>
            <a
              href={profile.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
            >
              {profile.ctaSecondary.label}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-zinc-600">
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name} · Built in public.
          </p>
          <p>Receipts &gt; tweets.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/80">
        {kicker}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1 max-w-xl text-sm text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

function StatusPill({ status }: { status: "live" | "beta" | "wip" }) {
  const map = {
    live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    beta: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    wip: "border-zinc-400/30 bg-zinc-400/10 text-zinc-300",
  } as const;
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${map[status]}`}
    >
      {status}
    </span>
  );
}

function StatIcon({
  name,
}: {
  name?: "ship" | "streak" | "revenue" | "reach" | "speed" | "clients";
}) {
  const cls = "h-4 w-4 text-emerald-400/80";
  switch (name) {
    case "ship":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path
            d="M3 12l9-9 9 9-9 9-9-9z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8 12l3 3 5-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path
            d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
            fill="currentColor"
          />
        </svg>
      );
    case "revenue":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path
            d="M4 17l5-5 4 4 7-9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h6v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "reach":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "streak":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <path
            d="M12 3s5 4 5 9a5 5 0 11-10 0c0-2 1-3 1-3s1 2 3 2c0-3-2-5 1-8z"
            fill="currentColor"
          />
        </svg>
      );
    case "clients":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c.5-2 2.5-3.5 5-3.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <span className={cls} />;
  }
}
