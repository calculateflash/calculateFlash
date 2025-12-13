"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateDueDate } from "./lib/dueDateCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";


import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.dueDateCalculator;

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
        description="Estimate your baby's expected delivery date using Naegele’s Rule. By entering the first day of your last menstrual period (LMP), you can quickly predict your due date, current pregnancy week, and trimester."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LMP Input */}
          <div>
            <label className="block mb-2 font-medium">
              Last Menstrual Period (LMP)
            </label>
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

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Pregnancy Due Date Is Calculated?"
        description="The most widely used method to calculate your due date is Naegele’s Rule, which adds 280 days (40 weeks) to the first day of your last menstrual period (LMP). Since most pregnancies last around 38–40 weeks, this provides a reliable estimate of when your baby may arrive."
        formula={`Naegele’s Rule:
Due Date = LMP + 280 days (40 weeks)

Pregnancy Stages:
1st Trimester → Week 1 to Week 12
2nd Trimester → Week 13 to Week 26
3rd Trimester → Week 27 to Week 40`}
        steps={[
          "Select the first day of your last menstrual period (LMP).",
          "The calculator adds 280 days to determine your expected delivery date.",
          "It then calculates how many weeks pregnant you are today.",
          "Your pregnancy is categorized into a trimester based on week count.",
          "This helps track pregnancy progress and plan prenatal care."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "How accurate is the due date?",
            answer:
              "Due dates are estimates, not exact predictions. Only about 4% of babies are born on their exact due date, but most arrive within 2 weeks before or after."
          },
          {
            question: "Why is pregnancy counted from the LMP?",
            answer:
              "Ovulation and conception dates vary, but LMP is a clear, measurable starting point. Doctors use it to standardize pregnancy tracking."
          },
          {
            question: "What if my menstrual cycle is irregular?",
            answer:
              "The due date may be less accurate for irregular cycles. An ultrasound scan in early pregnancy can give a more precise estimate."
          },
          {
            question: "What trimester am I in?",
            answer:
              "The calculator shows your current trimester based on gestational age: 1st (1–12 weeks), 2nd (13–26 weeks), 3rd (27–40 weeks)."
          },
          {
            question: "Can my due date change later?",
            answer:
              "Yes. Doctors may adjust the due date after an early ultrasound if the growth measurements differ significantly from the initial estimate."
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
