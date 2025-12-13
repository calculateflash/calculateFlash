"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import {
  calculateSalary,
  SalaryResult,
} from "./lib/salaryCalculate";

export default function SalaryBreakupCalculatorPage() {
  const [ctc, setCtc] = useState<string>("");
  const [pfPercent, setPfPercent] = useState<string>("12");
  const [professionalTax, setProfessionalTax] = useState<string>("2400");
  const [bonus, setBonus] = useState<string>("0");

  const [result, setResult] = useState<SalaryResult | null>(null);

  const handleCalculate = () => {
    const output = calculateSalary({
      ctc: Number(ctc),
      pfPercent: Number(pfPercent),
      professionalTax: Number(professionalTax),
      bonus: Number(bonus),
    });

    if ("error" in output) return;

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Salary Breakup Calculator (CTC → In-Hand)"
        description="Use this Salary Breakup Calculator to convert your CTC into monthly and annual in-hand salary. Calculate PF, professional tax, and deductions to know your actual take-home pay."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 gap-6">

          <div>
            <label className="block mb-2 font-medium">Annual CTC</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">PF Percentage (%)</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={pfPercent}
              onChange={(e) => setPfPercent(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Professional Tax (Annual)
            </label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={professionalTax}
              onChange={(e) => setProfessionalTax(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Annual Bonus</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            />
          </div>

          <ActionsCard
            calculateLabel="Calculate Salary"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard label="Basic Salary" value={result.basic} />
          <ResultCard label="HRA" value={result.hra} />
          <ResultCard
            label="Special Allowance"
            value={result.specialAllowance}
          />
          <ResultCard label="Provident Fund (PF)" value={result.pf} />
          <ResultCard
            label="Professional Tax"
            value={result.professionalTax}
          />
          <ResultCard
            label="Annual In-Hand Salary"
            value={result.annualInHand}
          />
          <ResultCard
            label="Monthly In-Hand Salary"
            value={result.monthlyInHand}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How Salary Breakup Is Calculated?"
        description="This calculator follows common Indian payroll structures to estimate in-hand salary from CTC, considering PF and professional tax deductions."
        formula={`Basic = 40% of CTC
HRA = 40% of Basic
PF = Basic × PF %
In-Hand = CTC − (PF + Professional Tax)`}
        steps={[
          "Enter your annual CTC.",
          "Adjust PF percentage if needed.",
          "Enter professional tax and bonus.",
          "Click calculate to view in-hand salary.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "Is this calculation exact?",
            answer:
              "It uses standard assumptions. Actual salary may vary by company policy.",
          },
          {
            question: "Is income tax included?",
            answer:
              "No. Income tax depends on your tax regime and deductions.",
          },
          {
            question: "Is bonus included in in-hand salary?",
            answer:
              "Bonus is usually paid separately and may be taxed differently.",
          },
        ]}
      />

    </section>
  );
}
