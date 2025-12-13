import type { Metadata } from "next";
import BodyFatCalculatorPage from "./bodyFat";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.bodyFatCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.bodyFatCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/bodyFatCalculator`,
  },
};

export default function Page() {
  return <BodyFatCalculatorPage />;
}
