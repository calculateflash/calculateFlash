import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import SimpleInterestCalculatorPage from "./simpleIntrest";

const meta = calculatorMetaMap.simpleIntrestCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.simpleIntrestCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/simple-intrest`,
  },
};

export default function fdCalculator() {
  return <SimpleInterestCalculatorPage/>
}
