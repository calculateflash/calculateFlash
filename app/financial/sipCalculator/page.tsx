import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import SIPCalculatorPage from "./sipCalculator";

const meta = calculatorMetaMap.sipCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.sipCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/sipCalculator`,
  },
};

export default function SIPCalculator() {
  return <SIPCalculatorPage/>
}
