import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import EMICalculatorPage from "./emiCalculator";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = calculatorMetaMap.emiCalculator;

export const metadata: Metadata = {
  title: "EMI Calculator – Calculate Loan EMI, Interest & Total Payment",
  description:
    "Free EMI calculator to calculate monthly loan EMI, total interest, and total payment. Ideal for home loans, car loans, and personal loans in India.",
  keywords: [
    "emi calculator",
    "loan emi calculator",
    "monthly emi calculator",
    "home loan emi calculator",
    "car loan emi calculator",
    "personal loan emi calculator",
    "emi calculation formula"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/emiCalculator`,
  },
};


export default function SIPCalculator() {
  return (
    <>
    {/* STRUCTURED DATA */}
        <StructuredData
          calculatorKey="emi"
          pageTitle="Emi Calculator"
          pageUrl={`${SITE_URL}/financial/emiCalculator`}
          breadcrumbs={[
            { name: "Home", url: SITE_URL },
            { name: "Financial Calculators", url: `${SITE_URL}/financial` },
            { name: "Emi Calculator", url: `${SITE_URL}/financial/emiCalculator` },
          ]}
        />
  <EMICalculatorPage/>
    </>
  )
}
