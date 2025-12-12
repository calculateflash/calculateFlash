"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateIdealWeight } from "./lib/idealWeightCalculate";

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
        description="Find your ideal body weight based on height and gender."
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
    </section>
  );
}
