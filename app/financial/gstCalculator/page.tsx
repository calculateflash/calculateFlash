import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import GSTCalculatorPage from "./gst";

const meta = calculatorMetaMap.gstCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.gstCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/gstCalculator`,
  },
};

export default function fdCalculator() {
  return <GSTCalculatorPage/>
}
