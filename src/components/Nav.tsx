"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../utils/assetPath";

const links = [
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export default function Nav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    current === href
      ? "text-[15px] font-semibold text-primary underline decoration-primary decoration-2 underline-offset-8"
      : "text-[15px] font-medium text-gray-600 transition-colors hover:text-gray-900";

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src={assetPath("cincotree-logo.png")}
            alt="Cincotree"
            width={64}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md border border-primary px-5 py-2.5 text-[15px] font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-primary transition-colors hover:bg-gray-100 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-gray-200 md:hidden">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                current === link.href
                  ? "rounded-md bg-gray-50 px-3 py-3 text-base font-semibold text-primary"
                  : "rounded-md px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-primary px-3 py-3 text-center text-base font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
