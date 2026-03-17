"use client";

import Image from "next/image";
import { AGGREGATE_RATING, CLINIC } from "@/lib/constants";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHzuUeGWiAsnj1q4wrQvS1Nnhkg7uRigIYV2TTACX8eJU72EbY4SSK9jppIgHJTZlaXmDh50thrsdMKQxBU7aSCQ6PrZATiiJyONH9Z01opx5YmlllZNBxPNsNmQXyK6CfB5_yeKJ2U3AxHlc8Cen8vQWNTcqWQPkHtI0QlJ1FoCRVL0CPylSGTt3cyVPU8mKryKACQNNrGE8Ug9nSlhl5o1jeyAzzmj3d0_m9efRppkiUIfqsHblPRj5MiojVKVfup8BaJnDQBIDr";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2
            id="contact-heading"
            className="mb-8 text-4xl font-bold text-slate-900 font-display"
          >
            Visit Our Hyderabad Center
          </h2>
          <div className="mb-8 h-[400px] overflow-hidden rounded-2xl border border-slate-200 shadow-soft-ui">
            <Image
              src={MAP_IMAGE}
              alt="Map showing Medha Dental Care location in A.S. Rao Nagar, Secunderabad, Hyderabad"
              width={800}
              height={400}
              className="h-full w-full object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 font-bold text-slate-900">Location</h3>
              <address className="text-sm not-italic text-slate-600">
                {CLINIC.address}
              </address>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-slate-900">Hours</h3>
              <p className="text-sm text-slate-600">{CLINIC.hours}</p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="mb-2 font-bold text-slate-900">Phone</h3>
              <p className="text-sm text-slate-600">
                <a
                  href={`tel:${CLINIC.phonePrimaryRaw}`}
                  className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {CLINIC.phonePrimary}
                </a>
              </p>
            </div>
          </div>
          <a
            href={CLINIC.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-6 py-3 font-bold text-white shadow-soft-ui transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="View our reviews on Google (5.0 stars)"
          >
            <span className="material-symbols-outlined text-gold text-xl" aria-hidden>
              star
            </span>
            <span>Reviews on Google ({AGGREGATE_RATING.value}★)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
