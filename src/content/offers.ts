export interface Offer {
  id: string;
  number: string;
  name: string;
  duration: string;
  summary: string;
  moves: string;
  deliverables: string[];
}

export const offers: Offer[] = [
  {
    id: "audit",
    number: "01",
    name: "Audit",
    duration: "5 to 10 days",
    summary:
      "We read the code, the traces and the bills, then tell you which of the three is actually holding the feature back: what it costs to run, how often someone has to check it, or what it is doing to revenue.",
    moves: "Tells you which number is the problem, before you spend a quarter on the wrong one.",
    deliverables: [
      "Architecture and failure-mode review",
      "Where quality drifts today, and how you would know",
      "Cost curve at ten times current traffic",
      "Ranked list of what to fix first, with effort estimates",
      "Ninety-minute readout with your team",
    ],
  },
  {
    id: "build",
    number: "02",
    name: "Build",
    duration: "8 to 12 weeks",
    summary:
      "Let us agree on the outcome and the scope. Then define milestones and deliver incrementally.",
    moves: "All three, to a target we agree before the first line of code.",
    deliverables: [
      "The system, in production, behind your own release process",
      "Evaluation and observability from day one",
      "A cost ceiling per request that holds under load",
      "Runbook, rollback path and on-call handover",
      "Your engineers on the commits, not watching",
    ],
  },
  {
    id: "embedded",
    number: "03",
    name: "Embedded",
    duration: "monthly",
    summary:
      "Embedded into your team. Architecture, implementation, code review and support, all done together.",
    moves: "Keeps all three from drifting back after launch.",
    deliverables: [
      "Two days a week, same person, no rotation",
      "Design review before the build, not after",
      "Pull request review on the AI paths",
      "Hiring and technical interview support",
      "Monthly written read on where the system stands",
    ],
  },
  {
    id: "workshop",
    number: "04",
    name: "Team workshop",
    duration: "Various durations, on-site or remote",
    summary:
      "Time with your engineers on retrieval, evaluation and what production actually demands. Hands on keyboards, in your codebase where possible.",
    moves: "Gets a whole team to the same baseline.",
    deliverables: [
      "Retrieval and semantic search, built not slides",
      "Writing evaluations that catch real regressions",
      "Cost and latency budgeting",
      "Failure modes we have personally shipped",
      "Materials your team keeps",
    ],
  },
];
