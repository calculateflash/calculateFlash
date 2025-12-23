import type { Metadata } from "next";
import { calculatorMetaMap } from "../lib/financeMetaData";
import { calculatorKeywordsMap } from "../../financial/lib/financeCalculatorKeywords";
import LoanEligibilityCalculatorPage from "./loan";

import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const meta = calculatorMetaMap.loanEligibilityCalculator;

export const metadata: Metadata = {
  title: "Loan Eligibility Calculator – Check How Much Loan You Can Get",
  description:
    "Free loan eligibility calculator to check how much loan you can get based on income, existing EMIs, interest rate, and tenure. Ideal for home, car, and personal loans.",
  keywords: [
    "loan eligibility calculator",
    "home loan eligibility calculator",
    "loan eligibility based on salary",
    "how much loan can i get",
    "loan eligibility india"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/financial/loanEligibilityCalculator`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
        calculatorKey="loanEligibility"
        pageTitle="Loan Eligibility Calculator"
        pageUrl={`${SITE_URL}/financial/loanEligibilityCalculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "Loan Eligibility Calculator", url: `${SITE_URL}/financial/loanEligibilityCalculator` },
        ]}
      />
     <LoanEligibilityCalculatorPage/>
    </>
  )
}