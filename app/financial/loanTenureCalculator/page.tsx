import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LoanTenureCalculatorPage from "./loanTenure";

const meta = calculatorMetaMap.loanTenureCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.loanTenureCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/loanTenureCalculator`,
  },
};

export default function fdCalculator() {
  return <LoanTenureCalculatorPage/>
}
