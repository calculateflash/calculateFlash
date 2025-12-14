import LandingPage from "./landing"
import type { Metadata } from "next";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
//<meta name="google-site-verification" content="IGS5reZtlr1oqLoN6n0T-4hPkipyAOke8I4kSss_iwk" />
export const metadata: Metadata = {
  title:
    "CalculateFlash – Financial, Health & Utility Calculators Online",
  description:
    "CalculateFlash offers fast, accurate, and easy-to-use calculators for finance, health, and everyday utilities. Use EMI, SIP, BMI, calorie, age, percentage, GST, and many more calculators to make smarter decisions instantly.",
  keywords: [
    "online calculator",
    "financial calculator",
    "health calculator",
    "utility calculator",
    "emi calculator",
    "sip calculator",
    "bmi calculator",
    "age calculator",
    "percentage calculator",
    "gst calculator",
    "investment calculator",
    "free online tools",
    "calculateflash",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "CalculateFlash – Smart Calculators for Finance, Health & Daily Use",
    description:
      "Access powerful calculators for finance, health, and daily utilities. Calculate EMI, SIP, BMI, calories, age, percentages, GST, and more with CalculateFlash.",
    url: SITE_URL,
    siteName: "CalculateFlash",
    type: "website",
  },

  verification: {
    google: "IGS5reZtlr1oqLoN6n0T-4hPkipyAOke8I4kSss_iwk",
  },
};

export default function Page(){
  return (
    <>
    <LandingPage/>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CalculateFlash",
      url: SITE_URL,
      description:
        "CalculateFlash provides fast, accurate online calculators for finance, health, and daily utility needs.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CalculateFlash",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: [],
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Popular Calculators",
      description:
        "Most popular finance, health, and utility calculators available on CalculateFlash.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "EMI Calculator",
          url: `${SITE_URL}/financial/emiCalculator`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SIP Calculator",
          url: `${SITE_URL}/financial/sipCalculator`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BMI Calculator",
          url: `${SITE_URL}/health/bmiCalculator`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Calorie Calculator",
          url: `${SITE_URL}/health/calorieIntakeCalculator`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Age Calculator",
          url: `${SITE_URL}/utility/ageCalculator`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Unit Converter",
          url: `${SITE_URL}/health/unitConverter`,
        },
      ],
    }),
  }}
/>

    </>
  )
}