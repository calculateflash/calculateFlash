import type { Metadata } from "next";
import CalorieIntakeCalculatorPage from "./calorie";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.calorieIntakeCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.calorieIntakeCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/calorieIntakeCalculator`,
  },
};

export default function Page() {
  return <CalorieIntakeCalculatorPage />;
}
