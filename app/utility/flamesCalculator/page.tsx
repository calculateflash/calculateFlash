import type { Metadata } from "next";
import FlamesCalculatorPage from "./flames";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const meta = utilityMetaDataMap.flamesCalculator;

export const metadata: Metadata = {
  title: "FLAMES Calculator – Love, Friendship & Relationship Checker Online",
  description:
    "Use our free FLAMES calculator to check relationship compatibility between two names. Find out whether your bond is Love, Friendship, Marriage, Affection, Enemy, or Siblings using the classic FLAMES method.",
  keywords: [
    "flames calculator",
    "flames love calculator",
    "flames relationship calculator",
    "flames calculator online",
    "flames calculator by name",
    "flames game calculator",
    "love compatibility flames",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/flamesCalculator`,
  },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function Page() {
  return (
  <>
    <StructuredData
    calculatorKey="flames"
    pageTitle="FLAMES Calculator"
    pageUrl={`${SITE_URL}/utility/flamesCalculator`}
    breadcrumbs={[
      { name: "Home", url: SITE_URL },
      { name: "Utility Calculators", url: `${SITE_URL}/utility` },
      { name: "FLAMES Calculator", url: `${SITE_URL}/utility/flamesCalculator` },
    ]}
  />
    <FlamesCalculatorPage />
  </>
  )
}
