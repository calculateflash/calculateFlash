import type { Metadata } from "next";
import DateDifferenceCalculatorPage from "./dateDifference";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.dateDifferenceCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.dateDifferenceCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/dateDifferenceCalculator`,
  },
};

export default function Page() {
  return <DateDifferenceCalculatorPage />;
}
