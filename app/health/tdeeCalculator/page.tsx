import type { Metadata } from "next";
import TDEECalculatorPage from "./tdee";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.tdeeCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.tdeeCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/tdeeCalculator`,
  },
};

export default function Page() {
  return <TDEECalculatorPage />;
}
