import type { Metadata } from "next";
import SGPA_CGPACalculatorPage from "./sgpa";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.sgpaCgpaCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.sgpaCgpaCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/sgpaCgpaCalculator`,
  },
};

export default function Page() {
  return <SGPA_CGPACalculatorPage />;
}
