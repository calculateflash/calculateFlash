"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateTDEE } from "./lib/tdeeCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.tdeeCalculator;

export default function TDEECalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [height, setHeight] = useState<number | "">(170);
  const [age, setAge] = useState<number | "">(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<string>("sedentary");

  const [result, setResult] = useState<{
    tdee: number;
    bmr: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateTDEE({
      weightKg: Number(weight) || 0,
      heightCm: Number(height) || 0,
      age: Number(age) || 0,
      gender,
      activity
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="TDEE Calculator"
        description="Estimate your Total Daily Energy Expenditure (TDEE), which represents the total number of calories you burn each day based on your Basal Metabolic Rate (BMR) and activity level. This helps you plan weight loss, muscle gain, or maintenance goals more accurately."
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
              <option value="sedentary">Sedentary (little exercise)</option>
              <option value="light">Light Exercise</option>
              <option value="moderate">Moderate Exercise</option>
              <option value="active">Active (daily exercise)</option>
              <option value="very_active">Very Active (intense training)</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate TDEE"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="TDEE (Calories/day)" value={result.tdee} />
          <ResultCard label="BMR (Calories/day)" value={result.bmr} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How TDEE Is Calculated?"
        description="Your Total Daily Energy Expenditure (TDEE) is the total number of calories you burn per day. It is calculated by determining your Basal Metabolic Rate (BMR) and multiplying it by an activity factor. TDEE reflects your daily calorie needs for maintaining your current weight."
        formula={`Step 1 — Calculate BMR (Mifflin–St Jeor Formula):
For Men:
BMR = 10 × weight + 6.25 × height − 5 × age + 5
For Women:
BMR = 10 × weight + 6.25 × height − 5 × age − 161

Step 2 — Apply Activity Multiplier:
Sedentary × 1.2
Light × 1.375
Moderate × 1.55
Active × 1.725
Very Active × 1.9`}
        steps={[
          "Enter your age, weight, height, gender, and activity level.",
          "The calculator first computes your BMR using the Mifflin–St Jeor equation.",
          "Your BMR is multiplied by an activity factor to estimate your TDEE.",
          "Your TDEE represents how many calories you burn per day including exercise and normal activity.",
          "TDEE helps you set calorie goals for maintenance, fat loss, or muscle gain."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What is TDEE?",
            answer:
              "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns each day, including rest, movement, and exercise."
          },
          {
            question: "Why is TDEE important?",
            answer:
              "Knowing your TDEE helps you set accurate calorie goals. Eating below TDEE leads to weight loss, while eating above it promotes weight gain."
          },
          {
            question: "Is TDEE more accurate than BMR?",
            answer:
              "Yes. BMR only measures calories burned at rest. TDEE includes your lifestyle and activity level, providing a more complete estimate."
          },
          {
            question: "Does TDEE change daily?",
            answer:
              "Yes. Sleep, stress, workouts, and movement can affect your energy expenditure. Use TDEE as an average estimate."
          },
          {
            question: "Can I use TDEE for dieting or bulking?",
            answer:
              "Absolutely. Eat 10–20% below TDEE for fat loss, or 10–20% above TDEE for muscle gain."
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
