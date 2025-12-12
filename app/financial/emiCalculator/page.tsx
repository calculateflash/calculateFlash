"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateEMI } from "./lib/emicalculate";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number | "">(500000);
  const [interestRate, setInterestRate] = useState<number | "">(10);
  const [loanTenure, setLoanTenure] = useState<number | "">(12);

  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateEMI({
    loanAmount: Number(loanAmount) || 0,
    annualRate: Number(interestRate) || 0,
    tenureMonths: Number(loanTenure) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="EMI Calculator"
        description="Estimate your monthly EMI, total interest, and total payment."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Loan Amount (₹)"
            value={loanAmount}
            onChange={setLoanAmount}
          />

          <InputCard
            label="Interest Rate (% per year)"
            value={interestRate}
            onChange={setInterestRate}
          />

          <InputCard
            label="Loan Tenure (Months)"
            value={loanTenure}
            onChange={setLoanTenure}
          />

          <ActionsCard
            calculateLabel="Calculate EMI"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Monthly EMI"
            value={result.emi}
          />

          <ResultCard
            label="Total Interest"
            value={result.totalInterest}
          />

          <ResultCard
            label="Total Payment"
            value={result.totalPayment}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How EMI is Calculated?"
        description="EMI (Equated Monthly Installment) is calculated using the standard amortization formula used by all Indian banks."
        formula={`EMI = P × r × (1 + r)^n / [(1 + r)^n – 1]`}
        steps={[
          "P = Loan Amount",
          "r = Monthly Interest Rate (Annual Rate / 12 / 100)",
          "n = Loan tenure in months",
          "The EMI includes both principal and interest.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is EMI?",
            answer:
              "EMI stands for Equated Monthly Instalment. It is the monthly amount you pay to repay a loan."
          },
          {
            question: "Does EMI reduce over time?",
            answer:
              "The interest portion reduces and principal portion increases as you progress in loan tenure."
          },
          {
            question: "How does loan tenure affect EMI?",
            answer: "Longer tenure reduces EMI but increases total interest paid."
          },
        ]}
      />
    </section>

  );
}
