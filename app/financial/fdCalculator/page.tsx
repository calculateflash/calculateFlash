import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import FDCalculatorPage from "./fdCalculator";

const meta = calculatorMetaMap.fdCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.fdCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/fdCalculator`,
  },
};

export default function fdCalculator() {
  return <FDCalculatorPage/>
}
