import type { Metadata } from "next";
import UnitConverterPage from "./unit";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = healthMetaDataMap.unitConverter;

export const metadata: Metadata = {
  title: "Unit Converter – Convert Length, Weight, Temperature & Time",
  description:
    "Free unit converter to convert length, weight, temperature, and time units instantly. Accurate online unit conversion tool for daily use.",
  keywords: [
    "unit converter",
    "length unit converter",
    "weight unit converter",
    "temperature converter",
    "time unit converter",
    "unit conversion calculator"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/unitConverter`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
        calculatorKey="unitConverter"
        pageTitle="Health Unit Converter"
        pageUrl={`${SITE_URL}/health/unitConverter`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Health Calculators", url: `${SITE_URL}/health` },
          { name: "Unit Converter", url: `${SITE_URL}/health/unitConverter` },
        ]}
      />
      <UnitConverterPage />;
    </>
  )
}
