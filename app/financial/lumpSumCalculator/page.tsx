import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LumpSumCalculatorPage from "./lumpSum";

const meta = calculatorMetaMap.LumpSumCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.LumpSumCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/LumpSumCalculator`,
  },
};

export default function fdCalculator() {
  return <LumpSumCalculatorPage/>
}
