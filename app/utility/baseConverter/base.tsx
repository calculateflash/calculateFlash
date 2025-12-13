"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { convertAll, BaseType } from "./lib/baseConverter";


import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
const related = utilityRelatedCalculatorsMap.baseConverter;

export default function BaseConverterPage() {
  const [input, setInput] = useState<string>("");
  const [sourceBase, setSourceBase] = useState<BaseType>("decimal");

  const [result, setResult] = useState<{
    binary: string;
    decimal: string;
    hex: string;
  } | null>(null);

  const handleConvert = () => {
    const output = convertAll(input, sourceBase);
    if ("error" in output) {
      setResult(null);
      return;
    }
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Binary / Decimal / Hex Converter"
        description="Enter a number and select its format. The calculator will convert it to all three number systems automatically."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 gap-6">

          <div>
            <label className="block mb-2 font-medium">Enter Value</label>
            <input
              className="w-full border rounded-md p-2"
              placeholder="Type a binary, decimal, or hex number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* SOURCE TYPE */}
          <div>
            <label className="block mb-2 font-medium">Source Number System</label>
            <select
              className="w-full border rounded-md p-2"
              value={sourceBase}
              onChange={(e) => setSourceBase(e.target.value as BaseType)}
            >
              <option value="binary">Binary</option>
              <option value="decimal">Decimal</option>
              <option value="hex">Hexadecimal</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Convert"
            exportLabel="Export PDF"
            onCalculate={handleConvert}
            onExport={() => {}}
          />
        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard label="Binary" value={result.binary} />
          <ResultCard label="Decimal" value={result.decimal} />
          <ResultCard label="Hexadecimal" value={result.hex} />

        </div>
      )}

      <CalculatorExplanation
        title="How Number Base Conversion Works?"
        description="Numbers can be represented in different numeral systems. This tool converts your input from the selected source system into binary, decimal, and hexadecimal."
        formula={`Binary → Decimal: parseInt(value, 2)
Decimal → Binary: number.toString(2)
Hex → Decimal: parseInt(value, 16)
Decimal → Hex: number.toString(16)`}
        steps={[
          "Enter the value you want to convert.",
          "Select whether it's in Binary, Decimal, or Hex.",
          "The calculator converts it to all three number systems."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "Does this detect input automatically?",
            answer: "No. You choose the source type for accuracy."
          },
          {
            question: "Are invalid inputs blocked?",
            answer: "Yes. The calculator validates based on the source you choose."
          },
          {
            question: "Does it support lowercase hex?",
            answer: "Yes, both lowercase and uppercase are accepted."
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
