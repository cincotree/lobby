import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../utils/assetPath";

const links = [
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export default function Nav({ current }: { current?: string }) {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={assetPath("cincotree-logo.png")}
            alt="Cincotree"
            width={48}
            height={48}
            className="h-11 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                current === link.href
                  ? "text-sm font-medium text-gray-900"
                  : "text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
