"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="mb-12 text-center text-4xl font-bold text-slate-900 md:text-5xl font-display"
          >
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-soft-ui"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((i) => (i === index ? null : index))
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-slate-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-xl"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {item.question}
                    <span
                      className={`material-symbols-outlined shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      expand_more
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`border-t border-slate-100 px-6 pb-4 pt-2 ${openIndex === index ? "block" : "hidden"}`}
                >
                  <p className="text-slate-600">{item.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
