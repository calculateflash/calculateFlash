import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import RDCalculatorPage from "./rd";

const meta = calculatorMetaMap.rdCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.rdCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/rdCalculator`,
  },
};

export default function fdCalculator() {
  return <RDCalculatorPage/>
}
