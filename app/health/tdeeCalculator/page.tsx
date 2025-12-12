"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateTDEE } from "./lib/tdeeCalculate";

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
        description="Estimate your total daily energy expenditure."
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
    </section>
  );
}
