import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../../utils/assetPath";

interface Presentation {
  id: string
  title: string
  description: string
  path: string
}

const presentations: Presentation[] = [
  {
    id: 'agents-industrial-swe',
    title: 'AI Agents: Industrial Software Engineering',
    description: 'Software Engineering Best Practices for AI Agents - From Hacking to Engineering Excellence',
    path: '/presentations/agents-industrial-swe'
  }
]

export default function PresentationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={assetPath("cincotree-logo.png")}
                  alt="Cincotree"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
              <Link href="/courses" className="text-gray-700 hover:text-primary font-medium transition-colors">Courses</Link>
              <Link href="/presentations" className="text-primary font-medium transition-colors">Presentations</Link>
              <Link href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#29496a]/5 to-[#29496a]/10 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="text-primary">presentations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Interactive slide presentations and talks covering AI, software engineering, and technical best practices.
            </p>
          </div>
        </section>

        {/* Presentations Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {presentations.map((presentation) => (
                <div
                  key={presentation.id}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {presentation.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {presentation.description}
                    </p>
                    <Link
                      href={presentation.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
                    >
                      View Presentation
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in having us present?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We're available for technical talks, workshops, and presentations at conferences and meetups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/cincotree/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact us on LinkedIn
              </a>
              <a
                href="mailto:hello@cincotree.com"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Cincotree</h3>
            <p className="text-gray-400">No nonsense product building</p>
          </div>
          <div className="pt-8">
            <p className="text-gray-400">
              © 2024 Cincotree.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}