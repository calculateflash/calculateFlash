"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateLumpSum } from "./lib/lumpsumcalculate";

export default function LumpSumCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(100000);
  const [annualRate, setAnnualRate] = useState<number | "">(12);
  const [years, setYears] = useState<number | "">(10);

  const [result, setResult] = useState<{
    futureValue: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateLumpSum({
      principal: Number(principal) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Lump Sum Calculator"
        description="Calculate the future value and interest earned on a one-time investment."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Investment Amount (₹)"
            value={principal}
            onChange={setPrincipal}
          />

          <InputCard
            label="Expected Annual Return (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Time Period (Years)"
            value={years}
            onChange={setYears}
          />

          <ActionsCard
            calculateLabel="Calculate Returns"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULTS SECTION */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Future Value"
            value={result.futureValue}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Lump Sum Returns Are Calculated?"
        description="Lump sum investments grow using compound interest over the investment period."
        formula={`Future Value = P × (1 + r)^t`}
        steps={[
          "P = One-time investment.",
          "r = Annual return rate.",
          "t = Time in years.",
          "Returns grow exponentially due to compounding."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is lump sum investment?",
            answer: "A one-time investment made into a mutual fund or fixed-income scheme."
          }
        ]}
      />

    </section>
  );
}
