import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import SIPCalculatorPage from "./sipCalculator";
import StructuredData from "@/lib/StructuredData";

const meta = calculatorMetaMap.sipCalculator;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
export const metadata: Metadata = {
  title: "SIP Calculator – Calculate Mutual Fund SIP Returns Online",
  description:
    "Free SIP calculator to estimate future value, total investment, and returns from monthly SIP investments in India. Understand long-term compounding and plan systematic investments smartly.",
  keywords: [
    "sip calculator",
    "mutual fund sip calculator",
    "sip return calculator",
    "sip investment calculator",
    "monthly sip calculator",
    "sip calculator india"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/sip-calculator`,
  },
};


export default function SIPCalculator() {
  return (
    <>
    <StructuredData
        calculatorKey="sip"
        pageTitle="SIP Calculator"
        pageUrl={`${SITE_URL}/financial/sipCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "SIP Calculator", url: `${SITE_URL}/financial/sipCalculator` },
        ]}
      />
    <SIPCalculatorPage/>
    </>
  )
}
