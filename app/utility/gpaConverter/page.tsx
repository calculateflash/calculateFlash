import type { Metadata } from "next";
import GPAConverterPage from "./gpa";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.gpaConverter;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.gpaConverter,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/gpaConverter`,
  },
};

export default function Page() {
  return <GPAConverterPage />;
}
