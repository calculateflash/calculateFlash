import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LoanEligibilityCalculatorPage from "./loan";

const meta = calculatorMetaMap.loanEligibilityCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.loanEligibilityCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/loanEligibilityCalculator`,
  },
};

export default function Page() {
  return <LoanEligibilityCalculatorPage/>
}