import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import CTA from "../../components/CTA";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with Cincotree, or send an email.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Nav current="/contact" />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              Tell us what is stuck.
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              Thirty minutes, technical, no deck. If we are not the right people for the problem we
              will say so on the call and point you somewhere better.
            </p>
          </div>
        </section>

        <Section>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl text-gray-900">Book a call</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Pick a time directly. Mornings and evenings Gulf time usually cover US and European
                hours.
              </p>
              <div className="mt-7">
                <CTA />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-gray-900">Or write</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                A paragraph about the system and what it is doing wrong is enough to start.
              </p>
              <a
                href="mailto:hello@cincotree.com"
                className="mt-7 inline-block text-lg text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                hello@cincotree.com
              </a>
              <p className="mt-10 text-sm leading-relaxed text-gray-600">
                Cincotree
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
