export type Stat = {
  /** Big number, kept as a string so you can write "120+", "$2.4k", etc. */
  value: string;
  label: string;
  /** Tiny sublabel under the label, e.g. "and counting". Optional. */
  sub?: string;
  /** Optional icon key. Renderable icons live in page.tsx. */
  icon?: "ship" | "streak" | "revenue" | "reach" | "speed" | "clients";
  /** Set true to show a pulsing "live" dot. */
  live?: boolean;
};

export const profile = {
  name: "ai.dev",
  handle: "aidevkez",
  xUrl: "https://x.com/aidevkez",
  /** Edit this to your real Cal.com link. */
  calUrl: "https://cal.com/ai.devkez",
  tagline: "AI engineer for hire — I ship production AI features in weeks, not quarters.",
  /** Punchy one-liner under the headline. */
  pitch:
    "I help founders turn fuzzy AI ideas into shipped products that users pay for. Every line of work is logged on this page — you can see exactly what you'd be hiring.",
  bio: "Indie builder shipping AI-powered products. I post the receipts here so you don't have to take my word for it.",
  /** 3 short value props shown under the hero copy. */
  valueProps: [
    "Ship a paying AI MVP in 2–4 weeks",
    "Production-grade Next.js + LLM stacks",
    "Build-in-public distribution baked in",
  ],
  location: "Remote",
  available: true,
  /** Hero stats strip. Keep to 4 for the cleanest layout. */
  stats: [
    {
      value: "12",
      label: "AI products shipped",
      sub: "for clients & myself",
      icon: "ship",
    },
    {
      value: "<24h",
      label: "Avg. reply time",
      sub: "DMs & email",
      icon: "speed",
    },
    {
      value: "$2.4k",
      label: "MRR · Tweetcraft",
      sub: "profitable & growing",
      icon: "revenue",
      live: true,
    },
    {
      value: "8.4k",
      label: "Followers on X",
      sub: "@aidevkez",
      icon: "reach",
    },
  ] satisfies Stat[],
  ctaPrimary: {
    label: "Book a 15-min call",
    href: "https://cal.com/ai.devkez",
  },
  ctaSecondary: {
    label: "DM me on X",
    href: "https://x.com/messages/compose?recipient_id=aidevkez",
  },
};
