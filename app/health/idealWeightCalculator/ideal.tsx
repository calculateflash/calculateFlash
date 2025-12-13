"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateIdealWeight } from "./lib/idealWeightCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.idealWeightCalculator;

export default function IdealWeightCalculatorPage() {
  const [height, setHeight] = useState<number | "">(170);
  const [gender, setGender] = useState<"male" | "female">("male");

  const [result, setResult] = useState<{
    idealWeight: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateIdealWeight({
      heightCm: Number(height) || 0,
      gender
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Ideal Weight Calculator"
        description="Estimate your healthy ideal body weight using height and gender-based formulas. This calculator helps you understand the weight range commonly recommended for good health and optimal body composition."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Height (cm)"
            value={height}
            onChange={setHeight}
          />

          {/* Gender Dropdown */}
          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <select
              className="w-full border rounded-md p-2"
              value={gender}
              onChange={(e) => setGender(e.target.value as "male" | "female")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate Ideal Weight"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="Ideal Weight (kg)" value={result.idealWeight} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Ideal Weight Is Calculated?"
        description="Ideal weight is calculated using formulas that estimate a healthy weight range based on your height and gender. These methods provide a guideline for understanding what weight is typically associated with better health, though individual factors may vary. This calculator uses the Devine and Hamwi formulas — common clinical standards."
        formula={`Common Ideal Weight Formulas:

Devine Formula:
Men: 50 kg + 2.3 kg for each inch over 5 ft
Women: 45.5 kg + 2.3 kg for each inch over 5 ft

Hamwi Formula:
Men: 48 kg + 2.7 kg per inch over 5 ft
Women: 45 kg + 2.2 kg per inch over 5 ft

(Your calculator applies height in centimeters and adjusts using metric conversions.)`}
        steps={[
          "Enter your height in centimeters.",
          "Choose your gender to apply the correct formula.",
          "The calculator converts your height to feet and inches.",
          "The Devine/Hamwi formula is applied to estimate your ideal body weight.",
          "You receive a clinically recognized healthy weight estimate."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What is ideal body weight?",
            answer:
              "Ideal body weight (IBW) represents a medically recommended weight range for your height and gender. It helps assess overall health and guides nutrition and fitness plans."
          },
          {
            question: "Is ideal weight the same for everyone of the same height?",
            answer:
              "No. Muscle mass, bone structure, genetics, and body composition influence your actual healthy weight. Ideal weight is a guideline, not a strict rule."
          },
          {
            question: "Which formula is most accurate?",
            answer:
              "Devine and Hamwi formulas are widely used in medical settings. They provide reasonable estimates, but athletic or muscular individuals may weigh more while still being healthy."
          },
          {
            question: "Why does gender affect ideal weight?",
            answer:
              "Men typically have higher muscle mass and bone density, leading to higher ideal weight ranges compared to women of the same height."
          },
          {
            question: "Can I use ideal weight to plan my fitness goals?",
            answer:
              "Yes, IBW is helpful for setting weight goals, but combining it with BMI, body fat percentage, and lifestyle factors gives a more complete picture."
          }
        ]}
      />
     <section className="mt-12">
                <h2 className="text-xl font-semibold mb-6">
                    Related Health Calculators
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
