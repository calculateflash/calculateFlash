import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import SimpleInterestCalculatorPage from "./simpleIntrest";

const meta = calculatorMetaMap.simpleInterest;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.simpleInterest,
  alternates: {
    canonical: `${process.env.url}/financial/simple-intrest`,
  },
};

export default function fdCalculator() {
  return <SimpleInterestCalculatorPage/>
}
