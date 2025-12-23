"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.unitConverter;

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
        description="Use this unit converter to convert length, weight, temperature, and time units instantly using accurate standard conversion factors."
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

        <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is a Unit Converter?
  </h2>

  <p>
    A unit converter is a tool that helps convert measurements from one unit to
    another using standard conversion factors. It eliminates manual calculation
    errors and saves time.
  </p>

  <p>
    This unit converter supports common categories such as length, weight,
    temperature, and time. It converts values accurately by first converting
    them into a base unit and then into the target unit.
  </p>

  <p>
    Unit conversion is widely used in education, engineering, science, travel,
    cooking, and everyday calculations.
  </p>
</Card>


      <CalculatorFAQ
        items={[
  {
    question: "How accurate is this unit converter?",
    answer:
      "This unit converter uses internationally accepted conversion standards, ensuring accurate and reliable results for all supported unit types."
  },
  {
    question: "Which units can I convert using this tool?",
    answer:
      "You can convert commonly used units of length, weight, temperature, and time. The tool is designed for everyday and educational use."
  },
  {
    question: "Can I convert temperature units like Celsius and Fahrenheit?",
    answer:
      "Yes. This converter supports temperature conversion between Celsius, Fahrenheit, and Kelvin using standard scientific formulas."
  },
  {
    question: "Does the unit converter work without internet?",
    answer:
      "Once the page is loaded, all unit conversions work offline without requiring an internet connection."
  },
  {
    question: "Is this unit converter free to use?",
    answer:
      "Yes. This unit converter is completely free and can be used without any limits or sign-up."
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
