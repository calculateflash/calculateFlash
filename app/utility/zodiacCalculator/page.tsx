import type { Metadata } from "next";
import ZodiacCalculatorPage from "./zodiac";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.zodiacCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.zodiacCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/zodiacCalculator`,
  },
};

export default function Page() {
  return <ZodiacCalculatorPage />;
}
