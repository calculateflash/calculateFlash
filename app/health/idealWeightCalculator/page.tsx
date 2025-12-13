import type { Metadata } from "next";
import IdealWeightCalculatorPage from "./ideal";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.idealWeightCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.idealWeightCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/idealWeightCalculator`,
  },
};

export default function Page() {
  return <IdealWeightCalculatorPage />;
}
