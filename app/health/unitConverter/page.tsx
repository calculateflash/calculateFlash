import type { Metadata } from "next";
import UnitConverterPage from "./unit";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.unitConverter;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.unitConverter,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/unitConverter`,
  },
};

export default function Page() {
  return <UnitConverterPage />;
}
