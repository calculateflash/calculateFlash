"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateDateDifference } from "./lib/dateDifferenceCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

export default function DateDifferenceCalculatorPage() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalWeeks: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateDateDifference({ startDate, endDate });
    if ("error" in output) return;
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Date Difference Calculator"
        description="Find the exact difference between two dates in years, months, days, weeks, hours, minutes, and seconds."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">Start Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">End Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <ActionsCard
            calculateLabel="Calculate Difference"
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
            label="Years / Months / Days"
            value={`${result.years} years, ${result.months} months, ${result.days} days`}
          />

          <ResultCard label="Total Days" value={result.totalDays} />

          <ResultCard label="Total Weeks" value={result.totalWeeks} />

          <ResultCard label="Total Hours" value={result.totalHours} />

          <ResultCard label="Total Minutes" value={result.totalMinutes} />

          <ResultCard label="Total Seconds" value={result.totalSeconds} />

        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Date Difference Is Calculated?"
        description="This calculator measures the exact time span between two dates. It breaks the result into years, months, days, and also total days, hours, minutes, and seconds."
        formula={`Difference = End Date - Start Date

Breakdown:
• Years / Months / Days = Calendar calculation
• Total Days = Hours ÷ 24
• Total Hours = Minutes ÷ 60
• Total Minutes = Seconds ÷ 60
• Total Seconds = Milliseconds ÷ 1000`}
        steps={[
          "Select the start date.",
          "Select the end date.",
          "The calculator finds the exact calendar-based difference.",
          "It also converts the difference into total days, weeks, hours, minutes, and seconds."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "Can this calculate future dates?",
            answer: "Yes, you can select any future or past date."
          },
          {
            question: "Does this work across leap years?",
            answer: "Yes, leap years and month lengths are calculated accurately."
          },
          {
            question: "Why is months/days difference sometimes uneven?",
            answer: "Months have different lengths (28–31 days), so exact results vary."
          },
          {
            question: "Is this accurate across time zones?",
            answer: "Yes, it uses your system's local time zone for accuracy."
          }
        ]}
      />

    </section>
  );
}
