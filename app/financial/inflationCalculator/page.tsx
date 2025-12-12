"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateInflation } from "./lib/inflationcalculate";

export default function InflationCalculatorPage() {
  const [amount, setAmount] = useState<number | "">(100000);
  const [inflationRate, setInflationRate] = useState<number | "">(6);
  const [years, setYears] = useState<number | "">(10);

  const [result, setResult] = useState<{
    futureValue: number;
    presentValue: number;
    valueLost: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateInflation({
      amount: Number(amount) || 0,
      rate: Number(inflationRate) || 0,
      years: Number(years) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Inflation Calculator"
        description="Estimate how inflation impacts the value of money over time."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Amount (₹)"
            value={amount}
            onChange={setAmount}
          />

          <InputCard
            label="Inflation Rate (%)"
            value={inflationRate}
            onChange={setInflationRate}
          />

          <InputCard
            label="Time Period (Years)"
            value={years}
            onChange={setYears}
          />

          <ActionsCard
            calculateLabel="Calculate Inflation"
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
            label="Future Value (₹)"
            value={result.futureValue}
          />

          <ResultCard
            label="Present Value Equivalent (₹)"
            value={result.presentValue}
          />

          <ResultCard
            label="Value Lost Due to Inflation (₹)"
            value={result.valueLost}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Inflation Value Is Calculated?"
        description="Inflation reduces the purchasing power of money over time."
        formula={`Future Value = Amount × (1 + inflationRate)^years`}
        steps={[
          "Enter the current amount.",
          "Enter expected annual inflation rate.",
          "Calculator shows future value and current equivalent value."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is inflation?",
            answer: "Inflation is the rise in prices which reduces the value of money."
          },
          {
            question: "What is a good inflation estimate?",
            answer: "India averages around 5–6% inflation yearly."
          }
        ]}
      />


    </section>
  );
}
