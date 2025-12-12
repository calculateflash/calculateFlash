"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { calculateSIP } from "./lib/sipCalculate";
import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";


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
      <CalculatorExplanation
        title="How SIP Returns Are Calculated?"
        description="SIP (Systematic Investment Plan) grows your money using the power of compounding. Each month’s investment compounds based on the expected rate of return."
        formula={`Future Value = P × [(1 + r)^n – 1] / r × (1 + r)`}
        steps={[
          "P = Monthly SIP investment.",
          "r = Monthly return rate (Annual Rate ÷ 12 ÷ 100).",
          "n = Total number of months.",
          "SIP uses the compound interest formula for each monthly instalment."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is SIP?",
            answer: "SIP is a method of investing in mutual funds by contributing a fixed amount every month."
          },
          {
            question: "Does SIP guarantee returns?",
            answer: "No. SIP returns depend on market performance, but long-term SIPs generally give stable growth."
          },
          {
            question: "What is considered a good SIP return rate?",
            answer: "Historically, equity SIPs deliver 10–15% annualized returns over long periods."
          }
        ]}
      />

    </section>
  );
}
