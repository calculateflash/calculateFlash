"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateSimpleInterest } from "./lib/simplecalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard";
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const related = relatedCalculatorsMap.simpleInterest;

export default function SimpleInterestCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(10000);
  const [annualRate, setAnnualRate] = useState<number | "">(10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [result, setResult] = useState<{
    simpleInterest: number;
    totalAmount: number;
    years: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateSimpleInterest({
      principal: Number(principal) || 0,
      annualRate: Number(annualRate) || 0,
      startDate,
      endDate,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Simple Interest Calculator"
        description="Calculate simple interest based on exact dates instead of guessing years. This calculator helps you compute interest accurately for short-term loans, savings, and manual interest calculations using start and end dates."
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

          <ActionsCard
            calculateLabel="Calculate SI"
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
            label="Interest Period (Years)"
            value={result.years}
          />

          <ResultCard
            label="Simple Interest"
            value={result.simpleInterest}
          />

          <ResultCard
            label="Total Amount"
            value={result.totalAmount}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Simple Interest Is Calculated Using Dates?"
        description="This calculator computes simple interest based on the exact number of days between the selected start and end dates."
        formula={`SI = (P × R × T) / 100`}
        steps={[
          "P = Principal amount.",
          "R = Annual interest rate.",
          "T = Time period calculated from dates.",
          "T = Number of days between dates ÷ 365.",
          "Total Amount = P + Simple Interest.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is simple interest calculated using dates?",
            answer:
              "Simple interest is calculated by finding the exact number of days between the start and end dates, converting it into years by dividing by 365, and applying the standard simple interest formula. This method is more accurate than manually entering years."
          },
          {
            question: "Why is date-based calculation more accurate?",
            answer:
              "Date-based calculations use the exact duration of the loan or investment, avoiding approximation errors. This is especially useful for short-term loans, legal interest calculations, and financial settlements."
          },
          {
            question: "Does simple interest compound over time?",
            answer:
              "No. Simple interest is calculated only on the principal amount. The interest does not compound, making it predictable and easy to calculate."
          },
          {
            question: "Is simple interest still used by banks?",
            answer:
              "Banks commonly use compound interest for long-term loans, but simple interest is still applied for short-term loans, agricultural loans, subsidies, and manual interest calculations."
          },
          {
            question: "When should I use a simple interest calculator?",
            answer:
              "Simple interest calculators are ideal for short-term loans, educational purposes, legal interest checks, and situations where transparency and predictability are important."
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

      {/* STRUCTURED DATA */}
      <StructuredData
        calculatorKey="simpleInterest"
        pageTitle="Simple Interest Calculator"
        pageUrl={`${SITE_URL}/financial/simple-interest-calculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Financial Calculators", url: `${SITE_URL}/financial` },
          { name: "Simple Interest Calculator", url: `${SITE_URL}/financial/simple-interest-calculator` },
        ]}
      />

    </section>
  );
}
