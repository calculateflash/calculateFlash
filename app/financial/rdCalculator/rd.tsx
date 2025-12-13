"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateRD } from "./lib/rdcalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.rdCalculator;

export default function RDCalculatorPage() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number | "">(5000);
  const [annualRate, setAnnualRate] = useState<number | "">(7);
  const [years, setYears] = useState<number | "">(5);

  const [result, setResult] = useState<{
    maturityValue: number;
    totalDeposited: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateRD({
      monthlyDeposit: Number(monthlyDeposit) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="RD Calculator"
        description="Find the maturity value of your Recurring Deposit based on monthly contributions. This tool calculates compound interest on each deposit, helping you understand long-term savings growth. Ideal for planning disciplined monthly investments."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Monthly Deposit (₹)"
            value={monthlyDeposit}
            onChange={setMonthlyDeposit}
          />

          <InputCard
            label="Annual Interest Rate (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Time Period (Years)"
            value={years}
            onChange={setYears}
          />

          <ActionsCard
            calculateLabel="Calculate RD"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT SECTION */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Maturity Value"
            value={result.maturityValue}
          />

          <ResultCard
            label="Total Deposited"
            value={result.totalDeposited}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How RD Maturity Is Calculated?"
        description="Recurring Deposits allow you to deposit a fixed amount every month and earn compound interest."
        formula={`Maturity = P × [n + (n(n+1)/2 × r)]`}
        steps={[
          "P = Monthly RD instalment.",
          "n = Total months.",
          "r = Monthly interest rate.",
          "Interest is compounded quarterly for most banks."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is the maturity amount calculated for a Recurring Deposit?",
            answer:
              "RD maturity is calculated by applying compound interest on each monthly installment separately. Since every deposit is made at a different time, each one earns interest for a different duration. Banks typically use quarterly compounding, and the calculator helps estimate the total maturity value accurately."
          },
          {
            question: "Is RD a good investment for long-term savings?",
            answer:
              "RDs are a safe and reliable savings option with guaranteed returns, making them great for disciplined monthly saving. They are ideal for individuals seeking low-risk investments. While returns are lower than market-linked products, the security and predictability make RDs attractive for many savers."
          },
          {
            question: "Are RD returns taxable?",
            answer:
              "Yes, RD interest is fully taxable according to your income tax slab. Unlike FD, banks do not deduct TDS on RD interest, but you must report it in your income tax return. This is important to consider when planning long-term RD deposits."
          },
          {
            question: "What happens if an RD installment is missed?",
            answer:
              "Missing an RD installment may result in a penalty depending on the bank’s rules. Frequent misses may even reduce the maturity amount. Some banks allow delayed payments with penalties, while others extend the tenure. Always check your bank’s RD policy."
          },
          {
            question: "Can I close my RD before maturity?",
            answer:
              "Yes, premature closure is allowed but may lead to reduced interest rates and penalties. The final maturity amount is recalculated based on the actual tenure and bank’s penal interest policy. Use an RD calculator to understand the impact before closing."
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
