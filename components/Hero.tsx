import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCU6hDHG8RC-UsLXHhd4i3bGxVsaP6w5EQfYW2EuZSrcw21075Se5co3-ZHGNElbZlSsuNCDiZ6KWU0LACCFtFfTAUIrZ7ujZeXRoRXT1V0vDQ9zlPRYmWEGHwvloJXZ6BxIKEpLvJjRI1wGCVKfzCAXhwFTQ_iTE_EdkpP9pBMaCGnEpgd0EDrt6LvQbtX0r3DIUsqTT0V-pHEfpFXzjNgLlPysodrg7jmTQ22gjM-NMrQJuhBghLzEt9hf2eFPLy_LWCUIGXl0xcF";

export function Hero() {
  return (
    <section
      className="relative min-h-[600px] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Modern high-end dental clinic interior at Medha Dental Care, AS Rao Nagar, Hyderabad"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALG0b5u1jZoLW4uI5Y4lCKzICcD1SlKVFmJ7MRqJ/9k="
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20 md:px-6">
        <div className="max-w-2xl">
          <span
            className="inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-sage mb-6"
            aria-hidden
          >
            Premium Dental Care
          </span>
          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl font-display mb-6"
          >
            Your Smile,{" "}
            <span className="italic font-medium text-primary">Our Expertise</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600">
            Experience world-class dental treatments in the heart of Hyderabad.
            We combine sophisticated technology with a gentle, patient-centric
            approach.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-soft-ui hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Schedule a Visit
            </Link>
            <Link
              href="#services"
              className="inline-flex border border-slate-200 bg-white px-8 py-4 rounded-xl font-bold text-lg text-slate-700 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
