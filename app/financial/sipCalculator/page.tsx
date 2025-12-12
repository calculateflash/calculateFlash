"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { calculateSIP } from "./lib/sipCalculate";
import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";


export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState<number | "">(5000);
  const [years, setYears] = useState<number | "">(10);
  const [annualRate, setAnnualRate] = useState<number | "">(12);

  const [result, setResult] = useState<{
    futureValue: number;
    totalInvested: number;
    estimatedReturns: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateSIP({
    monthly: Number(monthly) || 0,
    years: Number(years) || 0,
    annualRate: Number(annualRate) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">
      <CalculatorHeader
        title="SIP Calculator"
        description="Calculate future value, total invested amount and estimated returns."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Monthly Investment (₹)"
            value={monthly}
            onChange={setMonthly}
          />

          <InputCard
            label="Investment Period (Years)"
            value={years}
            onChange={setYears}
          />

          <InputCard
            label="Expected Annual Return (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <ActionsCard
            calculateLabel="Calculate SIP"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD GRID */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Total Invested"
            value={result.totalInvested}
          />

          <ResultCard
            label="Estimated Returns"
            value={result.estimatedReturns}
          />

          <ResultCard
            label="Future Value"
            value={result.futureValue}
          />

        </div>
      )}
    </section>
  );
}
