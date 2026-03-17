export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medhadentalcare.com";

export const CLINIC = {
  name: "Medha Dental Care",
  tagline: "A.S. Rao Nagar, Hyderabad",
  address: "LIG-B-283, Anupuram Colony, Post Office Road, A.S. Rao Nagar, Secunderabad, Hyderabad, Telangana 500062",
  phonePrimary: "+91 9491944467",
  phoneSecondary: "+91 9491944467",
  phonePrimaryRaw: "+919491944467",
  hours: "Mon–Sat: 10:00 AM – 2:00 PM and 5:00 PM - 9:00 PM | Sunday: 10:00 AM - 1:00 PM",
  whatsAppUrl: "https://wa.me/919491944467",
  instagramUrl: "https://www.instagram.com/medhadentalcare_hyd",
  googleReviewsUrl: "https://share.google/u2kkvuTK0JqyJQTQv",
} as const;

export const AGGREGATE_RATING = {
  value: "5.0",
  count: "45",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
] as const;

export type ServiceAccent = "primary" | "sage" | "gold";

export const SERVICES = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description:
      "Precise, painless root canal therapy to save infected teeth, relieve pain, and preserve your natural smile.",
    icon: "clean_hands",
    accent: "primary" as ServiceAccent,
  },
  {
    id: "laser",
    title: "Laser Dentistry",
    description:
      "Advanced, minimally invasive laser treatments for gum disease, whitening, and soft tissue procedures with faster healing.",
    icon: "auto_fix_high",
    accent: "sage" as ServiceAccent,
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional in-office and take-home whitening for a brighter, confident smile in just one visit.",
    icon: "brightness_6",
    accent: "gold" as ServiceAccent,
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacement using titanium implants and crowns for long-term function and aesthetics.",
    icon: "medical_services",
    accent: "gold" as ServiceAccent,
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Braces, clear aligners (Invisalign-style), and corrective treatments for straighter teeth and proper bite.",
    icon: "straighten",
    accent: "primary" as ServiceAccent,
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Smile makeovers including veneers, bonding, crowns, and full smile design for aesthetic perfection.",
    icon: "face_4",
    accent: "sage" as ServiceAccent,
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly care including check-ups, sealants, fluoride, and early orthodontic guidance.",
    icon: "child_care",
    accent: "primary" as ServiceAccent,
  },
  {
    id: "preventive",
    title: "Preventive Care",
    description:
      "Routine cleanings, exams, digital X-rays, sealants, and education to prevent dental problems.",
    icon: "vaccines",
    accent: "sage" as ServiceAccent,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is the best root canal treatment in AS Rao Nagar?",
    answer:
      "Medha Dental Care in A.S. Rao Nagar offers precise, painless root canal therapy using modern techniques to save infected teeth and preserve your natural smile. Our experienced team ensures comfort and long-lasting results.",
  },
  {
    question: "Where is Medha Dental Care located?",
    answer:
      "We are located at LIG-B-283, Anupuram Colony, Post Office Road, A.S. Rao Nagar, Secunderabad, Hyderabad, Telangana 500062. We are easily accessible from Secunderabad and surrounding areas.",
  },
  {
    question: "What are the clinic hours?",
    answer:
      "Medha Dental Care is open Monday to Saturday from 10:00 AM to 2:00 PM and 5:00 PM to 9:00 PM. On Sundays we are open from 10:00 AM to 1:00 PM. You can call +91 94919 44467 for enquiries or emergencies.",
  },
  {
    question: "Do you offer dental implants in Hyderabad?",
    answer:
      "Yes. We provide permanent, natural-looking dental implants using titanium implants and crowns for long-term function and aesthetics. Book a consultation to discuss your options.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes. Ample parking is available near our clinic in Anupuram Colony, Post Office Road, A.S. Rao Nagar. We recommend arriving a few minutes early during peak hours.",
  },
] as const;
