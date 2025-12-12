"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateIncomeTax } from "./lib/incometax";

export default function IncomeTaxCalculatorPage() {
  const [income, setIncome] = useState<number | "">(800000);

  const [result, setResult] = useState<{
    taxableIncome: number;
    taxPayable: number;
    effectiveRate: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateIncomeTax({
    income: Number(income) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Income Tax Calculator"
        description="Calculate your tax payable under the latest Indian new tax regime slabs."
      />

      {/* INPUT */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Annual Income (₹)"
            value={income}
            onChange={setIncome}
          />

          <ActionsCard
            calculateLabel="Calculate Tax"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />
        </div>
      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Taxable Income"
            value={result.taxableIncome}
          />

          <ResultCard
            label="Tax Payable"
            value={result.taxPayable}
          />

          <ResultCard
            label="Effective Tax Rate (%)"
            value={`${result.effectiveRate}%`}
          />
        </div>
      )}
    </section>
  );
}
