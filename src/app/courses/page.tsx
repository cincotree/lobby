import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../../utils/assetPath";

export default function Courses() {
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
              <Link href="/#home" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
              <Link href="/courses" className="text-primary font-medium transition-colors">Courses</Link>
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
              We offer <span className="text-primary">workshops &amp; training</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Hands-on technical workshops designed for indie founders and developers who want to build better products with cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Semantic Search with RAG
                </h3>
                <p className="text-gray-600 mb-6">
                  Master Elasticsearch fundamentals and architecture, then advance to implementing Retrieval-Augmented Generation (RAG) for semantic search capabilities. Learn to develop solutions that leverage vector embeddings and contextual understanding for intelligent information retrieval.
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Hands-on Project
                  </span>
                </div>
                <a 
                  href="https://github.com/Abhinaya/elasticsearch-demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                  </svg>
                  Demo Course
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to level up your skills?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s discuss how our workshops can help you build better products with the latest technology.
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
  );
}