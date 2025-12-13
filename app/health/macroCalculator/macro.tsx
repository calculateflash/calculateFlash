"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateMacros } from "./lib/macroCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.macroCalculator;

export default function MacroCalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [height, setHeight] = useState<number | "">(170);
  const [age, setAge] = useState<number | "">(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<string>("sedentary");
  const [goal, setGoal] = useState<"maintenance" | "loss" | "gain">("maintenance");

  const [result, setResult] = useState<{
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateMacros({
      weightKg: Number(weight) || 0,
      heightCm: Number(height) || 0,
      age: Number(age) || 0,
      gender,
      activity,
      goal
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Macro Calculator"
        description="Determine your daily protein, fat, and carbohydrate targets based on your BMR, activity level, and fitness goals. This calculator uses your TDEE to create a balanced macro split for maintenance, weight loss, or muscle gain."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard label="Weight (kg)" value={weight} onChange={setWeight} />

          <InputCard label="Height (cm)" value={height} onChange={setHeight} />

          <InputCard label="Age (years)" value={age} onChange={setAge} />

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

          {/* Activity Dropdown */}
          <div>
            <label className="block mb-2 font-medium">Activity Level</label>
            <select
              className="w-full border rounded-md p-2"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Exercise</option>
              <option value="moderate">Moderate Exercise</option>
              <option value="active">Active</option>
              <option value="very_active">Very Active</option>
            </select>
          </div>

          {/* Goal Dropdown */}
          <div>
            <label className="block mb-2 font-medium">Goal</label>
            <select
              className="w-full border rounded-md p-2"
              value={goal}
              onChange={(e) => setGoal(e.target.value as typeof goal)}
            >
              <option value="maintenance">Maintenance</option>
              <option value="loss">Weight Loss</option>
              <option value="gain">Weight Gain</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate Macros"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard label="Daily Calories" value={result.calories} />

          <ResultCard label="Protein (g/day)" value={result.protein} />

          <ResultCard label="Fat (g/day)" value={result.fat} />

          <ResultCard label="Carbs (g/day)" value={result.carbs} />

        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Macro Needs Are Calculated?"
        description="Your macro requirements are determined using your Basal Metabolic Rate (BMR), your activity level, and your fitness goal. Once your Total Daily Energy Expenditure (TDEE) is calculated, the calories are divided into protein, fat, and carbs based on scientifically recommended macro ratios."
        formula={`Step 1 — Calculate BMR (Mifflin–St Jeor Formula):
Men: BMR = 10 × weight + 6.25 × height − 5 × age + 5
Women: BMR = 10 × weight + 6.25 × height − 5 × age − 161

Step 2 — Apply Activity Multiplier:
Sedentary × 1.2
Light × 1.375
Moderate × 1.55
Active × 1.725
Very Active × 1.9

Step 3 — Distribute Macros by Goal:
Maintenance: Protein 30%, Fat 25%, Carbs 45%
Weight Loss: Protein 35%, Fat 25%, Carbs 40%
Weight Gain: Protein 30%, Fat 30%, Carbs 40%`}
        steps={[
          "Enter your height, weight, age, gender, and activity level.",
          "The calculator determines your BMR using the Mifflin–St Jeor formula.",
          "Your activity level is applied to estimate TDEE (total calories burned daily).",
          "Your chosen goal adjusts your calorie target up or down.",
          "Your calories are split into recommended grams of protein, fat, and carbohydrates."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What are macros?",
            answer:
              "Macros (macronutrients) are protein, fat, and carbohydrates—nutrients that provide energy and support essential body functions."
          },
          {
            question: "Why do fitness goals change macro ratios?",
            answer:
              "Muscle gain requires more calories and protein, while weight loss usually increases protein and lowers carb intake to preserve lean muscle."
          },
          {
            question: "Is this macro split suitable for everyone?",
            answer:
              "These ratios work for most people, but athletes, bodybuilders, and individuals with medical conditions may need personalized adjustments."
          },
          {
            question: "Should I track macros daily?",
            answer:
              "Tracking macros helps improve nutrition accuracy, especially for fat loss or muscle building."
          },
          {
            question: "How accurate is this macro calculator?",
            answer:
              "It provides a reliable estimate based on scientific formulas, but individual metabolism can vary."
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
