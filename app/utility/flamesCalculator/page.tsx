"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateFlames, FlamesResult } from "./lib/flamesCalculate";

const resultStyles: Record<FlamesResult, string> = {
  Friends: "from-blue-500 to-cyan-500",
  Love: "from-pink-500 to-red-500",
  Affection: "from-purple-500 to-fuchsia-500",
  Marriage: "from-emerald-500 to-green-500",
  Enemy: "from-gray-500 to-slate-600",
  Siblings: "from-yellow-500 to-orange-500",
};

const resultEmoji: Record<FlamesResult, string> = {
  Friends: "🤝",
  Love: "❤️",
  Affection: "💞",
  Marriage: "💍",
  Enemy: "⚔️",
  Siblings: "👫",
};

export default function FlamesCalculatorPage() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<FlamesResult | null>(null);

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) return;
    setResult(calculateFlames(name1, name2));
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="FLAMES Love Calculator"
        description="Find out your relationship status using the classic FLAMES game. Enter two names and discover whether your bond is friendship, love, marriage, or more."
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

        <ActionsCard
          calculateLabel="Check Relationship"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />
      </Card>

      {/* RESULT */}
      {result && (
        <div className="flex justify-center mb-8 animate-fade-in">
          <div
            className={`bg-gradient-to-r ${resultStyles[result]} text-white rounded-2xl p-10 text-center shadow-xl w-full md:w-2/3`}
          >
            <div className="text-5xl mb-4">{resultEmoji[result]}</div>
            <h2 className="text-3xl font-bold mb-2">{result}</h2>
            <p className="opacity-90">
              Relationship between <b>{name1}</b> and <b>{name2}</b>
            </p>
          </div>
        </div>
      )}

      {/* EXPLANATION */}
      <CalculatorExplanation
        title="How FLAMES Calculator Works?"
        description="FLAMES is a fun relationship game based on eliminating common letters between two names."
        steps={[
          "Remove common letters from both names.",
          "Count the remaining letters.",
          "Use the count to eliminate letters from FLAMES.",
          "Repeat until one letter remains.",
          "The remaining letter reveals the relationship.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "Is FLAMES calculator accurate?",
            answer:
              "FLAMES is a fun game, not a scientific relationship test.",
          },
          {
            question: "What does FLAMES stand for?",
            answer:
              "F – Friends, L – Love, A – Affection, M – Marriage, E – Enemy, S – Siblings.",
          },
          {
            question: "Does order of names matter?",
            answer:
              "No, the result remains the same regardless of name order.",
          },
          {
            question: "Can I use nicknames?",
            answer:
              "Yes, any names can be used for fun results.",
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
