import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "The best dental experience I've ever had. The team explained everything so clearly, and the clinic feels like a spa!",
    name: "Priya Kapur",
    role: "Hyderabad Resident",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6H56Af-8jEPGcrhhZQTZMFwhg9MLWo1KKBMHdlgu_vCyyNpLtuiV_PuF5A9gZj8PW5Gqz_WbQa3pqYfmhV6zICJWrgDa-v5yMc4AN6V12EyM78Z0aNdbLy6KrfACwaJQQDQQwnywTWVFeopXPsRMNVSEqkLeDb0tZhGF60JUsS1SaNRZ732n1F3mQZMuXmUnCOABl8uUYemc7JGcHhh5E6YXGlKuwXZ1c-LJ0GH5tzEH3q3-NQYzmk1-6RKkCWp0tePyfU9hRotIl",
  },
  {
    quote:
      "Excellent technology and painless treatment. I had my dental implants done here, and the results are amazing.",
    name: "Rahul Verma",
    role: "Business Owner",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-90WbiXZA7nABYCLzBbmt3IiBE0SeMQSvrgHbUnbLHyPU0ebxqo_NjJyq6hzFTHYjQjYjQJ-0uePLkER_r0_5K__GST0gDBve0JL1INC-sbhzj5kB0fBiowtKp7oeV4pp3WDlg0PD5PqBkYNiWtZaFbhjKeiedRZjrsuvA279vZewFxxEtnjzcZPaaQdALT27Oy87N6Z6XSEx32u8PwSCFwIpNKmzdH6wp_4zAjdcRZsg5NzN-F0FqUu1T8k-jmyrjf1J9o2hd46x",
  },
  {
    quote:
      "Medha Dental Care is our family's go-to clinic. They are so gentle with kids and the staff is incredibly professional.",
    name: "Sneha Reddy",
    role: "Software Professional",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSwUgz-fic-Y3ExsltzcQahVFRBWCXd4G7GDD9UoijURwvzy5RF3LMB4zm98_WfTFr7JdZGYeSA3KkceK5DNlh-KbZXf-jSUsDCBqY9qjK2qWp1aHyKZ6HtTkerCn8JonJK_01TBwWzkJSuLF3-DtLSBr0kZn3pJ9gX8lhjch8M91ApeQTItzP30HR-Pe6Y4NGn7Co4wo1X3D2dT3Sqm0RcF1YS2h4L3kpY7feEk8U7bQ6SrFqUuDOSfFtJchpqimTO1zfx_PqZM1-",
  },
];

function StarRating() {
  return (
    <div className="mb-4 flex text-gold" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="material-symbols-outlined">
          star
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-primary/5 py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="testimonials-heading"
          className="mb-16 text-center text-4xl font-bold text-slate-900 md:text-5xl font-display"
        >
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-soft-ui"
            >
              <StarRating />
              <p className="mb-6 italic text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative size-12 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src={t.avatar}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="not-italic font-bold text-slate-900">
                    {t.name}
                  </cite>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
