import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import CompoundInterestCalculatorPage from "./compoundCalculator";

const meta = calculatorMetaMap.compoundCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.compoundCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/compundCalculator`,
  },
};

export default function CompundCalculator() {
  return <CompoundInterestCalculatorPage/>
}
