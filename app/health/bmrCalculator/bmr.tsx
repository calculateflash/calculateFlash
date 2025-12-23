"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateBMR } from "./lib/bmrCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.bmrCalculator;

export default function BMRCalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [height, setHeight] = useState<number | "">(170);
  const [age, setAge] = useState<number | "">(25);
  const [gender, setGender] = useState<"male" | "female">("male");

  const [result, setResult] = useState<{
    bmr: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateBMR({
      weightKg: Number(weight) || 0,
      heightCm: Number(height) || 0,
      age: Number(age) || 0,
      gender
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">
      

      <CalculatorHeader
  title="BMR Calculator"
  description="Use this BMR calculator to calculate your Basal Metabolic Rate and estimate how many calories your body burns at rest each day."
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

          <InputCard
            label="Age (years)"
            value={age}
            onChange={setAge}
          />

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

          <ActionsCard
            calculateLabel="Calculate BMR"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="BMR (Calories/day)" value={result.bmr} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How BMR Is Calculated?"
        description="Basal Metabolic Rate (BMR) represents the minimum number of calories your body requires to perform basic life-sustaining functions. It is calculated using factors like weight, height, age, and gender. BMR is an important starting point for determining your total daily calorie needs."
        formula={`Mifflin–St Jeor Formula:

For Men:
BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) + 5

For Women:
BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) – 161`}
        steps={[
          "Enter your weight, height, age, and gender.",
          "The calculator applies the Mifflin–St Jeor equation to estimate your resting calorie burn.",
          "Your BMR tells you how many calories you would burn in a day if you stayed at complete rest.",
          "This value is used to calculate TDEE (Total Daily Energy Expenditure) when combined with your activity level.",
          "Knowing your BMR helps you plan effective diet and fitness strategies."
        ]}
      />

        <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is BMR?
  </h2>

  <p>
    BMR (Basal Metabolic Rate) is the number of calories your body needs to
    maintain basic life functions such as breathing, blood circulation, and
    cell repair while at complete rest.
  </p>

  <p>
    This BMR calculator uses the Mifflin–St Jeor formula, which is considered one
    of the most accurate methods for estimating resting calorie needs in adults.
  </p>

  <p>
    Knowing your BMR helps you determine your daily calorie requirements when
    combined with activity levels, making it essential for weight loss,
    maintenance, or muscle gain planning.
  </p>
</Card>


      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "What is BMR?",
            answer:
              "BMR (Basal Metabolic Rate) is the number of calories your body requires at rest to maintain essential functions such as breathing, blood circulation, and cell production."
          },
          {
            question: "Why is BMR important?",
            answer:
              "BMR is the foundation for calculating your total daily calorie needs. It helps determine how many calories you should consume to lose, maintain, or gain weight."
          },
          {
            question: "How does gender affect BMR?",
            answer:
              "Men usually have a higher BMR due to greater muscle mass. The BMR formulas include gender adjustments to reflect this difference."
          },
          {
            question: "Does BMR change with age?",
            answer:
              "Yes. BMR generally decreases with age due to changes in muscle mass and metabolic activity."
          },
          {
            question: "Is BMR alone enough to plan my diet?",
            answer:
              "No. BMR tells you your resting calorie needs. To get accurate daily calorie requirements, you must multiply BMR by an activity factor (TDEE)."
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
