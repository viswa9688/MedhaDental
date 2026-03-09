"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className="sticky top-[40px] z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md"
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label="Medha Dental Care - Home"
        >
          <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-3xl" aria-hidden>
              dentistry
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-none text-slate-900 font-display">
              Medha
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-sage font-bold">
              Dental Care
            </p>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden size-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
          <Link
            href="#contact"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-soft-ui transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur px-4 py-4"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-semibold text-slate-700 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
