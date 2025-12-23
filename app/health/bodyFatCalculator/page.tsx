import type { Metadata } from "next";
import BodyFatCalculatorPage from "./bodyFat";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const meta = healthMetaDataMap.bodyFatCalculator;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "Body Fat Calculator – Calculate Body Fat Percentage Online",
  description:
    "Free body fat calculator to estimate body fat percentage using the U.S. Navy Method. Calculate body fat for men and women using height, waist, neck, and hip measurements.",
  keywords: [
    "body fat calculator",
    "body fat percentage calculator",
    "navy body fat calculator",
    "body fat calculator male",
    "body fat calculator female",
    "calculate body fat percentage"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/bodyFatCalculator`,
  },
};


export default function Page() {
  return (
    <>
    <StructuredData
        calculatorKey="bodyFat"
        pageTitle="Body Fat Calculator"
        pageUrl={`${SITE_URL}/health/bodyFatCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Health Calculators", url: `${SITE_URL}/health` },
          { name: "Body Fat Calculator", url: `${SITE_URL}/health/bodyFatCalculator` },
        ]}
      />
  <BodyFatCalculatorPage />;
    </>
  )
}
