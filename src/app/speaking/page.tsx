import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import CTA from "../../components/CTA";
import { talks } from "../../content/talks";

export const metadata: Metadata = {
  title: "Speaking and workshops",
  description:
    "Conference talks, meetup sessions and on-site engineering workshops on agent architecture, evaluation and production AI.",
};

const modules = [
  {
    title: "From deterministic to stochastic",
    body: "The mental shift that everything else rests on. A function you can unit test becomes a system that is right most of the time, and what that changes about how you design, test and ship.",
  },
  {
    title: "LLMs and embeddings",
    body: "How the models actually behave: context, tokens, temperature, structured output, and what embeddings represent. Enough theory to reason about failures, not enough to write a paper.",
  },
  {
    title: "Retrieval and RAG",
    body: "Chunking, indexing and hybrid search built by hand rather than described. Where naive semantic search quietly fails, and how to tell that it has.",
  },
  {
    title: "Building agents",
    body: "Tools, planning and control flow. When an agent is the right answer, when a plain call is, and why the architecture that looks correct on a whiteboard often is not.",
  },
  {
    title: "Evals, tracing and tooling",
    body: "The delivery process around a stochastic system. Building a golden set, scoring what matters, wiring it into CI, and tracing a production answer back to the call that produced it.",
  },
  {
    title: "Performance and cost",
    body: "What a feature costs per request and at ten times the traffic. Latency budgets, caching, model routing, and the monitoring that tells you when either drifts.",
  },
];

export default function Speaking() {
  return (
    <div className="min-h-screen bg-white">
      <Nav current="/speaking" />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              Speaking and workshops
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              Conferences, meetups and sessions run inside engineering teams, on agent
              architecture, evaluation, and what production asks of both.
            </p>
          </div>
        </section>

        {talks.map((talk, index) => (
          <Section key={talk.id} tone={index % 2 === 1 ? "alt" : "paper"}>
            <article className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                  {talk.venue} &middot; {talk.location} &middot; {talk.year}
                </p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">{talk.title}</h2>
                <p className="mt-6 leading-relaxed text-gray-600">{talk.description}</p>
                <div className="mt-8 flex flex-wrap gap-6">
                  {talk.videoId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      Watch the talk
                    </a>
                  )}
                  {talk.deckPath && (
                    <a
                      href={talk.deckPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      Open the slides
                    </a>
                  )}
                  {talk.writeupUrl && (
                    <a
                      href={talk.writeupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      {talk.writeupLabel}
                    </a>
                  )}
                </div>
              </div>
              {talk.videoId && (
                <div className="aspect-video w-full max-w-full overflow-hidden rounded-lg bg-primary">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${talk.videoId}`}
                    title={talk.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </article>
          </Section>
        ))}

        <Section tone="alt" id="workshops">
          <h2 className="text-3xl leading-tight md:text-4xl">Workshops</h2>
          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-gray-600">
            <p>
              We turn backend and fullstack engineers into AI engineers. Most of them have spent
              a career making systems behave the same way every time. AI asks them to build
              systems that are right most of the time, and to prove it. That shift is the whole
              workshop.
            </p>
            <p>
              Every session is hands on. Your engineers build one project with us, start to
              finish, and pick up the concepts through the thing they are building rather than
              ahead of it. They keep the project and the materials.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl leading-relaxed text-gray-600">
            The length and the balance move with the team. A group already shipping AI features
            spends more of it on evals, cost and monitoring. A group starting out spends more on
            retrieval and the shift in thinking. We agree the shape beforehand. On-site or remote.
          </p>
        </Section>

        <Section tone="ink">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight md:text-5xl">
              Running an event, or training a team?
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Tell us the audience, or the team size and where they are starting from, and we will
              come back with a shape for the session.
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
