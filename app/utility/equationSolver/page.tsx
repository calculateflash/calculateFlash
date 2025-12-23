import type { Metadata } from "next";
import EquationSolverPage from "./equation";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const meta = utilityMetaDataMap.equationSolver;

export const metadata: Metadata = {
  title: "Equation Solver Online – Solve Linear, Quadratic & Polynomial Equations",
  description:
    "Free online equation solver to solve linear, quadratic, cubic, and higher-degree polynomial equations with clear step-by-step solutions and graphs. Ideal for students and exam practice.",
  keywords: [
    "equation solver",
    "solve equation online",
    "polynomial equation solver",
    "quadratic equation solver",
    "linear equation solver",
    "cubic equation solver",
    "solve equations step by step",
    "math equation solver"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/equationSolver`,
  },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function Page() {
  return (
    <>
                    <StructuredData
  calculatorKey="equationSolver"
  pageTitle="Equation Solver"
  pageUrl={`${SITE_URL}/utility/equationSolver`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "Equation Solver", url: `${SITE_URL}/utility/equationSolver` },
  ]}
/>
    <EquationSolverPage />;
    </>
    
  )
}
