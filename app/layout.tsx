import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { dentistSchema, getFAQPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title =
  "Medha Dental Care | Best Dentist in AS Rao Nagar Hyderabad - Root Canal, Implants & More";
const description =
  "Experience painless dental treatments at Medha Dental Care in A.S. Rao Nagar, Hyderabad. Expert root canal, dental implants, teeth whitening & more. Book now!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Medha Dental Care",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Medha Dental Care - Dental clinic interior, AS Rao Nagar, Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqSchema = getFAQPageSchema();
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentistSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-slate-900 antialiased">
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
