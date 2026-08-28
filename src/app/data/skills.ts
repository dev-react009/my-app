export type Skill = {
  label: string;
  /** Short value-prop sentence \u2014 what you can be hired for. */
  for: string;
};

export const skills: Skill[] = [
  {
    label: "AI product engineering",
    for: "Take a fuzzy AI idea to a paying MVP in 2\u20134 weeks.",
  },
  {
    label: "Next.js + TypeScript",
    for: "Production-grade App Router apps with server actions and edge-ready APIs.",
  },
  {
    label: "LLM integration",
    for: "RAG pipelines, agent workflows, evals, and cost-aware prompt design.",
  },
  {
    label: "Build-in-public growth",
    for: "Turn dev work into distribution \u2014 daily on X, weekly demos, monthly launches.",
  },
];
