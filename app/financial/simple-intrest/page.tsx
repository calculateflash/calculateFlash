import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import SimpleInterestCalculatorPage from "./simpleIntrest";
import StructuredData from "@/lib/StructuredData";

const meta = calculatorMetaMap.simpleInterest;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "Simple Interest Calculator – Calculate Interest Using Exact Dates",
  description:
    "Free simple interest calculator to calculate interest using exact start and end dates. Ideal for short-term loans, savings, legal interest, and educational calculations.",
  keywords: [
    "simple interest calculator",
    "simple interest calculator with dates",
    "calculate simple interest online",
    "simple interest formula calculator",
    "si calculator",
    "simple interest calculator india"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/simple-interest-calculator`,
  },
};


export default function fdCalculator() {
  return (
    <>
    {/* STRUCTURED DATA */}
      <StructuredData
        calculatorKey="simpleInterest"
        pageTitle="Simple Interest Calculator"
        pageUrl={`${SITE_URL}/financial/simple-interest-calculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "Simple Interest Calculator", url: `${SITE_URL}/financial/simple-interest-calculator` },
        ]}
      />
  <SimpleInterestCalculatorPage/>
    </>
  )
}
