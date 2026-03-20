import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
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
  "Experience painless dental treatments at Medha Dental Care in A.S. Rao Nagar, Hyderabad. Expert root canal, dental implants, teeth whitening & more. Call now!";

const LOGO_PATH = "/images/logo.svg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: LOGO_PATH, sizes: "any", type: "image/svg+xml" },
      { url: LOGO_PATH, sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [{ url: LOGO_PATH, sizes: "180x180", type: "image/svg+xml" }],
  },
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
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','943502731925868');fbq('track','PageView');",
          }}
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=943502731925868&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
