"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateGST } from "./lib/gstcalculate";
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";

const related = relatedCalculatorsMap.gstCalculator;

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [gstRate, setGstRate] = useState<number | "">(18);

  const [result, setResult] = useState<{
    gstAdded: number;
    gstRemoved: number;
    netAmountAfterAdding: number;
    netAmountAfterRemoving: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateGST({
    amount: Number(amount) || 0,
    gstRate: Number(gstRate) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="GST Calculator"
        description="Quickly add or remove GST from any amount using this simple tool. Calculate GST for 5%, 12%, 18%, or 28% tax slabs instantly. Useful for businesses, billing, accounting, and invoicing with accurate GST computations."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Amount (₹)"
            value={amount}
            onChange={setAmount}
          />

          <InputCard
            label="GST Rate (%)"
            value={gstRate}
            onChange={setGstRate}
          />

          <ActionsCard
            calculateLabel="Calculate GST"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />
        </div>
      </Card>

      {/* RESULT SECTION */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="GST Added (Exclusive → Inclusive)"
            value={result.gstAdded}
          />

          <ResultCard
            label="Total After Adding GST"
            value={result.netAmountAfterAdding}
          />

          <ResultCard
            label="GST Removed (Inclusive → Exclusive)"
            value={result.gstRemoved}
          />

          <ResultCard
            label="Amount After Removing GST"
            value={result.netAmountAfterRemoving}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How GST is Calculated?"
        description="GST can either be added to the base amount or removed from a GST-inclusive amount. Both calculations follow standard tax rules."
        formula={`GST Added = Amount × (GST% / 100)
        Total After GST = Amount + GST Added

        GST Removed = Amount – [Amount ÷ (1 + GST%/100)]`}
        steps={[
          "Select whether you want to add or remove GST.",
          "Enter the amount and GST percentage.",
          "For addition, GST is applied on the base value.",
          "For removal, the formula extracts GST from an inclusive price."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is GST calculated on goods and services?",
            answer:
              "GST is calculated by applying the GST percentage (5%, 12%, 18%, or 28%) on the base amount. To add GST, the calculator multiplies the base value by the GST rate. To remove GST, it extracts the tax portion from an inclusive amount using reverse calculation."
          },
          {
            question: "How do I calculate GST from a GST-inclusive price?",
            answer:
              "A GST-inclusive amount already contains tax, so the calculator divides the value by (1 + GST/100) to find the base price. The difference between the inclusive amount and the base value is the GST portion. This method ensures precise tax extraction."
          },
          {
            question: "Which GST slab applies to my product or service?",
            answer:
              "India follows four main GST slabs: 5% for essentials, 12% for certain goods, 18% for most services and products, and 28% for luxury items. Always verify the correct slab using official GST guidelines or your accountant."
          },
          {
            question: "Why is GST added separately on some invoices?",
            answer:
              "Businesses registered under GST are required to show the tax amount clearly on invoices. Adding GST separately improves transparency, helps with input tax credit claims, and ensures compliance with government regulations."
          },
          {
            question: "Can GST calculation vary between states?",
            answer:
              "GST is a unified tax across India, so the calculation does not vary between states. However, the distribution between CGST, SGST, and IGST depends on whether the transaction is intra-state or inter-state."
          }
        ]}
      />
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-6">
          Related Financial Calculators
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
