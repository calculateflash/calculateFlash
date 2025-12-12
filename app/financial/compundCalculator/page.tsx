"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateCompoundInterest } from "./lib/compundCalculate";

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(100000);
  const [annualRate, setAnnualRate] = useState<number | "">(8);
  const [years, setYears] = useState<number | "">(10);
  const [compounding, setCompounding] = useState<number>(4); // Quarterly default

  const [result, setResult] = useState<{
    maturityValue: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateCompoundInterest({
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
        title="Compound Interest Calculator"
        description="Calculate the future value and interest earned on an investment with compound interest."
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

          {/* Compounding Frequency Dropdown */}
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
            calculateLabel="Calculate CI"
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
        title="How Compound Interest Is Calculated?"
        description="Compound interest allows your investment to grow faster because interest is earned on both the initial principal and the interest accumulated over previous periods. It is widely used in savings accounts, fixed deposits, mutual funds, and long-term investments."
        formula={`A = P × (1 + r/n)^(n × t)

      Where:
      A = Future Value
      P = Principal Amount
      r = Annual Interest Rate (in decimal)
      n = Number of compounding periods per year
      t = Time in years`}
        steps={[
          "Enter the principal amount (initial investment).",
          "Select the compounding frequency (monthly, quarterly, yearly, etc.).",
          "The investment grows faster when compounding frequency increases.",
          "The calculator applies the formula using the selected values to estimate future value and total interest earned.",
          "Compound interest results in exponential growth over long durations."
        ]}
      />


      <CalculatorFAQ
        items={[
          {
            question: "What is compound interest?",
            answer:
              "Compound interest is interest calculated on the initial principal plus any accumulated interest from previous periods. This leads to exponential growth of an investment."
          },
          {
            question: "Which compounding frequency gives the highest return?",
            answer:
              "Higher compounding frequencies such as monthly or quarterly yield higher returns compared to annual compounding because interest is added more often."
          },
          {
            question: "Is compound interest good for long-term investment?",
            answer:
              "Yes. The longer you stay invested, the more compounding benefits you receive — making it ideal for wealth-building."
          },
          {
            question: "What is the difference between simple and compound interest?",
            answer:
              "Simple interest is only calculated on the principal amount, whereas compound interest adds interest on both principal and accumulated interest. This results in significantly higher returns."
          },
          {
            question: "Can compound interest work against me?",
            answer:
              "Yes, in the case of credit cards or loans with compounding interest, unpaid balances grow faster, increasing the total amount owed."
          }
        ]}
      />

    </section>
  );
}
