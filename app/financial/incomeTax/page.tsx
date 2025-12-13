import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import IncomeTaxCalculatorPage from "./income";

const meta = calculatorMetaMap.incomeTaxCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.incomeTaxCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/incomeTaxCalculator`,
  },
};

export default function fdCalculator() {
  return <IncomeTaxCalculatorPage/>
}
