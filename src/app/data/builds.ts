export type Build = {
  /** ISO date YYYY-MM-DD (local). Used for streak + heatmap. */
  date: string;
  title: string;
  /** Optional longer description. */
  detail?: string;
  /** Short tag, e.g. "code", "ship", "design", "video". */
  tag?: string;
  /** Optional link to a tweet / PR / demo. */
  link?: string;
};

/**
 * Add a new entry at the TOP of this array each day.
 * Keep `date` in YYYY-MM-DD format.
 */
export const builds: Build[] = [
  {
    date: "2026-04-27",
    title: "Shipped public proof-of-work dashboard",
    detail: "Replaced landing page with a personal dashboard linked from my X bio.",
    tag: "ship",
    link: "https://x.com/aidevkez",
  },
  {
    date: "2026-04-26",
    title: "Designed streak + heatmap component",
    detail: "84-day grid powered by build entries, computed on the server.",
    tag: "design",
  },
  {
    date: "2026-04-25",
    title: "Drafted positioning: 'receipts > tweets'",
    detail: "Wrote the hook, three bullets, and CTA copy for the page.",
    tag: "writing",
  },
  {
    date: "2026-04-24",
    title: "Set up Next.js 16 + Tailwind v4 baseline",
    tag: "code",
  },
  {
    date: "2026-04-23",
    title: "Recorded 60s teaser for upcoming launch",
    tag: "video",
  },
];
