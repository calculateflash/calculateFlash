"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { convertGPA } from "./lib/gpaCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";


import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const related = utilityRelatedCalculatorsMap.gpaConverter;
export default function GPAConverterPage() {
  const [gpa, setGpa] = useState<number | "">("");
  const [scale, setScale] = useState<4 | 5 | 10>(10);

  const [result, setResult] = useState<{
    percentage: number;
    formula: string;
  } | null>(null);

  const handleCalculate = () => {
    const gpaNumber = Number(gpa);

    const output = convertGPA({
      value: gpaNumber,
      scale,
    });

    if ("error" in output) return;
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="GPA / CGPA to Percentage Converter"
        description="Convert GPA or CGPA into percentage using standard formulas for 4, 5, and 10-point grading systems."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Enter GPA / CGPA"
            value={gpa}
            onChange={setGpa}
          />

          <div>
            <label className="block mb-2 font-medium">Select Scale</label>
            <select
              className="w-full border rounded-md p-2"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value) as 4 | 5 | 10)}
            >
              <option value={10}>10-Point Scale (India - CGPA)</option>
              <option value={4}>4-Point Scale (USA)</option>
              <option value={5}>5-Point Scale</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Convert to Percentage"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Percentage (%)"
            value={`${result.percentage}%`}
          />

          <ResultCard
            label="Conversion Formula"
            value={result.formula}
          />

        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How GPA Conversion Works?"
        description="Different countries use different grading scales. This tool converts GPA/CGPA to percentage using the most widely accepted formulas."
        formula={`10-Point Scale: Percentage = CGPA × 9.5
4-Point Scale: Percentage = (GPA ÷ 4) × 100
5-Point Scale: Percentage = (GPA ÷ 5) × 100`}
        steps={[
          "Enter your GPA/CGPA.",
          "Choose the correct scale used by your institution.",
          "The calculator applies the appropriate conversion formula.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "Can I enter decimal GPA like 8.75?",
            answer: "Yes, this calculator fully supports decimal GPA/CGPA values."
          },
          {
            question: "Is 9.5 multiplier official?",
            answer: "Yes, most Indian universities and CBSE use CGPA × 9.5."
          },
          {
            question: "What if my university uses a different scale?",
            answer: "Some institutions use custom rules; check your academic handbook for exact conversion."
          },
          {
            question: "Is this valid for job applications?",
            answer: "Yes, most companies accept standard GPA-to-percentage conversions."
          }
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
                  <StructuredData
  calculatorKey="gpaConverter"
  pageTitle="GPA Converter"
  pageUrl={`${SITE_URL}/utility/gpa-converter`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "GPA Converter", url: `${SITE_URL}/utility/gpa-converter` },
  ]}
/>

    </section>
  );
}
