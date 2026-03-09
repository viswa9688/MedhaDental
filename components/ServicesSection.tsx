import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import type { ServiceAccent } from "@/lib/constants";
import { ServiceIcon } from "@/components/ServiceIcons";

const accentClasses: Record<ServiceAccent, string> = {
  primary: "bg-primary/10 text-primary",
  sage: "bg-sage/10 text-sage",
  gold: "bg-gold/10 text-gold",
};

const linkClasses: Record<ServiceAccent, string> = {
  primary: "text-primary",
  sage: "text-sage",
  gold: "text-gold",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-background py-24"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2
            id="services-heading"
            className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl font-display"
          >
            Our Specialized Services
          </h2>
          <div
            className="mx-auto h-1 w-24 rounded-full bg-gold"
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="soft-ui-card rounded-xl p-8 shadow-soft-ui"
            >
              <div
                className={`mb-6 flex size-16 items-center justify-center rounded-2xl ${accentClasses[service.accent]} ${service.id === "implants" ? "opacity-80" : ""} ${service.id === "preventive" ? "opacity-70" : ""}`}
                aria-hidden
              >
                <ServiceIcon serviceId={service.id} accent={service.accent} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900 font-display">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Link
                href="#contact"
                className={`inline-flex items-center gap-2 font-bold ${linkClasses[service.accent]} group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded`}
              >
                Learn More
                <span
                  className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  arrow_forward
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
