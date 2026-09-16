export interface Talk {
  id: string;
  title: string;
  venue: string;
  location: string;
  year: string;
  description: string;
  videoId?: string;
  deckPath?: string;
  writeupUrl?: string;
  writeupLabel?: string;
}

export const talks: Talk[] = [
  {
    id: "interrupt-2026",
    title:
      "Eval-Driven Development, LLM-Generated SQL, and the Cost-Uncertainty-Lag Triangle",
    venue: "LangChain Interrupt",
    location: "San Francisco",
    year: "2026",
    description:
      "How an agent platform moved from a hierarchy of agents to a single flat one, traded a large tool catalogue for a handful of general tools, and let the model write SQL against the schema directly. Presented with Akash Ashok on Rippling's agent platform.",
    videoId: "3lb_4OEOykc",
    writeupUrl:
      "https://8thlight.com/insights/production-is-the-new-prototype-notes-from-langchain-interrupt-2026",
    writeupLabel: "Third-party notes from the conference",
  },
  {
    id: "agents-industrial-swe",
    title: "AI Agents: Industrial Software Engineering",
    venue: "Meetup",
    location: "Dubai",
    year: "2025",
    description:
      "Software engineering practice for agent systems, and what has to change when an agent stops being a demo and starts being something on call.",
    deckPath: "/presentations/agents-industrial-swe/",
  },
];
