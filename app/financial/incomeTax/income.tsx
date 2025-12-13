"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateIncomeTax } from "./lib/incometax";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.incomeTax;

export default function IncomeTaxCalculatorPage() {
  const [income, setIncome] = useState<number | "">(800000);

  const [result, setResult] = useState<{
    taxableIncome: number;
    taxPayable: number;
    effectiveRate: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateIncomeTax({
    income: Number(income) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Income Tax Calculator"
        description="Estimate your tax liability under the latest income tax regime. This calculator breaks down taxes across slabs and shows your effective tax rate. Plan your finances better by understanding taxable income and deductions clearly."
      />

      {/* INPUT */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Annual Income (₹)"
            value={income}
            onChange={setIncome}
          />

          <ActionsCard
            calculateLabel="Calculate Tax"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />
        </div>
      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Taxable Income"
            value={result.taxableIncome}
          />

          <ResultCard
            label="Tax Payable"
            value={result.taxPayable}
          />

          <ResultCard
            label="Effective Tax Rate (%)"
            value={`${result.effectiveRate}%`}
          />
        </div>
      )}

      <CalculatorExplanation
        title="How Income Tax Is Calculated?"
        description="Income tax is calculated based on slab rates under the New Tax Regime. The more you earn, the higher the applicable tax rate."
        formula={`Tax = Σ (Income within slab × slab rate)`}
        steps={[
          "Enter your annual taxable income.",
          "Each slab has a different rate.",
          "Rebate under Section 87A makes tax zero for income ≤ ₹7,00,000.",
          "Effective tax rate = (Total Tax ÷ Income) × 100."
        ]}
      />
      
      <CalculatorFAQ
        items={[
          {
            question: "How is income tax calculated under the latest tax regime?",
            answer:
              "Income tax is calculated based on the slab rates defined by the government for the financial year. The calculator applies these slab rates to your taxable income and considers any rebates available. It gives you an estimate of total tax payable and your effective tax rate."
          },
          {
            question: "What is the difference between old and new tax regimes?",
            answer:
              "The old regime offers multiple deductions like HRA, 80C, 80D, and home loan benefits, while the new regime provides lower tax rates but fewer deductions. Depending on your tax-saving investments, one regime may offer lower tax liability than the other."
          },
          {
            question: "Who is eligible for rebate under Section 87A?",
            answer:
              "Individuals with taxable income up to ₹7,00,000 under the new tax regime are eligible for a full tax rebate. This means the tax payable becomes zero, although you still need to file an income tax return if your income exceeds the basic exemption limit."
          },
          {
            question: "Does income from all sources need to be included for tax calculation?",
            answer:
              "Yes. Salary, business income, rental income, capital gains, and interest income must all be included. The calculator provides an estimate, but the exact tax may vary depending on exemptions, deductions, or additional income sources."
          },
          {
            question: "How can I reduce my income tax legally?",
            answer:
              "You can reduce tax liability through investments like ELSS, PPF, NPS, life insurance, and other deductions under Section 80C. Opting for the regime that gives you the lowest tax, based on your deductions, also helps minimize overall tax burden."
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
