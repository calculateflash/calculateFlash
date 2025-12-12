"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateDueDate } from "./lib/dueDateCalculate";

export default function PregnancyDueDateCalculatorPage() {
  const [lmp, setLmp] = useState<string>("");

  const [result, setResult] = useState<{
    dueDate: string;
    weeksPregnant: number;
    trimester: string;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateDueDate({
      lmp
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Pregnancy Due Date Calculator"
        description="Estimate your baby's expected delivery date using Naegele’s Rule."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* FIXED: Date input cannot use InputCard */}
          <div>
            <label className="block mb-2 font-medium">Last Menstrual Period (LMP)</label>
            <input
              type="date"
              value={lmp}
              onChange={(e) => setLmp(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>

          <ActionsCard
            calculateLabel="Calculate Due Date"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard label="Estimated Due Date" value={result.dueDate} />

          <ResultCard label="Weeks Pregnant" value={result.weeksPregnant} />

          <ResultCard label="Trimester" value={result.trimester} />

        </div>
      )}
    </section>
  );
}
