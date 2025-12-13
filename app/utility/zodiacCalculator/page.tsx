"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateZodiac, ZodiacResult } from "./lib/zodiacCalculate";

export default function ZodiacCalculatorPage() {
  const [dob, setDob] = useState<string>("");
  const [result, setResult] = useState<ZodiacResult | null>(null);

  const handleCalculate = () => {
    const output = calculateZodiac(dob);
    if ("error" in output) return;
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Zodiac Sign Calculator"
        description="Find your Zodiac sign instantly using your date of birth. Discover your sun sign based on accurate astrological date ranges."
      />

      {/* INPUT */}
      <Card className="p-6 mb-6">
        <div className="grid gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <ActionsCard
            calculateLabel="Find Zodiac Sign"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <div className="mt-10 flex justify-center">
          <div className="text-center">

            <h3 className="text-xl font-semibold mb-3">
              Your Zodiac Sign
            </h3>

            <div className="px-10 py-6 rounded-xl
                            bg-gradient-to-r
                            from-indigo-500 to-purple-600
                            text-white text-3xl font-bold shadow-lg">
              {result.sign}
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Date Range: {result.dateRange}
            </p>

          </div>
        </div>
      )}

      <CalculatorExplanation
        title="How Zodiac Signs Are Calculated?"
        description="Zodiac signs are determined based on the position of the sun at the time of your birth. Each sign corresponds to a specific date range in the calendar year."
        steps={[
          "Select your date of birth.",
          "The calculator checks the zodiac date ranges.",
          "Your sun sign is displayed instantly."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is a zodiac sign?",
            answer:
              "A zodiac sign represents the position of the sun at the time of your birth according to astrology."
          },
          {
            question: "Is this calculation accurate?",
            answer:
              "Yes, it follows standard Western astrology date ranges."
          },
          {
            question: "Does time of birth matter?",
            answer:
              "No, this calculator determines only your sun sign using your birth date."
          },
          {
            question: "Are zodiac signs scientifically proven?",
            answer:
              "Astrology is not a science, but zodiac signs are widely used in cultural and personal contexts."
          },
          {
            question: "Can zodiac signs change?",
            answer:
              "No, your zodiac sign is fixed based on your date of birth."
          }
        ]}
      />

    </section>
  );
}
