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

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const related = relatedCalculatorsMap.inflationCalculator;

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
        description="Measure how inflation reduces the value of money over time. This calculator shows future value, present value, and the amount of value lost due to inflation. Useful for financial planning, budgeting, and long-term investment decisions."
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
            question: "How does an inflation calculator measure the value of money over time?",
            answer:
              "An inflation calculator estimates how rising prices reduce the purchasing power of your money. It uses the inflation rate and number of years to show what your current amount will be worth in the future. This helps you understand long-term cost increases and plan financial goals realistically."
          },
          {
            question: "Why is inflation important in financial planning?",
            answer:
              "Inflation reduces the real value of savings and investment returns. Without accounting for it, long-term financial goals like retirement, education, and housing may become severely underfunded. A good financial plan always adjusts expected returns for inflation."
          },
          {
            question: "What factors cause inflation to rise or fall?",
            answer:
              "Inflation is influenced by factors like demand-supply imbalance, rising production costs, government policies, and global economic trends. When demand rises or supply falls, prices increase. Central banks use monetary policies to control inflation levels."
          },
          {
            question: "How can I protect my savings from inflation?",
            answer:
              "To beat inflation, investing in growth-oriented assets such as equity mutual funds, stocks, or inflation-protected bonds is recommended. Keeping money in low-interest savings accounts may cause loss of purchasing power over time."
          },
          {
            question: "Does inflation impact all expenses equally?",
            answer:
              "No. Some categories like food, healthcare, and education often experience higher inflation than general CPI levels. Other expenses may rise slower. Understanding category-wise inflation helps plan budgets more accurately."
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
             <StructuredData
  calculatorKey="inflation"
  pageTitle="Inflation Calculator"
  pageUrl={`${SITE_URL}/financial/inflation-calculator`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Financial Calculators", url: `${SITE_URL}/financial` },
    { name: "Inflation Calculator", url: `${SITE_URL}/financial/inflation-calculator` },
  ]}
/>

    </section>
  );
}
