import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LoanTenureCalculatorPage from "./loanTenure";

const meta = calculatorMetaMap.LoanTenureCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.LoanTenureCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/LoanTenureCalculator`,
  },
};

export default function fdCalculator() {
  return <LoanTenureCalculatorPage/>
}
