import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LumpSumCalculatorPage from "./lumpSum";

const meta = calculatorMetaMap.lumpSumCalculator;

export const metadata: Metadata = {
  title: "Lump Sum Calculator – Calculate One-Time Investment Returns",
  description:
    "Free lump sum calculator to estimate future value and returns on a one-time investment. Calculate lump sum mutual fund returns using compound interest for long-term financial planning.",
  keywords: [
    "lump sum calculator",
    "lump sum investment calculator",
    "mutual fund lump sum calculator",
    "lump sum return calculator",
    "one time investment calculator",
    "compound interest lump sum calculator"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/lumpSumCalculator`,
  },
};

import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function fdCalculator() {
  return (
    <>
     <StructuredData
          calculatorKey="lumpSum"
          pageTitle="Lump Sum Calculator"
          pageUrl={`${SITE_URL}/financial/lumpSumCalculator`}
          breadcrumbs={[
            { name: "Home", url: SITE_URL },
            { name: "Financial Calculators", url: `${SITE_URL}/financial` },
            { name: "Lump Sum Calculator", url: `${SITE_URL}/financial/lumpSumCalculator` },
          ]}
        />
     <LumpSumCalculatorPage/>

    </>
  )
}
