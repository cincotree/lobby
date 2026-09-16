export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "How do engagements start?",
    answer:
      "A call, then a short written scope. Most teams start with the Audit because it is the cheapest way to find out whether the problem you think you have is the one you actually have. Nothing obliges you to continue after it.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do, on delivery, including the evaluation suites and tooling. We keep no licence over anything built for you.",
  },
  {
    question: "Do you work with our engineers or around them?",
    answer:
      "With them. We write code in your repository, in your review process, and the handover is continuous rather than an event at the end. If your team cannot run the system without us, we have not finished.",
  },
  {
    question: "What happens to our data?",
    answer:
      "We work inside your infrastructure and your accounts wherever possible. Where evaluation needs real traffic, we agree the handling and retention in writing first. We do not move your data into our own systems.",
  },
  {
    question: "Remote or on-site?",
    answer:
      "Both. We are based in Dubai and work across US and European hours regularly. Workshops are on-site. Build work is mostly remote with visits at the points where being in the room matters.",
  },
  {
    question: "What if we already have something in production?",
    answer:
      "That is the usual case, and it is the easier one. There is real traffic to build evaluations from and a real cost curve to read, rather than guesses about both.",
  },
];
