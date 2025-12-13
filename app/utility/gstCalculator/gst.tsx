"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateGST, GSTMode } from "./lib/gstCalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";

import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const related = utilityRelatedCalculatorsMap.gstCalculator;
export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("18");
  const [mode, setMode] = useState<GSTMode>("exclusive");

  const [result, setResult] = useState<{
    baseAmount: number;
    taxAmount: number;
    totalAmount: number;
  } | null>(null);


  const handleCalculate = () => {
    const amt = Number(amount);
    const taxRate = Number(rate);

    if (isNaN(amt) || isNaN(taxRate)) return;

    const output = calculateGST({
      amount: amt,
      rate: taxRate,
      mode,
    });

    if ("error" in output) return;
    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="GST / VAT Calculator"
        description="Calculate GST or VAT amount easily for inclusive and exclusive prices.Easily find tax amount, base price, and total payable value using accurate GST/VAT formulas.
"
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 gap-6">

          <div>
            <label className="block mb-2 font-medium">Amount</label>
            <input
              type="number"
              step="any"
              className="w-full border rounded-md p-2"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">GST / VAT Rate (%)</label>
            <input
              type="number"
              step="any"
              className="w-full border rounded-md p-2"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Calculation Type</label>
            <select
              className="w-full border rounded-md p-2"
              value={mode}
              onChange={(e) => setMode(e.target.value as GSTMode)}
            >
              <option value="exclusive">Exclusive (Tax added)</option>
              <option value="inclusive">Inclusive (Tax included)</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate GST"
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
            label="Base Amount"
            value={result.baseAmount}
          />

          <ResultCard
            label="Tax Amount"
            value={result.taxAmount}
          />

          <ResultCard
            label="Total Amount"
            value={result.totalAmount}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How GST / VAT Is Calculated?"
        description="GST/VAT can be calculated in two ways: Exclusive (tax added to base price) or Inclusive (tax already included in price)."
        formula={`Exclusive:
Tax = Amount × Rate
Total = Amount + Tax

Inclusive:
Base = Amount ÷ (1 + Rate)
Tax = Amount − Base`}
        steps={[
          "Enter the amount.",
          "Enter the GST/VAT rate.",
          "Choose inclusive or exclusive.",
          "Click calculate to see tax breakdown."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "What is GST/VAT?",
            answer: "GST or VAT is a consumption tax applied to goods and services."
          },
          {
            question: "What is inclusive GST?",
            answer: "Inclusive means tax is already included in the price."
          },
          {
            question: "What is exclusive GST?",
            answer: "Exclusive means tax is added on top of the base price."
          },
          {
            question: "Is this calculator accurate?",
            answer: "Yes, it follows standard GST/VAT formulas used worldwide."
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
  calculatorKey="gstUtility"
  pageTitle="GST Calculator"
  pageUrl={`${SITE_URL}/utility/gst-calculator`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "GST Calculator", url: `${SITE_URL}/utility/gst-calculator` },
  ]}
/>

    </section>
  );
}
