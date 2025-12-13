import type { Metadata } from "next";
import StressScoreCalculatorPage from "./stress";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";
const meta = healthMetaDataMap.stressScoreCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.stressScoreCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/stressScoreCalculator`,
  },
};

export default function Page() {
  return <StressScoreCalculatorPage />;
}
