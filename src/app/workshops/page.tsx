import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section, { Eyebrow } from "../../components/Section";
import CTA from "../../components/CTA";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "On-site engineering workshops on retrieval, evaluation and production AI. One day, your team, your codebase.",
};

const modules = [
  {
    title: "Retrieval that survives real corpora",
    body: "Chunking, embeddings and hybrid search, built rather than described. Where semantic search quietly fails and what to do instead.",
  },
  {
    title: "Evaluations that catch real regressions",
    body: "Building a golden set from your own traffic, scoring what matters, and wiring it into CI so a bad change stops at the pull request.",
  },
  {
    title: "Cost and latency budgeting",
    body: "Modelling what a feature costs per request and at ten times the traffic. Caching, routing and the trade-offs between them.",
  },
  {
    title: "Failure modes we have shipped",
    body: "The specific ways agent systems break in production, taken from our own work rather than a blog post.",
  },
];

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              Time with your engineers.
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              Hands on keyboards, in your codebase where we can. Gets a whole team to the same
              baseline.
            </p>
            <p className="mt-6 text-sm text-white/50">Various durations, on-site or remote</p>
          </div>
        </section>

        <Section>
          <Eyebrow>What we cover</Eyebrow>
          <div className="grid gap-10 md:grid-cols-2">
            {modules.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-5">
                <h2 className="text-xl text-gray-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl leading-relaxed text-gray-600">
            The shape moves with the team. A group that already ships AI features spends more time on
            evaluation and cost. A group starting out spends most of it on retrieval. We agree the
            balance and the length beforehand, and your team keeps the materials.
          </p>
        </Section>

        <Section tone="ink">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight md:text-5xl">Book a workshop.</h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Tell us the team size and where they are starting from, and we will send a shape for
              the day.
            </p>
            <div className="mt-10">
              <CTA variant="light" label="Get in touch" />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
