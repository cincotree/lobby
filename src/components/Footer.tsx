import Link from "next/link";

const columns = [
  {
    heading: "Practice",
    links: [
      { href: "/services", label: "Services" },
      { href: "/speaking/#workshops", label: "Workshops" },
    ],
  },
  {
    heading: "Thinking",
    links: [
      { href: "/speaking", label: "Speaking" },
      { href: "/about", label: "About" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl">Cincotree</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              An AI engineering practice. Agents, retrieval and evaluation for teams that have to
              run them on Monday.
            </p>
            <a
              href="mailto:hello@cincotree.com"
              className="mt-5 inline-block text-sm text-white/80 underline underline-offset-4 transition-colors hover:text-white"
            >
              hello@cincotree.com
            </a>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-white/40">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Cincotree. Dubai, United Arab Emirates.</p>
          <a
            href="https://www.linkedin.com/company/cincotree/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
