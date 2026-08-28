import type { Build } from "./data/builds";

const DAY_MS = 24 * 60 * 60 * 1000;

function toLocalISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function diffInDays(a: Date, b: Date): number {
  return Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / DAY_MS);
}

/**
 * Current streak = consecutive days up to today (or yesterday if no entry today)
 * with at least one build entry.
 */
export function currentStreak(builds: Build[], today: Date = new Date()): number {
  const dates = new Set(builds.map((b) => b.date));
  const todayISO = toLocalISODate(today);
  const yesterday = new Date(today.getTime() - DAY_MS);
  const yesterdayISO = toLocalISODate(yesterday);

  let cursor: Date;
  if (dates.has(todayISO)) {
    cursor = startOfDay(today);
  } else if (dates.has(yesterdayISO)) {
    cursor = startOfDay(yesterday);
  } else {
    return 0;
  }

  let streak = 0;
  while (dates.has(toLocalISODate(cursor))) {
    streak += 1;
    cursor = new Date(cursor.getTime() - DAY_MS);
  }
  return streak;
}

export function longestStreak(builds: Build[]): number {
  if (builds.length === 0) return 0;
  const sorted = [...new Set(builds.map((b) => b.date))].sort();
  let best = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const cur = new Date(sorted[i]);
    if (diffInDays(cur, prev) === 1) {
      run += 1;
      best = Math.max(best, run);
    } else {
      run = 1;
    }
  }
  return best;
}

export type HeatCell = {
  date: string;
  count: number;
  /** 0 = none, 1\u20134 = increasing intensity. */
  level: 0 | 1 | 2 | 3 | 4;
};

/**
 * Returns the last `days` days (oldest first), with a count per day.
 */
export function heatmap(builds: Build[], days = 84, today: Date = new Date()): HeatCell[] {
  const counts = new Map<string, number>();
  for (const b of builds) counts.set(b.date, (counts.get(b.date) ?? 0) + 1);

  const out: HeatCell[] = [];
  const start = startOfDay(today);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(start.getTime() - i * DAY_MS);
    const iso = toLocalISODate(d);
    const count = counts.get(iso) ?? 0;
    const level: HeatCell["level"] =
      count === 0 ? 0 : count === 1 ? 2 : count === 2 ? 3 : 4;
    out.push({ date: iso, count, level });
  }
  return out;
}

export function totalBuildDays(builds: Build[]): number {
  return new Set(builds.map((b) => b.date)).size;
}

export function formatRelative(dateISO: string, today: Date = new Date()): string {
  const d = new Date(dateISO + "T00:00:00");
  const days = diffInDays(today, d);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} wk ago`;
  if (days < 365) return `${Math.floor(days / 30)} mo ago`;
  return `${Math.floor(days / 365)} yr ago`;
}
