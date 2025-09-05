import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src="cincotree-logo.png"
                alt="Cincotree" 
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-[#29496a]/5 to-[#29496a]/10 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              No nonsense <span className="text-primary">product building</span>
            </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We help indie founders and early-stage startups launch products quickly with 
            full-stack development and AI expertise. From Dubai, serving the world.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:hello@cincotree.com" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Send us an email
            </a>
            <a 
              href="https://cal.com/siliconsenthil" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* ...existing code... */}

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why indie founders choose us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning fast delivery</h3>
              <p className="text-gray-600">
                We understand startup urgency. High-quality delivery with unprecedented speed 
                to help you capture market opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep technical expertise</h3>
              <p className="text-gray-600">
                Product-focused engineering with deep technical knowledge. 
                We architect solutions that scale from MVP to millions of users.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global reach</h3>
              <p className="text-gray-600">
                Based in Dubai, serving founders worldwide. 
                We understand diverse markets and build products for global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Meet the team
          </h2>        
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#29496a]/60 to-[#29496a] rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="senthil.jpg"
                  alt="Senthil Velu Sundaram"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senthil Velu Sundaram</h3>
              <p className="text-gray-600 mb-4">Hands-on technical leader &amp; full-stack architect</p>
              <a 
                href="https://www.linkedin.com/in/siliconsenthil/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#29496a]/60 to-[#29496a] rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="abhinaya.jpg"
                  alt="Abhinaya Sukumar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Abhinaya Sukumar</h3>
              <p className="text-gray-600 mb-4">Problem solver | Product builder | AI tinkerer</p>
              <a 
                href="https://www.linkedin.com/in/abhinayasukumar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.404C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to launch your product?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss how we can help you move from idea to launch at lightning speed.
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
      </main>
    </div>
  );
}