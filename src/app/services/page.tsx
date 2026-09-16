import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section, { Eyebrow } from "../../components/Section";
import CTA from "../../components/CTA";
import { offers } from "../../content/offers";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Audit, evals, build and embedded engagements for teams running AI in production. Fixed time boxes, agreed targets.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Nav current="/services" />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Services</h1>
          </div>
        </section>

        <Section>
          <div className="space-y-px overflow-hidden rounded-lg bg-gray-200">
            {offers.map((offer) => (
              <article key={offer.id} className="bg-white p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[1fr_320px] md:gap-14">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs font-medium tracking-wider text-gray-600">
                        {offer.number}
                      </span>
                      <h2 className="text-3xl text-gray-900">{offer.name}</h2>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">{offer.duration}</p>
                    <p className="mt-6 max-w-xl leading-relaxed text-gray-600">{offer.summary}</p>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-900">{offer.moves}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                      You get
                    </p>
                    <ul className="mt-5 space-y-3">
                      {offer.deliverables.map((item) => (
                        <li
                          key={item}
                          className="border-t border-gray-200 pt-3 text-sm leading-relaxed text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="ink">
          <div className="max-w-2xl">
            <Eyebrow>
              <span className="text-white/40">Not sure which</span>
            </Eyebrow>
            <h2 className="text-3xl leading-tight md:text-5xl">Start with the audit.</h2>
            <p className="mt-6 leading-relaxed text-white/60">
              A fixed fee to find out which of the three is actually holding you back, before you
              spend a quarter on the wrong one.
            </p>
            <div className="mt-10">
              <CTA variant="light"  />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
