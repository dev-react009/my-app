export type Project = {
  name: string;
  blurb: string;
  status: "live" | "beta" | "wip";
  href?: string;
  metric?: string;
};

export const projects: Project[] = [
  {
    name: "Proofstreak",
    blurb: "Daily build log + streak for indie hackers. The page you're on.",
    status: "wip",
    metric: "Day 1 of public build",
  },
  {
    name: "AI Devkit",
    blurb: "Starter kit for shipping LLM features into Next.js apps in an afternoon.",
    status: "beta",
    href: "https://x.com/aidevkez",
    metric: "120+ devs in private beta",
  },
  {
    name: "Tweetcraft",
    blurb: "Turn rough notes into shippable threads. Built with my own voice in mind.",
    status: "live",
    href: "https://x.com/aidevkez",
    metric: "$2.4k MRR",
  },
];
