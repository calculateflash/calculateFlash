import type { Metadata } from "next";
import InsurancePremiumCalculatorPage from "./insurance";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.insurancePremiumCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.insurancePremiumCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/insurancePremiumCalculator`,
  },
};

export default function Page() {
  return <InsurancePremiumCalculatorPage />;
}
