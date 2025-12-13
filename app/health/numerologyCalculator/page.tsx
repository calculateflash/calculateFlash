import type { Metadata } from "next";
import NumerologyCalculatorPage from "./numerology";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.numerologyCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.numerologyCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/numerologyCalculator`,
  },
};

export default function Page() {
  return <NumerologyCalculatorPage />;
}
