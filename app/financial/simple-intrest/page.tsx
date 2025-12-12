"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateSimpleInterest } from "./lib/simplecalculate";

export default function SimpleInterestCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(10000);
  const [annualRate, setAnnualRate] = useState<number | "">(10);
  const [years, setYears] = useState<number | "">(2);

  const [result, setResult] = useState<{
    simpleInterest: number;
    totalAmount: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateSimpleInterest({
      principal: Number(principal) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Simple Interest Calculator"
        description="Calculate simple interest and total amount payable on loans or savings without compounding. Ideal for short-term loans, manual interest checks, and quick financial calculations. Enter principal, rate, and duration to get accurate results instantly."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Principal Amount (₹)"
            value={principal}
            onChange={setPrincipal}
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
            calculateLabel="Calculate SI"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT SECTION */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Simple Interest"
            value={result.simpleInterest}
          />

          <ResultCard
            label="Total Amount"
            value={result.totalAmount}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Simple Interest Is Calculated?"
        description="Simple interest is calculated only on the principal amount without compounding."
        formula={`SI = (P × R × T) / 100`}
        steps={[
          "P = Principal amount.",
          "R = Annual interest rate.",
          "T = Time period in years.",
          "Total Amount = P + SI."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is simple interest calculated on a loan or investment?",
            answer:
              "Simple interest is calculated only on the principal amount using the formula SI = (P × R × T) / 100. It does not involve compounding, which makes it easy to understand and ideal for short-term loans, educational loans, and manual financial estimations."
          },
          {
            question: "What is the difference between simple interest and compound interest?",
            answer:
              "Simple interest grows only on the initial principal, while compound interest grows on principal plus accumulated interest. For long-term investments, compound interest yields much higher returns. Simple interest is better suited for short-term and low-risk financial products."
          },
          {
            question: "Is simple interest used by banks for loans?",
            answer:
              "Most banks use compound interest for long-term loans, but simple interest is commonly used for short-term loans, personal borrowing, agricultural loans, and interest subsidies. Simple interest makes repayment calculations straightforward and predictable."
          },
          {
            question: "Does simple interest change during the loan period?",
            answer:
              "No, simple interest remains constant throughout the loan tenure because it is calculated only on the principal. This makes total repayment predictable and easy to calculate without complex formulas or fluctuating monthly payments."
          },
          {
            question: "When is simple interest a better choice than compound interest?",
            answer:
              "Simple interest is ideal when you need short-term financing or want a transparent and predictable repayment plan. It's beneficial for loans with shorter durations where compounding would not significantly change the overall interest amount."
          }
        ]}
      />


    </section>
  );
}
