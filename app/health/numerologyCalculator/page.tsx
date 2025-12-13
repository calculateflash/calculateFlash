"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import {
  calculateNumerology,
  NumerologyResult,
} from "./lib/numerologyCalculate";

export default function NumerologyCalculatorPage() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<NumerologyResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (!dob) {
      setError("Please select your date of birth");
      setResult(null);
      return;
    }
    setError("");
    setResult(calculateNumerology(dob));
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Numerology Calculator (Life Path Number)"
        description="Find your Life Path Number using numerology and discover what it reveals about your personality, strengths, and destiny."
      />

      {/* INPUT */}
      <Card className="p-6 mb-6 space-y-4">
        <input
          type="date"
          className="w-full border rounded-md p-3"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <ActionsCard
          calculateLabel="Calculate Life Path Number"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />
      </Card>

      {/* RESULT */}
      {result && (
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-2xl p-10 text-center shadow-xl w-full md:w-2/3">
            <div className="text-5xl font-bold mb-2">
              {result.lifePath}
            </div>
            <div className="text-2xl font-semibold mb-2">
              {result.meaning}
            </div>
            <p className="opacity-90 mb-4">
              Your Life Path Number reveals your core personality traits.
            </p>
            <ul className="text-sm opacity-95 space-y-1">
              {result.traits.map((t, i) => (
                <li key={i}>• {t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* EXPLANATION */}
      <CalculatorExplanation
        title="How Life Path Number Is Calculated?"
        description="Numerology uses your date of birth to calculate your Life Path Number, which represents your life's purpose."
        steps={[
          "All digits of your date of birth are added together.",
          "The sum is reduced to a single digit or master number (11, 22).",
          "The final number is your Life Path Number.",
          "Each number has a specific meaning and personality traits.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "What is a Life Path Number?",
            answer:
              "It is the most important number in numerology, representing your life purpose.",
          },
          {
            question: "Are master numbers special?",
            answer:
              "Yes. 11 and 22 are considered master numbers with higher spiritual meaning.",
          },
          {
            question: "Is numerology scientific?",
            answer:
              "Numerology is a belief-based system and used mainly for insight and entertainment.",
          },
          {
            question: "Can two people have the same Life Path Number?",
            answer:
              "Yes. Many people share the same Life Path Number.",
          },
          {
            question: "Is this calculator free?",
            answer:
              "Yes, it is completely free to use.",
          },
        ]}
      />

    </section>
  );
}
