import type { Metadata } from "next";
import BMRCalculatorPage from "./bmr";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = healthMetaDataMap.bmrCalculator;

export const metadata: Metadata = {
  title: "BMR Calculator – Calculate Basal Metabolic Rate Online",
  description:
    "Free BMR calculator to calculate Basal Metabolic Rate for men and women using the Mifflin–St Jeor formula. Estimate daily calories your body burns at rest.",
  keywords: [
    "bmr calculator",
    "basal metabolic rate calculator",
    "calculate bmr",
    "bmr calculator men women",
    "bmr formula"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/bmr-calculator`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
          calculatorKey="bmr"
          pageTitle="BMR Calculator"
          pageUrl={`${SITE_URL}/health/bmr-calculator`}
          breadcrumbs={[
            { name: "Home", url: SITE_URL },
            { name: "Health Calculators", url: `${SITE_URL}/health` },
            { name: "BMR Calculator", url: `${SITE_URL}/health/bmr-calculator` },
          ]}
        />
        <BMRCalculatorPage />;
    </>
  )
}
