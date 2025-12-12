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
    const output = calculateLoanEligibility({
      income: Number(income) || 0,
      existingEmi: Number(existingEmi) || 0,
      annualRate: Number(annualRate) || 0,
      tenureYears: Number(tenureYears) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Loan Eligibility Calculator"
        description="Find the maximum loan amount you can get based on your income, tenure, and interest rate."
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

      <CalculatorFAQ
        items={[
          {
            question: "What is FOIR?",
            answer: "It is the percentage of income allowed for EMI. Usually 40–50%."
          },
          {
            question: "Does a long tenure increase eligibility?",
            answer: "Yes. Longer tenure lowers EMI, increasing loan eligibility."
          }
        ]}
      />

    </section>
  );
}
