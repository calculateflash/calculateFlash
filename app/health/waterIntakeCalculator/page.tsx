"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateWaterIntake } from "./lib/waterIntakeCalculate";

export default function WaterIntakeCalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [age, setAge] = useState<number | "">(30);

  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<
    "sedentary" | "light" | "moderate" | "heavy"
  >("sedentary");

  const [climate, setClimate] = useState<"normal" | "hot" | "very_hot">(
    "normal"
  );

  const [pregnancy, setPregnancy] = useState<
    "none" | "pregnant" | "breastfeeding"
  >("none");

  const [result, setResult] = useState<{
    waterLiters: number;
    breakdown: {
      base: number;
      activity: number;
      climate: number;
      pregnancy: number;
    };
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateWaterIntake({
      weightKg: Number(weight) || 0,
      age: Number(age) || undefined,
      gender,
      activity,
      climate,
      pregnancy,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Water Intake Calculator"
        description="Estimate your daily water needs based on weight, activity, climate and life stage."
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
            label="Age (years)"
            value={age}
            onChange={setAge}
          />

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <select
              className="w-full border rounded-md p-2"
              value={gender}
              onChange={(e) =>
                setGender(e.target.value as "male" | "female")
              }
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
              onChange={(e) =>
                setActivity(
                  e.target.value as
                    | "sedentary"
                    | "light"
                    | "moderate"
                    | "heavy"
                )
              }
            >
              <option value="sedentary">Sedentary (little/no exercise)</option>
              <option value="light">Light (1–3 days/week)</option>
              <option value="moderate">Moderate (3–5 days/week)</option>
              <option value="heavy">Heavy (intense exercise)</option>
            </select>
          </div>

          {/* Climate */}
          <div>
            <label className="block mb-2 font-medium">Climate</label>
            <select
              className="w-full border rounded-md p-2"
              value={climate}
              onChange={(e) =>
                setClimate(
                  e.target.value as "normal" | "hot" | "very_hot"
                )
              }
            >
              <option value="normal">Normal</option>
              <option value="hot">Hot</option>
              <option value="very_hot">Very Hot / Humid</option>
            </select>
          </div>

          {/* Pregnancy / Breastfeeding */}
          <div>
            <label className="block mb-2 font-medium">Pregnancy / Breastfeeding</label>
            <select
              className="w-full border rounded-md p-2"
              value={pregnancy}
              onChange={(e) =>
                setPregnancy(
                  e.target.value as "none" | "pregnant" | "breastfeeding"
                )
              }
            >
              <option value="none">None</option>
              <option value="pregnant">Pregnant</option>
              <option value="breastfeeding">Breastfeeding</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate Water Intake"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Total Water (L/day)"
            value={result.waterLiters}
          />

          <ResultCard
            label="Breakdown (L)"
            value={`Base: ${result.breakdown.base} | Activity: ${result.breakdown.activity} | Climate: ${result.breakdown.climate} | Pregnancy: ${result.breakdown.pregnancy}`}
          />

        </div>
      )}
    </section>
  );
}
