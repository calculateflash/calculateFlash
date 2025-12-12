"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateLoanTenure } from "./lib/loanTenureCalculate";

export default function LoanTenureCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number | "">(500000);
  const [annualRate, setAnnualRate] = useState<number | "">(10);
  const [emi, setEmi] = useState<number | "">(12000);

  const [result, setResult] = useState<{
    tenureMonths: number;
    tenureYears: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateLoanTenure({
      loanAmount: Number(loanAmount) || 0,
      annualRate: Number(annualRate) || 0,
      emi: Number(emi) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Loan Tenure Calculator"
        description="Find out how long it will take to repay your loan based on EMI and interest rate."
      />

      {/* INPUTS */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Loan Amount (₹)"
            value={loanAmount}
            onChange={setLoanAmount}
          />

          <InputCard
            label="Annual Interest Rate (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Monthly EMI (₹)"
            value={emi}
            onChange={setEmi}
          />

          <ActionsCard
            calculateLabel="Calculate Tenure"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard
            label="Tenure (Months)"
            value={result.tenureMonths}
          />
          <ResultCard
            label="Tenure (Years)"
            value={result.tenureYears}
          />
        </div>
      )}

      <CalculatorExplanation
        title="How Loan Tenure Is Calculated?"
        description="Loan tenure is determined using EMI, interest rate, and principal amount."
        formula={`n = ln(EMI / (EMI – P×r)) / ln(1 + r)`}
        steps={[
          "P = Loan principal.",
          "r = Monthly interest rate.",
          "n = Tenure in months.",
          "Higher EMI reduces tenure, and vice versa."
        ]}
      />


      <CalculatorFAQ
        items={[
          {
            question: "Can I reduce my loan tenure?",
            answer: "Yes. Increasing EMI or prepayment reduces your tenure."
          }
        ]}
      />

    </section>
  );
}
