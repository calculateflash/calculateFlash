import type { Metadata } from "next";
import BaseConverterPage from "./base";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.baseConverter;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.baseConverter,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/baseConverter`,
  },
};

export default function Page() {
  return <BaseConverterPage />;
}
