"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateBodyFat } from "./lib/bodyFatCalculate";

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
        description="Calculate your body fat percentage using the Navy Method."
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

          {/* Female-only Hip Input */}
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

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="Body Fat (%)" value={result.bodyFat} />
          <ResultCard label="Category" value={result.category} />
        </div>
      )}
    </section>
  );
}
