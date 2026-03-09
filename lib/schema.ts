import { AGGREGATE_RATING, SITE_URL } from "./constants";
import { FAQ_ITEMS } from "./constants";

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Medha Dental Care",
  image: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/images/image_copy.svg`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+9182341721",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "LIG-B-283, Anupuram Colony",
    addressLocality: "A.S. Rao Nagar, Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500062",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4725,
    longitude: 78.57,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  sameAs: ["https://www.instagram.com/medhadentalcare_hyd"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING.value,
    reviewCount: AGGREGATE_RATING.count,
  },
};

export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}
