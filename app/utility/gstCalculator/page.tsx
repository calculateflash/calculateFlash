import type { Metadata } from "next";
import GSTCalculatorPage from "./gst";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.gstCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.gstCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/gstCalculator`,
  },
};

export default function Page() {
  return <GSTCalculatorPage />;
}
