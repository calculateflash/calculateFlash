import type { Metadata } from "next";
import BMICalculatorPage from "./bmi";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = healthMetaDataMap.bmiCalculator;

export const metadata: Metadata = {
  title: "BMI Calculator – Calculate Body Mass Index Online",
  description:
    "Free BMI calculator to calculate Body Mass Index and check weight category. Calculate BMI for men and women using height and weight.",
  keywords: [
    "bmi calculator",
    "body mass index calculator",
    "check bmi online",
    "bmi calculator men women",
    "bmi chart"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/bmiCalculator`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
        calculatorKey="bmi"
        pageTitle="BMI Calculator"
        pageUrl={`${SITE_URL}/health/bmiCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Health Calculators", url: `${SITE_URL}/health` },
          { name: "BMI Calculator", url: `${SITE_URL}/health/bmiCalculator` },
        ]}
      />
      <BMICalculatorPage />;
    </>
  )
}
