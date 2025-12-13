import { ALL_CALCULATORS } from "@/data/allCalculators";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const now = new Date();

  return [
    // Home
    {
      url: baseUrl,
      lastModified: now,
    },

    // Section pages
    {
      url: `${baseUrl}/financial`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/health`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/utility`,
      lastModified: now,
    },

    // Calculator pages
    ...ALL_CALCULATORS.map((calc) => ({
      url: `${baseUrl}/${calc.section}/${calc.slug}`,
      lastModified: now,
    })),
  ];
}
