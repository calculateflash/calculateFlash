import type { Metadata } from "next";
import FlamesCalculatorPage from "./flames";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.flamesCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.flamesCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/flamesCalculator`,
  },
};

export default function Page() {
  return <FlamesCalculatorPage />;
}
