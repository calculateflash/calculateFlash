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

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.compoundCalculator;

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
        description="Calculate how your investment grows over time using compound interest. This calculator shows how the principal amount, interest rate, investment duration, and compounding frequency impact your final returns. Understand the exponential power of compounding and plan your long-term wealth effectively."
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
            question: "How does compound interest work in investment growth?",
            answer:
              "Compound interest reinvests earned interest back into the principal, allowing your investment to grow exponentially over time. Each compounding period adds new interest to the previous balance, making returns significantly higher than simple interest, especially for long-term investments."
          },
          {
            question: "Which compounding frequency gives the highest returns?",
            answer:
              "More frequent compounding—such as monthly or quarterly—yields higher returns because interest is calculated and added more frequently. Annual compounding offers lower returns compared to monthly compounding, making frequency a major factor in wealth growth."
          },
          {
            question: "Is compound interest better for long-term financial planning?",
            answer:
              "Yes, compound interest is one of the most powerful tools for long-term wealth creation. The longer you stay invested, the more your interest earns interest. This makes compound interest ideal for goals like retirement, education planning, or long-term savings."
          },
          {
            question: "What factors influence compound interest returns?",
            answer:
              "Key factors include principal amount, annual interest rate, investment duration, and compounding frequency. Even small increases in duration or rate can lead to significantly higher returns due to the exponential nature of compounding."
          },
          {
            question: "How is compound interest different from simple interest?",
            answer:
              "Simple interest grows only on the original principal, while compound interest grows on principal plus previously-earned interest. Over long periods, compound interest generates much higher returns, making it ideal for investment strategies."
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
