"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import {
  UnitCategory,
  units,
  convertUnit,
} from "./lib/unitConvert";

export default function UnitConverterPage() {
  const [category, setCategory] =
    useState<UnitCategory>("length");

  const [value, setValue] = useState<number | "">(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const availableUnits =
    category === "temperature"
      ? ["celsius", "fahrenheit", "kelvin"]
      : Object.keys(units[category]);

  const handleCalculate = () => {
    if (value === "" || !from || !to) return;
    setResult(convertUnit(category, Number(value), from, to));
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Unit Converter"
        description="Convert length, weight, temperature, and time units instantly. A simple and accurate unit converter for daily use."
      />

      <Card className="p-6 mb-6 space-y-4">

        <select
          className="border p-2 rounded w-full"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as UnitCategory);
            setFrom("");
            setTo("");
            setResult(null);
          }}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
          <option value="time">Time</option>
        </select>

        <input
          type="number"
          step="any"
          className="border p-2 rounded w-full"
          value={value}
          onChange={(e) =>
            setValue(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            className="border p-2 rounded"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">From</option>
            {availableUnits.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">To</option>
            {availableUnits.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <ActionsCard
          calculateLabel="Convert"
          exportLabel="Export PDF"
          onCalculate={handleCalculate}
          onExport={() => {}}
        />
      </Card>

      {result !== null && (
        <ResultCard label="Converted Value" value={result} />
      )}

      <CalculatorExplanation
        title="How Unit Conversion Works?"
        description="Unit conversion works by converting a value into a base unit and then converting it into the target unit."
        steps={[
          "Select the unit category.",
          "Enter the value you want to convert.",
          "Choose the source unit and target unit.",
          "The value is converted using standard conversion factors.",
          "Results are shown instantly and accurately.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "Is this unit converter accurate?",
            answer:
              "Yes, it uses internationally accepted conversion standards.",
          },
          {
            question: "Can I convert temperature units?",
            answer:
              "Yes, Celsius, Fahrenheit, and Kelvin are supported.",
          },
          {
            question: "Does this work offline?",
            answer:
              "Once loaded, it works without internet.",
          },
          {
            question: "Is this calculator free?",
            answer:
              "Yes, it is completely free to use.",
          },
          {
            question: "Can more units be added?",
            answer:
              "Yes, this converter is designed to be easily extended.",
          },
        ]}
      />

    </section>
  );
}
