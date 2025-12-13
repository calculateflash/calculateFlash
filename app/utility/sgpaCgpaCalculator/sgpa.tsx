"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateCGPA } from "./lib/sgpaCgpaCalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
const related = utilityRelatedCalculatorsMap.sgpaCgpaCalculator;
export default function SGPAToCGPACalculatorPage() {
  const [sgpas, setSgpas] = useState<(number | "")[]>(["", "", "", ""]);
  const [result, setResult] = useState<{
    cgpa: number;
    percentage: number;
  } | null>(null);

  const handleChange = (index: number, value: string) => {
    const updated = [...sgpas];
    updated[index] = value === "" ? "" : Number(value);
    setSgpas(updated);
  };

  const addSemester = () => {
    setSgpas([...sgpas, ""]);
  };

  const handleCalculate = () => {
    const values = sgpas
      .filter((v) => v !== "")
      .map((v) => Number(v));

    if (values.length === 0) return;

    setResult(calculateCGPA(values));
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="SGPA to CGPA & Percentage Calculator"
        description="Convert your semester SGPA scores into CGPA and percentage easily. Useful for university results, resumes, and higher studies applications."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6 space-y-4">

        {sgpas.map((v, i) => (
          <input
            key={i}
            type="number"
            step="0.01"
            placeholder={`Semester ${i + 1} SGPA`}
            className="w-full border rounded-md p-2"
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}

        <button
          onClick={addSemester}
          className="text-blue-600 text-sm underline"
        >
          + Add another semester
        </button>

        <ActionsCard
          calculateLabel="Calculate CGPA"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />

      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ResultCard label="CGPA" value={result.cgpa} />
          <ResultCard
            label="Percentage (%)"
            value={result.percentage}
          />
        </div>
      )}

      {/* EXPLANATION */}
      <CalculatorExplanation
        title="How SGPA is Converted to CGPA?"
        description="Most universities calculate CGPA by averaging semester GPAs and convert CGPA into percentage using a fixed multiplier."
        steps={[
          "Enter your SGPA for each completed semester.",
          "All semester SGPAs are added together.",
          "The total is divided by the number of semesters to get CGPA.",
          "Percentage is calculated using the formula: CGPA × 9.5.",
          "The final CGPA and percentage are rounded to two decimals.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "What is SGPA?",
            answer:
              "SGPA stands for Semester Grade Point Average, calculated for a single semester.",
          },
          {
            question: "What is CGPA?",
            answer:
              "CGPA is the Cumulative Grade Point Average across all semesters.",
          },
          {
            question: "Why multiply CGPA by 9.5?",
            answer:
              "Many Indian universities use 9.5 as a standard conversion factor.",
          },
          {
            question: "Can I enter decimal SGPA values?",
            answer:
              "Yes, decimal values like 8.75 or 7.32 are supported.",
          },
          {
            question: "Is this conversion exact?",
            answer:
              "It is an estimate. Always check your university guidelines.",
          },
        ]}
      />
<section className="mt-12">
                      <h2 className="text-xl font-semibold mb-6">
                          Some other Calculators
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
