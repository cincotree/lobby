import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import CTA from "../../components/CTA";
import { talks } from "../../content/talks";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Conference talks and meetup sessions on agent architecture, evaluation and production AI.",
};

export default function Speaking() {
  return (
    <div className="min-h-screen bg-white">
      <Nav current="/speaking" />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Speaking</h1>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              Conferences, meetups and internal sessions on agent architecture, evaluation, and
              what production asks of both.
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

        <Section tone="ink">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight md:text-5xl">
              We speak at conferences and inside companies.
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              If you are running an event, or want a session for your own engineering team, get in
              touch. Team sessions are covered under{" "}
              <Link href="/workshops" className="underline underline-offset-4">
                workshops
              </Link>
              .
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
