import type { Metadata } from "next";
import WaterIntakeCalculatorPage from "./water";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.waterIntakeCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.waterIntakeCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/waterIntakeCalculator`,
  },
};

export default function Page() {
  return <WaterIntakeCalculatorPage />;
}
