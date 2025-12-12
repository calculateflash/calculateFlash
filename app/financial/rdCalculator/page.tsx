"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateRD } from "./lib/rdcalculate";

export default function RDCalculatorPage() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number | "">(5000);
  const [annualRate, setAnnualRate] = useState<number | "">(7);
  const [years, setYears] = useState<number | "">(5);

  const [result, setResult] = useState<{
    maturityValue: number;
    totalDeposited: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateRD({
      monthlyDeposit: Number(monthlyDeposit) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="RD Calculator"
        description="Calculate maturity value and interest earned on monthly recurring deposits."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Monthly Deposit (₹)"
            value={monthlyDeposit}
            onChange={setMonthlyDeposit}
          />

          <InputCard
            label="Annual Interest Rate (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Time Period (Years)"
            value={years}
            onChange={setYears}
          />

          <ActionsCard
            calculateLabel="Calculate RD"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT SECTION */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Maturity Value"
            value={result.maturityValue}
          />

          <ResultCard
            label="Total Deposited"
            value={result.totalDeposited}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How RD Maturity Is Calculated?"
        description="Recurring Deposits allow you to deposit a fixed amount every month and earn compound interest."
        formula={`Maturity = P × [n + (n(n+1)/2 × r)]`}
        steps={[
          "P = Monthly RD instalment.",
          "n = Total months.",
          "r = Monthly interest rate.",
          "Interest is compounded quarterly for most banks."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is the minimum RD duration?",
            answer: "Most banks allow a minimum duration of 6 months."
          },
          {
            question: "Is RD interest taxable?",
            answer: "Yes. RD interest is taxable similar to FD."
          }
        ]}
      />      
    </section>
  );
}
