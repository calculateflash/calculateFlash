"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateBodyFat } from "./lib/bodyFatCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.bodyFatCalculator;

export default function BodyFatCalculatorPage() {
  const [height, setHeight] = useState<number | "">(170);
  const [neck, setNeck] = useState<number | "">(35);
  const [waist, setWaist] = useState<number | "">(80);
  const [hip, setHip] = useState<number | "">(90);
  const [gender, setGender] = useState<"male" | "female">("male");

  const [result, setResult] = useState<{
    bodyFat: number;
    category: string;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateBodyFat({
      heightCm: Number(height) || 0,
      neckCm: Number(neck) || 0,
      waistCm: Number(waist) || 0,
      hipCm: gender === "female" ? Number(hip) || 0 : undefined,
      gender
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">
       

      <CalculatorHeader
  title="Body Fat Percentage Calculator"
  description="Use this body fat calculator to estimate body fat percentage for men and women using the U.S. Navy Method. Understand your fitness level and body composition accurately."
/>


      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Height (cm)"
            value={height}
            onChange={setHeight}
          />

          <InputCard
            label="Neck (cm)"
            value={neck}
            onChange={setNeck}
          />

          <InputCard
            label="Waist (cm)"
            value={waist}
            onChange={setWaist}
          />

          {/* Hip for females */}
          {gender === "female" && (
            <InputCard
              label="Hip (cm)"
              value={hip}
              onChange={setHip}
            />
          )}

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
            calculateLabel="Calculate Body Fat %"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="Body Fat (%)" value={result.bodyFat} />
          <ResultCard label="Category" value={result.category} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Body Fat Percentage Is Calculated?"
        description="This calculator uses the U.S. Navy Method, a widely accepted formula for estimating body fat based on circumference measurements. It considers height, waist, neck, and hip size (for women) to estimate your fat level more accurately than BMI, especially for muscular individuals."
        formula={`U.S. Navy Body Fat Formula:

For Men:
Body Fat % = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76

For Women:
Body Fat % = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387`}
        steps={[
          "Measure your height, neck, waist, and hip (if female).",
          "Enter your measurements in centimeters.",
          "The calculator applies the Navy Method to estimate your body fat percentage.",
          "Your results are compared with fitness standards for your gender.",
          "Use the results to understand your fitness level and track progress."
        ]}
      />

        <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is Body Fat Percentage?
  </h2>

  <p>
    Body fat percentage represents the proportion of fat in your body compared
    to your total body weight. Unlike BMI, body fat percentage provides a more
    accurate picture of physical fitness and health.
  </p>

  <p>
    This body fat calculator uses the U.S. Navy Method, which relies on simple
    body measurements such as height, waist, neck, and hip (for women). It is
    widely used because it is practical, quick, and more accurate than weight-based
    formulas.
  </p>

  <p>
    Tracking body fat percentage can help monitor fitness progress, guide weight
    loss goals, and improve overall health awareness.
  </p>
</Card>


      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What is body fat percentage?",
            answer:
              "Body fat percentage measures how much of your body is made up of fat compared to everything else—muscle, bones, organs, and water."
          },
          {
            question: "Is the Navy Method accurate?",
            answer:
              "It is more accurate than BMI and is commonly used by fitness professionals, but advanced methods like DEXA scans are more precise."
          },
          {
            question: "Why do women need a hip measurement?",
            answer:
              "Women naturally store more fat in the hip region, so the Navy formula includes this measurement for a more accurate estimate."
          },
          {
            question: "What is a healthy body fat range?",
            answer:
              "Healthy ranges vary by gender: Men (10–20%), Women (18–28%). Athletes may have lower percentages."
          },
          {
            question: "Can body fat be reduced?",
            answer:
              "Yes. Exercise, proper diet, strength training, and a calorie deficit can help reduce body fat over time."
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
