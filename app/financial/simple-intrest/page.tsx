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
        description="Calculate interest and total amount using the simple interest formula."
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
            question: "Is simple interest used in loans?",
            answer: "It is used in short-term loans, education interest subsidies, and some savings schemes."
          }
        ]}
      />

    </section>
  );
}
