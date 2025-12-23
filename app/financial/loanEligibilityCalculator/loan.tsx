"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateLoanEligibility } from "./lib/loanEligibility";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";

const related = relatedCalculatorsMap.loanEligibilityCalculator;

export default function LoanEligibilityCalculatorPage() {
  const [income, setIncome] = useState<number | "">(50000);
  const [existingEmi, setExistingEmi] = useState<number | "">(0);
  const [annualRate, setAnnualRate] = useState<number | "">(10);
  const [tenureYears, setTenureYears] = useState<number | "">(20);

  const [result, setResult] = useState<{
    maxEligibleLoan: number;
    maxEligibleEmi: number;
  } | null>(null);

  const handleCalculate = () => {
    try {
      const output = calculateLoanEligibility({
        income: Number(income) || 0,
        existingEmi: Number(existingEmi) || 0,
        annualRate: Number(annualRate) || 0,
        tenureYears: Number(tenureYears) || 0,
      });

      setResult(output);
    } catch (e) {
      console.error(e);
      alert("Please enter valid loan details");
    }
  };


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
  title="Loan Eligibility Calculator"
  description="Use this loan eligibility calculator to check how much loan you can get based on income, existing EMIs, interest rate, and tenure. Ideal for home, car, and personal loan planning."
/>

      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Monthly Income (₹)"
            value={income}
            onChange={setIncome}
          />

          <InputCard
            label="Existing EMIs (₹)"
            value={existingEmi}
            onChange={setExistingEmi}
          />

          <InputCard
            label="Annual Interest Rate (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Loan Tenure (Years)"
            value={tenureYears}
            onChange={setTenureYears}
          />

          <ActionsCard
            calculateLabel="Check Eligibility"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Max Eligible EMI"
            value={result.maxEligibleEmi}
          />

          <ResultCard
            label="Max Eligible Loan Amount"
            value={result.maxEligibleLoan}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Loan Eligibility Is Calculated?"
        description="Banks calculate loan eligibility based on income, FOIR ratio, interest rate, and tenure."
        formula={`Max EMI = Income × FOIR – Existing EMIs`}
        steps={[
          "FOIR (Fixed Obligation Income Ratio) is usually 40–50%.",
          "Higher income → higher eligibility.",
          "Lower interest rate → higher eligibility.",
          "Longer tenure reduces EMI and increases eligibility."
        ]}
      />

        <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is Loan Eligibility?
  </h2>

  <p>
    Loan eligibility refers to the maximum loan amount a bank or financial
    institution is willing to offer based on your income, existing financial
    obligations, interest rate, and repayment capacity.
  </p>

  <p>
    Most banks use the FOIR (Fixed Obligation to Income Ratio) method to assess
    eligibility. This ensures that a borrower does not spend more than a safe
    percentage of their income on EMIs.
  </p>

  <p>
    Checking loan eligibility in advance helps borrowers plan better, avoid loan
    rejection, and choose the right loan amount and tenure.
  </p>
</Card>


      <CalculatorFAQ
        items={[
          {
            question: "How do banks calculate loan eligibility based on income?",
            answer:
              "Banks primarily evaluate your monthly income, FOIR (Fixed Obligation to Income Ratio), existing EMIs, and credit profile. Typically, up to 40–50% of your net income can go toward EMIs. The calculator estimates how much loan you qualify for by applying the same criteria used by financial institutions."
          },
          {
            question: "What is FOIR and why is it important for loan approval?",
            answer:
              "FOIR represents the portion of your income that is used to pay fixed obligations such as rent and EMIs. A lower FOIR indicates better repayment capacity, improving loan eligibility. Most banks prefer FOIR to be below 50% for quick loan approval and better interest rates."
          },
          {
            question: "How does credit score affect loan eligibility?",
            answer:
              "A higher credit score (700+) increases your chances of approval and may also qualify you for lower interest rates. Poor credit history signals higher risk to lenders, which can lead to lower eligible loan amounts, higher interest rates, or rejection."
          },
          {
            question: "Can increasing the loan tenure improve eligibility?",
            answer:
              "Yes, increasing the loan tenure reduces your EMI, which in turn lowers your FOIR. This improves your repayment capacity on paper and increases the total eligible loan amount. However, longer tenures also mean higher total interest paid."
          },
          {
            question: "Do existing EMIs reduce my loan eligibility?",
            answer:
              "Yes. Existing EMIs directly reduce your disposable income and therefore lower your eligible loan amount. Banks subtract ongoing EMI commitments from your income before calculating your maximum allowable EMI for new loans."
          }
        ]}
      />
        <section className="mt-12">
             <h2 className="text-xl font-semibold mb-6">
                 Related Financial Calculators
             </h2>
       
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {related.map((calc) => (
                 <CalculatorMiniCard key={calc.href} {...calc} />
                 ))}
             </div>
             </section>
    </section>
  );
}
