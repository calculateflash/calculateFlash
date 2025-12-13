import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import EMICalculatorPage from "./emiCalculator";

const meta = calculatorMetaMap.emiCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.emiCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/emiCalculator`,
  },
};

export default function SIPCalculator() {
  return <EMICalculatorPage/>
}
