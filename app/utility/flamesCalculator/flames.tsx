"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateFlames, FlamesResult } from "./lib/flamesCalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";

const related = utilityRelatedCalculatorsMap.flamesCalculator;
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
        description="The FLAMES calculator is a fun and popular way to check relationship compatibility between two names. Enter any two names to discover whether your connection represents Friendship, Love, Affection, Marriage, Enmity, or Siblings using the traditional FLAMES game."
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
            className={`bg-linear-to-r ${resultStyles[result]} text-white rounded-2xl p-10 text-center shadow-xl w-full md:w-2/3`}
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
        title="How Does the FLAMES Calculator Work?"
        description="The FLAMES calculator follows a traditional name-matching method that has been widely used for fun relationship predictions, especially among students and couples."
        steps={[
          "Both names are first written and common letters between them are removed.",
          "The remaining letters from both names are counted together.",
          "The total count is then used to eliminate letters from the word FLAMES in a circular pattern.",
          "This elimination process continues until only one letter remains.",
          "The final remaining letter represents the relationship outcome."
        ]}
      />
<Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-600 font-semibold">
    Is the FLAMES Calculator Reliable?
  </h2>

  <p>
    The FLAMES calculator is mainly used for entertainment and should be taken
    in a light-hearted way. Many people use it to have fun with friends, check
    name compatibility, or simply relive childhood games.
  </p>
  <p>
    Unlike random generators, this calculator follows the original FLAMES
    elimination method, making the result consistent for the same pair of names.
    However, it does not reflect real-life emotions or relationship outcomes.
  </p>

  <p>
    If you are curious about love compatibility or want to enjoy a nostalgic
    game, the FLAMES calculator is a simple and enjoyable way to explore
    relationship possibilities.
  </p>
</Card>



  {/* FAQ */}
  <CalculatorFAQ
    items={[
  {
    question: "What is a FLAMES calculator?",
    answer:
      "A FLAMES calculator is a fun relationship prediction tool that uses two names to determine compatibility based on the traditional FLAMES game."
  },
  {
    question: "Is the FLAMES calculator accurate?",
    answer:
      "No, the FLAMES calculator is not scientifically accurate. It is meant only for entertainment and nostalgic fun."
  },
  {
    question: "Can I use any names in the FLAMES calculator?",
    answer:
      "Yes, you can use real names, nicknames, or any words. The calculator works the same way for all inputs."
  },
  {
    question: "Does the order of names affect the FLAMES result?",
    answer:
      "No, changing the order of the names does not change the final FLAMES result."
  },
  {
    question: "Why is the FLAMES calculator popular?",
    answer:
      "The FLAMES calculator is popular because it is simple, fun, and commonly used as a playful way to explore relationship compatibility."
  }
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
    </section>
  );
}
