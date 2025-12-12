"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateMacros } from "./lib/macroCalculate";

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
        description="Calculate daily protein, fat, and carbohydrate targets based on your TDEE."
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
    </section>
  );
}
