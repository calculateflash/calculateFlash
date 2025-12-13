"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateAge } from "./lib/ageCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
const related = utilityRelatedCalculatorsMap.ageCalculator;

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState<string>("");

  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    daysToBirthday: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateAge({ birthDate });
    if ("error" in output) return;
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Age Calculator"
        description="Calculate your exact age in years, months, days, hours, minutes, and seconds. Also find your next birthday countdown."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <ActionsCard
            calculateLabel="Calculate Age"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Age (Years / Months / Days)"
            value={`${result.years} years, ${result.months} months, ${result.days} days`}
          />

          <ResultCard
            label="Total Age (Days)"
            value={result.totalDays}
          />

          <ResultCard
            label="Total Minutes"
            value={result.totalMinutes}
          />

          <ResultCard
            label="Total Seconds"
            value={result.totalSeconds}
          />

          <ResultCard
            label="Days Until Next Birthday"
            value={result.daysToBirthday}
          />

        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Age Is Calculated?"
        description="Age is calculated by finding the difference between your date of birth and today's date. This tool also provides additional details such as your total age in days, hours, minutes, and seconds."
        formula={`Age = Current Date - Date of Birth

Additionally:
• Total Days = difference in days
• Total Hours = Total Days × 24
• Total Minutes = Hours × 60
• Total Seconds = Minutes × 60

Next Birthday:
Days left = Next Birthday Date - Today`}
        steps={[
          "Select your date of birth from the date picker.",
          "The calculator determines the exact difference in years, months, and days.",
          "It also calculates total lived time in smaller units (hours, minutes, seconds).",
          "You’ll also see how many days are left until your next birthday."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "Does this age calculator show exact age?",
            answer:
              "Yes, it shows your age in years, months, days, hours, minutes, and seconds."
          },
          {
            question: "Does it calculate next birthday?",
            answer:
              "Yes. It shows how many days are left until your next birthday."
          },
          {
            question: "Is this calculator accurate?",
            answer:
              "Yes. It uses precise date and time calculations based on your device time zone."
          },
          {
            question: "Can I use this for official age verification?",
            answer:
              "The calculator is for reference. Official documents should be verified through government sources."
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
    </section>
  );
}
