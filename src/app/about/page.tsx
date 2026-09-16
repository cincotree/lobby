import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section, { Eyebrow } from "../../components/Section";
import CTA from "../../components/CTA";
import { assetPath } from "../../utils/assetPath";

export const metadata: Metadata = {
  title: "About",
  description:
    "An AI engineering practice based in Dubai. Twenty years of production systems, the last few of them AI.",
};

const people = [
  {
    name: "Senthil Velu Sundaram",
    role: "Principal",
    image: "senthil.jpg",
    linkedin: "https://www.linkedin.com/in/siliconsenthil/",
    bio: [
      "Two decades of building software and the businesses around it. A SaaS founder, a VP of Engineering, and still someone who writes code most days. He has put AI into production across several systems, most recently at Rippling.",
      "He works at both ends of the problem: strategy with a CxO in one meeting, pairing with a new engineer on a gnarly production bug in the next. Twenty years across India, the UK, the Bay Area and the UAE have given him a sharp eye for the techno-business patterns that sink products long before anyone admits it.",
      "He speaks at technical events, cares more about UX than most engineers do, and spends a good part of his time making other engineers better.",
    ],
  },
  {
    name: "Abhinaya Sukumar",
    role: "Engineering",
    image: "abhinaya.jpg",
    linkedin: "https://www.linkedin.com/in/abhinayasukumar/",
    bio: [
      "A founder before Cincotree, and a deep technical builder throughout. She has worked as an engineer in India, the UK and Silicon Valley: Clojure on the backend, React teams led, and a habit of walking into an undocumented legacy system and coming out with a map of it.",
      "She leads Curetally, the hospital management software Cincotree builds for independent clinics in India, where the hard part is never the technology but the workflow a busy pharmacist will actually use. She also runs the workshop programme.",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Nav current="/about" />

      <main>
        <section className="bg-primary px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              Small team, mission driven.
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              We are based in Dubai and work with teams across US, European and Gulf hours. The
              people you meet on the call are the people who write the code.
            </p>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl space-y-6 leading-relaxed text-gray-600">
            <p>
              Cincotree exists because a lot of AI work is being done by people who arrived at
              software eighteen months ago. That shows up later, in systems nobody can operate,
              costs nobody modelled, and failures nobody can explain to a customer.
            </p>
            <p>
              We came the other way around. Long enough in production engineering to have been
              paged at 3am for our own mistakes, and to have learned what makes a system safe to
              hand to somebody else. AI changes what the components do. It does not change what
              running something in front of real users demands.
            </p>
            <p>
              We take a small number of engagements at a time, and we do not subcontract them.
            </p>
          </div>
        </Section>

        <Section tone="alt">
          <Eyebrow>The team</Eyebrow>
          <div className="mt-4 space-y-16">
            {people.map((person) => (
              <div key={person.name} className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12">
                <Image
                  src={assetPath(person.image)}
                  alt={person.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-3xl leading-tight">{person.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">{person.role}</p>
                  <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-gray-600">
                    {person.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm font-medium text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="ink">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight md:text-5xl">Tell us what is stuck.</h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Thirty minutes, technical, no deck. If we are not the right people we will say so on
              the call.
            </p>
            <div className="mt-10">
              <CTA variant="light" />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
