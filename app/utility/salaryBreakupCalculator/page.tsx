import type { Metadata } from "next";
import SalaryBreakupCalculatorPage from "./salary";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.salaryBreakupCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.salaryBreakupCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/salaryBreakupCalculator`,
  },
};

export default function Page() {
  return <SalaryBreakupCalculatorPage />;
}
