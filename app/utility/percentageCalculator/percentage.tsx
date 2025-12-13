"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";

import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const related = utilityRelatedCalculatorsMap.percentageCalculator;

import {
  calculatePercentage,
  calculatePercentageOf,
  calculatePercentageChange,
} from "./lib/percentageCalculate";

type Mode = "percentOf" | "isWhatPercent" | "change";

export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<Mode>("percentOf");

  const [value, setValue] = useState<number | "">(0);
  const [total, setTotal] = useState<number | "">(0);

  const [oldValue, setOldValue] = useState<number | "">(0);
  const [newValue, setNewValue] = useState<number | "">(0);

  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (mode === "percentOf") {
      if (!value || !total) return;
      setResult(
        calculatePercentageOf({
          value: Number(value),
          total: Number(total),
        })
      );
    }

    if (mode === "isWhatPercent") {
      if (!value || !total) return;
      setResult(
        calculatePercentage({
          value: Number(value),
          total: Number(total),
        })
      );
    }

    if (mode === "change") {
      if (!oldValue || !newValue) return;
      setResult(
        calculatePercentageChange({
          oldValue: Number(oldValue),
          newValue: Number(newValue),
        })
      );
    }
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Percentage Calculator"
        description="Calculate percentages easily including percentage of a number, what percent one value is of another, and percentage increase or decrease."
      />

      <Card className="p-6 mb-6 space-y-4">

        <select
          className="border p-2 rounded w-full"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as Mode);
            setResult(null);
          }}
        >
          <option value="percentOf">What is X% of Y?</option>
          <option value="isWhatPercent">X is what % of Y?</option>
          <option value="change">Percentage Increase / Decrease</option>
        </select>

        {mode !== "change" ? (
          <>
            <InputCard
              label={mode === "percentOf" ? "Percentage (%)" : "Value"}
              value={value}
              onChange={setValue}
            />
            <InputCard
              label="Total"
              value={total}
              onChange={setTotal}
            />
          </>
        ) : (
          <>
            <InputCard
              label="Old Value"
              value={oldValue}
              onChange={setOldValue}
            />
            <InputCard
              label="New Value"
              value={newValue}
              onChange={setNewValue}
            />
          </>
        )}

        <ActionsCard
          calculateLabel="Calculate Percentage"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />

      </Card>

      {result !== null && (
        <ResultCard
          label="Result"
          value={
            mode === "percentOf"
              ? `${result}`
              : `${result}%`
          }
        />
      )}

      <CalculatorExplanation
        title="How Percentage Is Calculated?"
        description="Percentage calculations are widely used in finance, education, business, and daily life to compare values and measure changes."
        steps={[
          "To find X% of Y, multiply Y by X and divide by 100.",
          "To find what percent X is of Y, divide X by Y and multiply by 100.",
          "To calculate percentage change, subtract old value from new value.",
          "Divide the change by old value and multiply by 100.",
          "A positive result indicates increase, negative indicates decrease.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is a percentage?",
            answer:
              "A percentage represents a number as a fraction of 100.",
          },
          {
            question: "Can percentage be negative?",
            answer:
              "Yes. A negative percentage indicates a decrease.",
          },
          {
            question: "Is this calculator accurate?",
            answer:
              "Yes. It uses standard mathematical formulas.",
          },
          {
            question: "Can I calculate discounts with this?",
            answer:
              "Yes. Percentage calculations are useful for discounts and offers.",
          },
          {
            question: "Is this calculator free?",
            answer:
              "Yes. It is completely free to use.",
          },
        ]}
      />
<section className="mt-12">
                      <h2 className="text-xl font-semibold mb-6">
                          Some other Calculators
                      </h2>
                
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {related.map((calc) => (
                          <CalculatorMiniCard key={calc.href} {...calc} />
                          ))}
                      </div>
                  </section>
                <StructuredData
  calculatorKey="percentage"
  pageTitle="Percentage Calculator"
  pageUrl={`${SITE_URL}/utility/percentage-calculator`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "Percentage Calculator", url: `${SITE_URL}/utility/percentage-calculator` },
  ]}
/>

    </section>
  );
}
