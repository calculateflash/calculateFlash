import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import CompoundInterestCalculatorPage from "./compoundCalculator";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = calculatorMetaMap.compoundCalculator;

export const metadata: Metadata = {
  title: "Compound Interest Calculator – Calculate Interest Using Exact Dates",
  description:
    "Free compound interest calculator to calculate investment growth using exact start and end dates. Compare returns based on compounding frequency and interest rate for accurate financial planning.",
  keywords: [
    "compound interest calculator",
    "compound interest calculator with dates",
    "calculate compound interest online",
    "compound interest formula calculator",
    "ci calculator",
    "compound interest calculator india"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/compound-interest-calculator`,
  },
};


export default function CompundCalculator() {
  return (
    <>
    {/* STRUCTURED DATA */}
      <StructuredData
        calculatorKey="compoundInterest"
        pageTitle="Compound Interest Calculator"
        pageUrl={`${SITE_URL}/financial/compoundCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "Compound Interest Calculator", url: `${SITE_URL}/financial/compoundCalculator` },
        ]}
      />
  <CompoundInterestCalculatorPage/>
    </>
  )
}
