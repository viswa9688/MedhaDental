import Link from "next/link";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/constants";

const FOOTER_SERVICES = SERVICES.slice(0, 4);

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-slate-900 py-16 text-slate-300"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-xl" aria-hidden>
                  dentistry
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white font-display">
                {CLINIC.name}
              </h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Leading the way in dental excellence in A.S. Rao Nagar, Hyderabad.
              Providing premium oral healthcare with state-of-the-art technology.
            </p>
            <div className="flex gap-4">
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-bold text-white">Services</h3>
            <ul className="space-y-4 text-sm">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-bold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-bold text-white">Contact</h3>
            <p className="mb-2 text-sm">{CLINIC.address}</p>
            <p className="text-sm">
              <a
                href={`tel:${CLINIC.phonePrimaryRaw}`}
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {CLINIC.phonePrimary}
              </a>
            </p>
            <p className="text-sm">{CLINIC.hours}</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>
            © {currentYear} {CLINIC.name}. All Rights Reserved. Designed for
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
