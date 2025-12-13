import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import InflationCalculatorPage from "./inflation";

const meta = calculatorMetaMap.inflationCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: calculatorKeywordsMap.inflationCalculator,
  alternates: {
    canonical: `${process.env.url}/financial/inflationCalculator`,
  },
};

export default function fdCalculator() {
  return <InflationCalculatorPage/>
}
