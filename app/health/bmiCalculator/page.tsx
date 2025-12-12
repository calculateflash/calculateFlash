"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateBMI } from "./lib/bmiCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

export default function BMICalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [height, setHeight] = useState<number | "">(170);

  const [result, setResult] = useState<{
    bmi: number;
    category: string;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateBMI({
      weightKg: Number(weight) || 0,
      heightCm: Number(height) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="BMI Calculator"
        description="Use this calculator to find your Body Mass Index (BMI) and understand your weight category. BMI is a quick way to evaluate whether your current weight falls within a healthy range based on your height."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Weight (kg)"
            value={weight}
            onChange={setWeight}
          />

          <InputCard
            label="Height (cm)"
            value={height}
            onChange={setHeight}
          />

          <ActionsCard
            calculateLabel="Calculate BMI"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="BMI Value" value={result.bmi} />
          <ResultCard label="Category" value={result.category} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How BMI Is Calculated?"
        description="Body Mass Index (BMI) is a simple health indicator that compares your weight to your height. It helps determine whether you are underweight, normal weight, overweight, or obese. BMI is widely used by doctors, nutritionists, and fitness experts."
        formula={`BMI = Weight (kg) / [Height (m)]²

Where:
BMI < 18.5  → Underweight
BMI 18.5–24.9  → Normal
BMI 25–29.9  → Overweight
BMI ≥ 30  → Obese`}
        steps={[
          "Enter your weight in kilograms.",
          "Enter your height in centimeters.",
          "The calculator converts height from centimeters to meters.",
          "It then divides your weight by the square of your height (in meters).",
          "The result is compared against WHO BMI categories to determine your health status."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What is BMI?",
            answer:
              "BMI (Body Mass Index) is a number calculated from your height and weight that helps determine whether you are underweight, normal weight, overweight, or obese."
          },
          {
            question: "Is BMI accurate?",
            answer:
              "BMI is a useful screening tool, but it does not measure body fat directly. Athletes, muscular individuals, and pregnant women may get misleading results."
          },
          {
            question: "Does BMI vary by age or gender?",
            answer:
              "For adults, BMI interpretation is the same for all genders and ages. For children and teens, BMI percentiles are used instead."
          },
          {
            question: "What is a healthy BMI?",
            answer:
              "A BMI between 18.5 and 24.9 is considered healthy for most adults."
          },
          {
            question: "Should BMI be the only measure of health?",
            answer:
              "No. Other factors such as waist circumference, diet, activity level, and overall health should also be considered."
          }
        ]}
      />

    </section>
  );
}
