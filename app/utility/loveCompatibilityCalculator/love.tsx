"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";

import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const related = utilityRelatedCalculatorsMap.loveCompatibilityCalculator;
import {
  calculateLoveCompatibility,
  LoveResult,
} from "./lib/loveCompatibilityCalculate";

export default function LoveCompatibilityCalculatorPage() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<LoveResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) {
      setError("Please enter both names");
      setResult(null);
      return;
    }

    setError("");
    setResult(calculateLoveCompatibility(name1, name2));
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Love Compatibility Calculator (%)"
        description="Check love compatibility percentage between two names instantly. A fun and popular way to see how strong your bond is."
      />

      {/* INPUT */}
      <Card className="p-6 mb-6 space-y-4">
        <input
          className="w-full border rounded-md p-3"
          placeholder="Enter first name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />

        <input
          className="w-full border rounded-md p-3"
          placeholder="Enter second name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <ActionsCard
          calculateLabel="Check Compatibility"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />
      </Card>

      {/* RESULT */}
      {result && (
        <div className="flex justify-center mb-10">
          <div className="bg-linear-to-r from-pink-500 to-red-500 text-white rounded-2xl p-10 text-center shadow-xl w-full md:w-2/3">
            <div className="text-5xl font-bold mb-2">
              {result.percentage}%
            </div>
            <div className="text-xl font-semibold mb-2">
              {result.label}
            </div>
            <p className="opacity-90">
              Compatibility between <b>{name1}</b> & <b>{name2}</b>
            </p>
          </div>
        </div>
      )}

      {/* EXPLANATION */}
      <CalculatorExplanation
        title="How Love Compatibility Is Calculated?"
        description="This love compatibility calculator compares letters in both names to generate a fun compatibility score."
        steps={[
          "Both names are cleaned and normalized.",
          "Common letters are identified between names.",
          "A numeric score is generated from character values.",
          "The score is converted into a percentage.",
          "The final result shows compatibility level.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "Is this love calculator accurate?",
            answer:
              "This calculator is designed for fun and entertainment, not scientific accuracy.",
          },
          {
            question: "Does name order matter?",
            answer:
              "No, the result remains the same regardless of name order.",
          },
          {
            question: "Can I use nicknames?",
            answer:
              "Yes, any name variation can be used.",
          },
          {
            question: "Why is my result always the same?",
            answer:
              "The calculator is deterministic so the same names always give the same result.",
          },
          {
            question: "Is this calculator free?",
            answer:
              "Yes, it is completely free to use.",
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
  calculatorKey="loveCompatibility"
  pageTitle="Love Compatibility Calculator"
  pageUrl={`${SITE_URL}/utility/love-compatibility-calculator`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "Love Compatibility Calculator", url: `${SITE_URL}/utility/love-compatibility-calculator` },
  ]}
/>

    </section>
  );
}
