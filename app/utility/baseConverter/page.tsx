import type { Metadata } from "next";
import BaseConverterPage from "./base";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const meta = utilityMetaDataMap.baseConverter;

export const metadata: Metadata = {
  title: "Binary, Decimal & Hex Converter – Number Base Converter",
  description:
    "Free number base converter to convert binary, decimal, and hexadecimal numbers instantly. Accurate binary to decimal and hex conversion tool.",
  keywords: [
    "binary to decimal converter",
    "decimal to binary converter",
    "hex to decimal converter",
    "number base converter",
    "binary decimal hex calculator"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/baseConverter`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
        calculatorKey="baseConverter"
        pageTitle="Base Converter"
        pageUrl={`${SITE_URL}/utility/baseConverter`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Utility Calculators", url: `${SITE_URL}/utility` },
          { name: "Base Converter", url: `${SITE_URL}/utility/baseConverter` },
        ]}
      />
      <BaseConverterPage />;
    </>
  )
}
