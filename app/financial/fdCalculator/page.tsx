import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import FDCalculatorPage from "./fdCalculator";
import StructuredData from "@/lib/StructuredData";

const meta = calculatorMetaMap.fdCalculator;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
export const metadata: Metadata = {
  title: "FD Calculator – Fixed Deposit Maturity & Interest Calculator",
  description:
    "Free FD calculator to calculate Fixed Deposit maturity value and interest earned. Compare FD returns based on interest rate, tenure, and compounding frequency. Ideal for secure investment planning in India.",
  keywords: [
    "fd calculator",
    "fixed deposit calculator",
    "fd maturity calculator",
    "fd interest calculator",
    "bank fd calculator",
    "fd returns calculator",
    "compound interest fd calculator"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/fdCalculator`,
  },
};

export default function fdCalculator() {
  return (
    <>
      <StructuredData
        calculatorKey="fdCalculator"
        pageTitle="FD Calculator"
        pageUrl={`${SITE_URL}/financial/fdCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "FD Calculator", url: `${SITE_URL}/financial/fdCalculator` },
        ]}
        />
      <FDCalculatorPage/>

    </>
  )
}
