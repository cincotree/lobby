import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section, { Eyebrow } from "../../components/Section";
import CTA from "../../components/CTA";
import { talks } from "../../content/talks";

export const metadata: Metadata = {
  title: "Speaking and workshops",
  description:
    "Conference talks, meetup sessions and on-site engineering workshops on agent architecture, evaluation and production AI.",
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
          <Eyebrow>Workshops</Eyebrow>
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
            Time with your engineers.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-gray-600">
            Hands on keyboards, in your codebase where we can. Various durations, on-site or
            remote. Gets a whole team to the same baseline.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {modules.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-5">
                <h3 className="text-xl text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl leading-relaxed text-gray-600">
            The shape moves with the team. A group that already ships AI features spends more time
            on evaluation and cost. A group starting out spends most of it on retrieval. We agree
            the balance and the length beforehand, and your team keeps the materials.
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
