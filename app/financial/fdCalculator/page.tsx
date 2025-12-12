"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateFD } from "./lib/fdCalculate";

export default function FDCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(100000);
  const [annualRate, setAnnualRate] = useState<number | "">(6.5);
  const [years, setYears] = useState<number | "">(5);
  const [compounding, setCompounding] = useState<number>(4); // quarterly (default)

  const [result, setResult] = useState<{
    maturityValue: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateFD({
      principal: Number(principal) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
      compounding,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="FD Calculator"
        description="Calculate the maturity value and interest earned on a fixed deposit."
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

          {/* Compounding Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">Compounding Frequency</label>
            <select
              className="border rounded-md p-2 w-full"
              value={compounding}
              onChange={(e) => setCompounding(Number(e.target.value))}
            >
              <option value={1}>Yearly</option>
              <option value={2}>Half-Yearly</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate FD"
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
            label="Maturity Value"
            value={result.maturityValue}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How FD Maturity Is Calculated?"
        description="Fixed Deposits grow at a fixed interest rate and compound periodically. Banks usually compound quarterly."
        formula={`Maturity Amount = P × (1 + r/n)^(n×t)`}
        steps={[
          "P = FD principal amount.",
          "r = Annual interest rate.",
          "n = Compounding frequency (monthly, quarterly, yearly).",
          "t = Time period in years.",
          "Interest is added back every compounding period."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "Which compounding frequency gives highest maturity?",
            answer: "Monthly compounding gives the highest return."
          },
          {
            question: "Is FD interest taxable?",
            answer: "Yes. FD interest is fully taxable under income tax laws."
          }
        ]}
      />

    </section>
  );
}
