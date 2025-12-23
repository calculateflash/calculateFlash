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

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard";
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.compoundCalculator;

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(100000);
  const [annualRate, setAnnualRate] = useState<number | "">(8);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [compounding, setCompounding] = useState<number>(4); // Quarterly default

  const [result, setResult] = useState<{
    maturityValue: number;
    interestEarned: number;
    years: number;
  } | null>(null);

  const handleCalculate = () => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (end < start) {
    alert("⚠️ End date must be after the start date");
    return;
  }

  const output = calculateCompoundInterest({
    principal: Number(principal) || 0,
    annualRate: Number(annualRate) || 0,
    startDate,
    endDate,
    compounding,
  });
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Compound Interest Calculator"
        description="Use this compound interest calculator to calculate investment growth using exact start and end dates. Compare returns based on compounding frequency, interest rate, and precise duration."
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

          {/* START DATE */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {/* END DATE */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {/* COMPOUNDING FREQUENCY */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Compounding Frequency
            </label>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Investment Period (Years)"
            value={result.years}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

          <ResultCard
            label="Total Amount"
            value={`${result.maturityValue}`}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Compound Interest Is Calculated Using Dates?"
        description="Compound interest is calculated using the exact number of days between selected dates, converted into years, and applied to the compound interest formula based on the chosen compounding frequency."
        formula={`A = P × (1 + r/n)^(n × t)

Where:
A = Future Value  
P = Principal Amount  
r = Annual Interest Rate (decimal)  
n = Compounding periods per year  
t = Time period in years (calculated from dates)`}
        steps={[
          "Enter the principal amount and annual interest rate.",
          "Select the investment start and end dates.",
          "The calculator determines the exact duration in years (days ÷ 365).",
          "Choose compounding frequency (monthly, quarterly, yearly, etc.).",
          "The formula is applied to compute interest earned and final maturity value.",
        ]}
      />

        <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is Compound Interest?
  </h2>

  <p>
    Compound interest is a method of calculating interest where interest is added
    to the principal amount, and future interest is calculated on the increased
    total. This allows investments to grow faster over time compared to simple
    interest.
  </p>

  <p>
    This compound interest calculator uses exact start and end dates to calculate
    the precise investment duration. This improves accuracy for both short-term
    and long-term investments.
  </p>

  <p>
    Compound interest is commonly used in fixed deposits, mutual funds, savings
    accounts, and retirement planning due to its powerful wealth-building
    potential.
  </p>
</Card>


      <CalculatorFAQ
        items={[
          {
            question: "Why is date-based compound interest more accurate?",
            answer:
              "Date-based compound interest calculations use the exact duration between investment dates, eliminating approximation errors. This ensures higher accuracy, especially for short or irregular investment periods."
          },
          {
            question: "How does compounding frequency affect returns?",
            answer:
              "Higher compounding frequency means interest is added more often, resulting in greater overall returns. Monthly compounding yields higher returns than quarterly or yearly compounding."
          },
          {
            question: "Is compound interest suitable for long-term investments?",
            answer:
              "Yes. Compound interest is ideal for long-term investments like retirement planning, fixed deposits, and mutual funds, as it allows your interest to earn interest over time."
          },
          {
            question: "What happens if the investment duration is short?",
            answer:
              "Even for short durations, compound interest benefits from precise date calculations. While returns may be lower, the accuracy ensures correct interest estimation."
          },
          {
            question: "How is compound interest different from simple interest?",
            answer:
              "Simple interest is calculated only on the principal, while compound interest includes interest on accumulated interest. Over time, compounding produces significantly higher returns."
          }
        ]}
      />

      {/* RELATED CALCULATORS */}
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
