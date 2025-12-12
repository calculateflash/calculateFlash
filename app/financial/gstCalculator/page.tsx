"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateGST } from "./lib/gstcalculate";

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
        description="Add or remove GST from an amount based on the selected GST percentage."
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
    </section>
  );
}
