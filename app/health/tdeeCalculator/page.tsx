import type { Metadata } from "next";
import TDEECalculatorPage from "./tdee";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";
const meta = healthMetaDataMap.tdeeCalculator;
import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "TDEE Calculator – Calculate Daily Calorie Needs Online",
  description:
    "Free TDEE calculator to estimate your total daily calorie needs based on BMR and activity level. Calculate calories for weight loss, muscle gain, or maintenance.",
  keywords: [
    "tdee calculator",
    "calorie calculator",
    "daily calorie calculator",
    "tdee calculator male female",
    "bmr and tdee calculator",
    "maintenance calories calculator"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/tdeeCalculator`,
  },
};


export default function Page() {
  return (
    <>
    <StructuredData
  calculatorKey="tdee"
  pageTitle="TDEE Calculator"
  pageUrl={`${SITE_URL}/health/tdeeCalculator`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Health Calculators", url: `${SITE_URL}/health` },
    { name: "TDEE Calculator", url: `${SITE_URL}/health/tdeeCalculator` },
  ]}
/>
  <TDEECalculatorPage />;
    </>
  )
}
