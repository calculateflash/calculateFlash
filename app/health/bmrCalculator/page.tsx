import type { Metadata } from "next";
import BMRCalculatorPage from "./bmr";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.bmrCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.bmrCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/bmrCalculator`,
  },
};

export default function Page() {
  return <BMRCalculatorPage />;
}
