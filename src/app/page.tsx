import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section, { Eyebrow } from "../components/Section";
import CTA from "../components/CTA";
import { offers } from "../content/offers";
import { faq } from "../content/faq";
import { talks } from "../content/talks";
import { assetPath } from "../utils/assetPath";

const numbers = [
  {
    label: "What it costs to run",
    body: "Not cost per token. Cost per resolved ticket, per generated report, per whatever your business already counts. Then the same figure at ten times the traffic, before you find out the hard way.",
  },
  {
    label: "How often someone has to check it",
    body: "The share of outputs that go straight through. This is the number that decides whether the feature saved anyone time, and it is the one most teams cannot answer.",
  },
  {
    label: "How it impacts your revenue",
    body: "The reason the feature exists. More conversions, faster resolution, fewer people needed per unit of work. We agree which line is supposed to move before we start, and measure it where your finance team already looks.",
  },
];


export default function Home() {
  const interrupt = talks[0];

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main>
        <section className="bg-primary px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-4xl text-[2rem] leading-[1.15] sm:text-4xl md:text-6xl md:leading-[1.1]">
              AI Engineering: from jargon to business impact.
            </h1>
            <div className="mt-10">
              <CTA variant="light" />
            </div>
          </div>
        </section>


        <Section tone="alt">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
            We build AI that pays for itself.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {numbers.map((item) => (
              <div key={item.label} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg text-gray-900">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="services">
          <h2 className="text-3xl leading-tight md:text-4xl">Engagement</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-gray-200 md:grid-cols-2">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className={`bg-white p-8 ${
                  index === offers.length - 1 && offers.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <p className="font-mono text-xs font-medium tracking-wider text-gray-600">{offer.number}</p>
                <h3 className="mt-3 text-2xl text-gray-900">{offer.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{offer.duration}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{offer.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              What each one includes
            </Link>
          </div>
        </Section>

        <Section>
          <Eyebrow>Recent</Eyebrow>
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl leading-tight md:text-4xl">{interrupt.title}</h2>
              <p className="mt-4 text-sm text-gray-600">
                {interrupt.venue}, {interrupt.location}, {interrupt.year}
              </p>
              <p className="mt-6 leading-relaxed text-gray-600">{interrupt.description}</p>
              <div className="mt-8 flex flex-wrap gap-6">
                <Link
                  href="/speaking"
                  className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  All talks
                </Link>
              </div>
            </div>
            <div className="aspect-video w-full max-w-full overflow-hidden rounded-lg bg-primary">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${interrupt.videoId}`}
                title={interrupt.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section>

        <Section tone="alt" id="about">
          <Eyebrow>Who you work with</Eyebrow>
          <div className="grid gap-10 md:grid-cols-[160px_1fr] md:items-start">
            <Image
              src={assetPath("senthil.jpg")}
              alt="Senthil Velu Sundaram"
              width={160}
              height={160}
              className="h-40 w-40 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl leading-tight md:text-4xl">Senthil Velu Sundaram</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-gray-600">
                Twenty years of building and running software. A decade at ThoughtWorks, then
                fintech at Simpl, and currently consulting on AI/ML for a US HR technology
                platform. He spoke at LangChain Interrupt in San Francisco this year on evaluation
                and agent architecture.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link
                  href="/about"
                  className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  About the practice
                </Link>
                <a
                  href="https://www.linkedin.com/in/siliconsenthil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="faq">
          <Eyebrow>Questions</Eyebrow>
          <div className="grid gap-10 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.question} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg text-gray-900">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="ink" id="contact">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight md:text-5xl">Start with the audit.</h2>
            <p className="mt-6 leading-relaxed text-white/60">
              A fixed fee and a written answer to which number is actually holding you back. Nothing obliges you to continue after it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTA variant="light" />
              <a
                href="mailto:hello@cincotree.com"
                className="inline-block rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                hello@cincotree.com
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
