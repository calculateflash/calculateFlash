"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateLoanTenure } from "./lib/loanTenureCalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.loanTenureCalculator;

export default function LoanTenureCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number | "">(500000);
  const [annualRate, setAnnualRate] = useState<number | "">(10);
  const [emi, setEmi] = useState<number | "">(12000);

  const [result, setResult] = useState<{
    tenureMonths: number;
    tenureYears: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateLoanTenure({
      loanAmount: Number(loanAmount) || 0,
      annualRate: Number(annualRate) || 0,
      emi: Number(emi) || 0,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Loan Tenure Calculator"
        description="Calculate how long it will take to repay your loan based on EMI, interest rate, and loan amount. This tool determines the exact loan tenure in months and years. Useful for choosing the right EMI and optimizing repayment planning."
      />

      {/* INPUTS */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Loan Amount (₹)"
            value={loanAmount}
            onChange={setLoanAmount}
          />

          <InputCard
            label="Annual Interest Rate (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <InputCard
            label="Monthly EMI (₹)"
            value={emi}
            onChange={setEmi}
          />

          <ActionsCard
            calculateLabel="Calculate Tenure"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULTS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard
            label="Tenure (Months)"
            value={result.tenureMonths}
          />
          <ResultCard
            label="Tenure (Years)"
            value={result.tenureYears}
          />
        </div>
      )}

      <CalculatorExplanation
        title="How Loan Tenure Is Calculated?"
        description="Loan tenure is determined using EMI, interest rate, and principal amount."
        formula={`n = ln(EMI / (EMI – P×r)) / ln(1 + r)`}
        steps={[
          "P = Loan principal.",
          "r = Monthly interest rate.",
          "n = Tenure in months.",
          "Higher EMI reduces tenure, and vice versa."
        ]}
      />


      <CalculatorFAQ
        items={[
          {
            question: "How is loan tenure calculated using EMI and interest rate?",
            answer:
              "Loan tenure is calculated using a logarithmic formula that determines how long it will take to repay a loan based on the EMI, interest rate, and principal amount. The calculator replicates the exact mathematical method used by banks to compute the duration required to close a loan fully."
          },
          {
            question: "Does a higher EMI reduce the loan tenure?",
            answer:
              "Yes. A higher EMI increases the portion of principal repaid each month, resulting in a shorter loan tenure. This reduces your overall interest payment and helps you become debt-free faster. Even a small EMI increase can significantly shorten the tenure."
          },
          {
            question: "How does the interest rate affect loan tenure?",
            answer:
              "A higher interest rate increases the interest portion of your EMI, which means it takes longer to reduce the principal. As a result, your loan tenure becomes longer. Conversely, a lower interest rate shortens the tenure and reduces the total interest paid."
          },
          {
            question: "Can I shorten my loan tenure without increasing EMI?",
            answer:
              "Yes. Making part-prepayments directly reduces the outstanding principal, which decreases the remaining tenure even if EMI stays the same. Many borrowers use bonuses or savings to prepay and reduce their overall loan duration significantly."
          },
          {
            question: "Why does the tenure vary between different lenders?",
            answer:
              "Different banks may use slightly different rounding rules, compounding methods, or minimum EMI thresholds. Additionally, lender-specific policies and risk assessments can influence how they calculate the allowable EMI and resulting loan tenure."
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
