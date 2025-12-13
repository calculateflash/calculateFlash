import type { Metadata } from "next";
import EquationSolverPage from "./equation";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.equationSolver;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.equationSolver,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/equationSolver`,
  },
};

export default function Page() {
  return <EquationSolverPage />;
}
