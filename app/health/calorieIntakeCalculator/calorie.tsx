"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateCalorieIntake } from "./lib/calorieIntakeCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.calorieIntakeCalculator;


export default function CalorieIntakeCalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [height, setHeight] = useState<number | "">(170);
  const [age, setAge] = useState<number | "">(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<string>("sedentary");

  const [result, setResult] = useState<{
    maintenance: number;
    loss: number;
    gain: number;
    bmr: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateCalorieIntake({
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
        title="Calorie Intake Calculator"
        description="Determine how many calories you need each day based on your BMR, activity level, and fitness goals. This calculator helps you estimate maintenance calories, recommended calories for weight loss, and calories required for healthy weight gain."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard label="Weight (kg)" value={weight} onChange={setWeight} />

          <InputCard label="Height (cm)" value={height} onChange={setHeight} />

          <InputCard label="Age (years)" value={age} onChange={setAge} />

          {/* Gender dropdown */}
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

          {/* Activity Level */}
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
            calculateLabel="Calculate Calories"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="Maintenance Calories" value={result.maintenance} />
          <ResultCard label="Weight Loss Calories" value={result.loss} />
          <ResultCard label="Weight Gain Calories" value={result.gain} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Daily Calorie Needs Are Calculated?"
        description="Your daily calorie requirement is determined by combining your Basal Metabolic Rate (BMR) and your activity level. BMR represents the calories your body needs at rest, while your activity level increases your total energy expenditure. This calculator uses the Mifflin–St Jeor formula to estimate BMR and then applies an activity multiplier to determine total calorie needs."
        formula={`Mifflin–St Jeor Formula:

For Men:
BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5

For Women:
BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161

Activity Multipliers:
Sedentary: × 1.2
Light: × 1.375
Moderate: × 1.55
Active: × 1.725
Very Active: × 1.9`}
        steps={[
          "Enter your weight, height, age, gender, and daily activity level.",
          "The calculator computes your BMR using the Mifflin–St Jeor equation.",
          "Your BMR is multiplied by an activity factor to estimate maintenance calories.",
          "A 500-calorie deficit is applied for weight loss recommendations.",
          "A 300-calorie surplus is added for healthy weight gain guidance."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What are maintenance calories?",
            answer:
              "Maintenance calories represent the number of calories you need to consume daily to maintain your current weight without gaining or losing fat."
          },
          {
            question: "How accurate is this calculation?",
            answer:
              "The Mifflin–St Jeor equation is considered one of the most accurate formulas for estimating BMR, but actual calorie needs can vary based on metabolism and lifestyle."
          },
          {
            question: "Why do I need fewer calories for weight loss?",
            answer:
              "Weight loss requires a calorie deficit. A reduction of around 500 calories per day typically results in steady and healthy weight loss."
          },
          {
            question: "Why does activity level matter?",
            answer:
              "The more active you are, the more calories your body burns. Activity multipliers adjust your calorie needs to match your lifestyle."
          },
          {
            question: "Can I use these calorie values to plan my diet?",
            answer:
              "Yes. These values provide a solid starting point for meal planning, macro calculation, and fitness routines. Adjustments may be needed based on progress and personal goals."
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
          <StructuredData
            calculatorKey="calorieIntake"
            pageTitle="Calorie Intake Calculator"
            pageUrl={`${SITE_URL}/health/calorie-intake-calculator`}
            breadcrumbs={[
              { name: "Home", url: SITE_URL },
              { name: "Health Calculators", url: `${SITE_URL}/health` },
              { name: "Calorie Intake Calculator", url: `${SITE_URL}/health/calorie-intake-calculator` },
            ]}
          />

    </section>
  );
}
