import type { Metadata } from "next";
import LoveCompatibilityCalculatorPage from "./love";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.loveCompatibilityCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.loveCompatibilityCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/loveCompatibilityCalculator`,
  },
};

export default function Page() {
  return <LoveCompatibilityCalculatorPage />;
}
