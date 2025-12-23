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

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.lumpSumCalculator;

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
        description="Use this lump sum calculator to estimate the future value and returns of a one-time investment using compound interest. Ideal for mutual funds and long-term wealth creation."
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
        <Card className="p-6 mt-10 text-gray-700">
         <h2 className="text-xl text-blue-700 font-semibold">
        What is a Lump Sum Investment?
      </h2>

      <p>
        A lump sum investment is a one-time investment where the entire amount is
        invested at once instead of spreading it over time. This type of investment
        benefits fully from compounding because the entire principal starts earning
        returns immediately.
      </p>

      <p>
        This lump sum calculator helps estimate how your investment grows over time
        using compound interest. It considers your investment amount, expected annual
        return, and investment duration to calculate future value and interest earned.
      </p>

      <p>
        Lump sum investments are commonly used in mutual funds, fixed deposits,
        retirement planning, and long-term wealth-building strategies.
      </p>
    </Card>

      <CalculatorFAQ
        items={[
          {
            question: "How does a lump sum investment calculator work?",
            answer:
              "A lump sum calculator estimates the future value of a one-time investment using the compound interest formula. It considers your principal amount, expected rate of return, and investment duration. This helps you understand how a single investment can grow over time with the power of compounding."
          },
          {
            question: "Is lump sum investment better than SIP?",
            answer:
              "A lump sum investment can deliver higher returns when markets are undervalued or trending upward, as the entire amount starts compounding immediately. SIP is better for reducing risk during volatile markets. The choice depends on your risk appetite and market timing."
          },
          {
            question: "What factors influence lump sum investment returns?",
            answer:
              "Key factors include the investment duration, annual rate of return, market performance, and compounding frequency. Longer durations and higher returns significantly increase the final value due to exponential growth from compounding."
          },
          {
            question: "Are lump sum mutual fund investments risky?",
            answer:
              "Yes, lump sum investments carry market risk, especially in equity funds, because the entire amount is exposed at once. However, long-term investors often benefit from market growth. Conservative investors may prefer debt or hybrid funds for lower risk."
          },
          {
            question: "Can I withdraw or switch my lump sum investment anytime?",
            answer:
              "Most mutual funds allow withdrawals or switching between schemes at any time, except in lock-in products like ELSS. However, exit loads and tax implications may apply. Reviewing your investment horizon and goals before withdrawing is recommended."
          }
        ]}
      />
               <section className="mt-12">
                    <h2 className="text-xl font-semibold mb-6">
                        Related Financial Calculators
                    </h2>
              
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((calc) => (
                        <CalculatorMiniCard key={calc.href} {...calc} />
                        ))}
                    </div>
                    </section>
    

    </section>
  );
}
