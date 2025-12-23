import type { Metadata } from "next";
import MatrixCalculatorPage from "./matrix";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const meta = utilityMetaDataMap.matrixCalculator;

export const metadata: Metadata = {
  title: "Matrix Solver Online – Solve Matrix Step by Step",
  description:
    "Free online matrix solver to perform matrix addition, subtraction, multiplication, transpose, determinant, inverse, and rank calculations. Ideal for students and linear algebra practice.",
  keywords: [
    "matrix solver",
    "matrix calculator online",
    "solve matrix step by step",
    "matrix addition calculator",
    "matrix multiplication calculator",
    "matrix inverse calculator",
    "matrix determinant calculator",
    "matrix rank calculator",
    "linear algebra matrix solver"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/matrixCalculator`,
  },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
export default function Page() {
  return (
  <>
  <StructuredData
    calculatorKey="matrix"
    pageTitle="Matrix Calculator"
    pageUrl={`${SITE_URL}/utility/matrixCalculator`}
    breadcrumbs={[
      { name: "Home", url: SITE_URL },
      { name: "Utility Calculators", url: `${SITE_URL}/utility` },
      { name: "Matrix Calculator", url: `${SITE_URL}/utility/matrixCalculator` },
    ]}
  />
    <MatrixCalculatorPage />
  </>
  )
}
