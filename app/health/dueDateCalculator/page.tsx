import type { Metadata } from "next";
import DueDateCalculatorPage from "./dueDate";
import { healthMetaDataMap } from "../lib/healthMetaData";
import { healthCalculatorKeywordsMap } from "../lib/healthCalculatorKeywords";

const meta = healthMetaDataMap.dueDateCalculator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: healthCalculatorKeywordsMap.dueDateCalculator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/health/dueDateCalculator`,
  },
};

export default function Page() {
  return <DueDateCalculatorPage />;
}
