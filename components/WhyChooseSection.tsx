import Image from "next/image";
import { CLINIC } from "@/lib/constants";

const WHY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLLshKenPGH6Zh3iD1gb1pgv04MO1LMtzxlhlL5FFMx1al5hdqUdpM4J9VFjXUgF7VpwwFZD74VSUxw3DCusroYFcMkbLjQcExVRIeqyc9ksGyzMy5wM3lh8hkac-xBIleQeYK8i2lkRZHrTIKwiFKNI12lU3EHHvPMUKgQHbtT2qscSIFLPka_OxQzyoZG-9IoBfJnCRnIzjChAPBWWVBhbOwnm6htyC4cvXM_m_i1AC3LpFcNq1xVyLsj9A-uTUxvzL_fPDA3kAl";

const POINTS = [
  {
    icon: "stethoscope",
    title: "Experienced Doctors",
    description:
      "Our team consists of professionally trained specialists with over 15 years of clinical excellence.",
  },
  {
    icon: "biotech",
    title: "Modern Equipment",
    description:
      "Utilizing 3D Imaging, Laser Dentistry, and AI-assisted diagnostics for pinpoint accuracy.",
  },
  {
    icon: "sentiment_satisfied",
    title: "Patient Comfort First",
    description:
      "Painless treatment options and a relaxing atmosphere to ease your dental anxiety.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      className="bg-slate-50 py-24"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="flex-1">
            <h2
              id="why-heading"
              className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl font-display"
            >
              Why Choose {CLINIC.name}
            </h2>
            <div className="space-y-8">
              {POINTS.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div
                    className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-soft-ui"
                    aria-hidden
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 font-display">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={WHY_IMAGE}
                alt="Doctor explaining a procedure to a patient at Medha Dental Care, AS Rao Nagar"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden rounded-xl bg-primary p-8 text-white shadow-xl md:block"
              aria-hidden
            >
              <p className="text-3xl font-bold">6,000+</p>
              <p className="text-sm opacity-90">Happy Smiles Restored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
