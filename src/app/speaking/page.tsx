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
    body: "The big shift. A function you can unit test becomes a system that is right most of the time. That changes how you design, test and ship.",
  },
  {
    title: "LLMs and embeddings",
    body: "How the models actually behave. Context, tokens, temperature, structured output, and what an embedding really is. Enough theory to debug things, no more.",
  },
  {
    title: "Retrieval and RAG",
    body: "Chunking, indexing and hybrid search, built by hand. Where simple semantic search falls over, and how you would notice.",
  },
  {
    title: "Building agents",
    body: "Tools, planning and control flow. When you need an agent, when one plain call will do, and why the neat diagram rarely survives contact with users.",
  },
  {
    title: "Evals, tracing and tooling",
    body: "How you ship and watch a system like this. Build a golden set, score what matters, run it in CI, and trace any answer back to the call behind it.",
  },
  {
    title: "Performance and cost",
    body: "What a feature costs per request, and at ten times the traffic. Latency budgets, caching, model routing, and how to spot when either slips.",
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
          <p className="mt-8 leading-relaxed text-gray-600">
            We help backend and fullstack engineers become AI engineers. They have spent years
            building systems that behave the same way every time. AI does not work like that, and
            it takes some getting used to. So we teach it by building. Your team works through one
            project with us, picks up the ideas as they go, and keeps everything at the end.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 leading-relaxed text-gray-600">
            We agree the length and the mix before we start. Teams already shipping AI spend more
            of it on evals, cost and monitoring. Teams starting out spend more on retrieval and on
            the change in thinking. On-site or remote, whichever suits you.
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
