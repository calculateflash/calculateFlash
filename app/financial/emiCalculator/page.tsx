"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

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
    </section>
  );
}
