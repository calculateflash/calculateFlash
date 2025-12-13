import { calculatorSchemaMap as financeSchemaMap } from "../app/financial/lib/financeCalculatorSchema";
import { healthCalculatorSchemaMap } from "../app/health/lib/healthCalculatorSchema";
import { utilityCalculatorSchemaMap } from "../app/utility/lib/utilityCalculatorSchema";

type Props = {
  calculatorKey: string;
  pageTitle: string;
  pageUrl: string;
  breadcrumbs?: { name: string; url: string }[];
};

export default function StructuredData({
  calculatorKey,
  pageTitle,
  pageUrl,
  breadcrumbs,
}: Props) {
  // 🔥 Resolve schema from correct section
  const data =
    financeSchemaMap[calculatorKey] ||
    healthCalculatorSchemaMap[calculatorKey] ||
    utilityCalculatorSchemaMap[calculatorKey];

  if (!data) return null;
  const schemas: any[] = [];
  /* -------------------- WebPage Schema -------------------- */
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: pageUrl,
    description: pageTitle,
  });

  /* -------------------- Breadcrumb Schema -------------------- */
  if (breadcrumbs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  /* -------------------- FAQ Schema -------------------- */
  if (data.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  /* -------------------- HowTo Schema -------------------- */
  if (data.howTo) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: data.howTo.name,
      step: data.howTo.steps.map((s) => ({
        "@type": "HowToStep",
        text: s.text,
      })),
    });
  }

  /* -------------------- SoftwareApplication Schema -------------------- */
  schemas.push({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: pageTitle,
    operatingSystem: "All",
    applicationCategory: "CalculatorApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  });

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
