"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard";
import { calculateEMI } from "./lib/emicalculate";

import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.emiCalculator;

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number | "">(500000);
  const [interestRate, setInterestRate] = useState<number | "">(10);
  const [loanTenure, setLoanTenure] = useState<number | "">(12);

  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateEMI({
    loanAmount: Number(loanAmount) || 0,
    annualRate: Number(interestRate) || 0,
    tenureMonths: Number(loanTenure) || 0,
  });

  setResult(output);
};


  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="EMI Calculator"
        description="Calculate your monthly EMI along with total interest and total payment over your loan period. This tool helps you understand how loan amount, interest rate, and tenure affect your EMI. Use it to plan home, personal, or car loans more effectively."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Loan Amount (₹)"
            value={loanAmount}
            onChange={setLoanAmount}
          />

          <InputCard
            label="Interest Rate (% per year)"
            value={interestRate}
            onChange={setInterestRate}
          />

          <InputCard
            label="Loan Tenure (Months)"
            value={loanTenure}
            onChange={setLoanTenure}
          />

          <ActionsCard
            calculateLabel="Calculate EMI"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARDS */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Monthly EMI"
            value={result.emi}
          />

          <ResultCard
            label="Total Interest"
            value={result.totalInterest}
          />

          <ResultCard
            label="Total Payment"
            value={result.totalPayment}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How EMI is Calculated?"
        description="EMI (Equated Monthly Installment) is calculated using the standard amortization formula used by all Indian banks."
        formula={`EMI = P × r × (1 + r)^n / [(1 + r)^n – 1]`}
        steps={[
          "P = Loan Amount",
          "r = Monthly Interest Rate (Annual Rate / 12 / 100)",
          "n = Loan tenure in months",
          "The EMI includes both principal and interest.",
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is EMI calculated for loans?",
            answer:
              "EMI is calculated using the amortization formula based on loan amount, interest rate, and loan tenure. The EMI stays constant, while the interest and principal portions vary each month. Banks follow the reducing balance method to determine interest distribution."
          },
          {
            question: "Why is the interest portion higher in the early months?",
            answer:
              "At the start of the loan, the outstanding principal is high, so the interest charged is also higher. Over time, as the principal reduces, the interest portion decreases and more of the EMI goes toward repaying the principal."
          },
          {
            question: "Can I reduce my EMI amount?",
            answer:
              "Yes. EMI can be reduced by increasing the loan tenure, refinancing to a lower interest rate, or making part-prepayments. All these methods reduce your financial burden depending on your repayment strategy."
          },
          {
            question: "Does increasing tenure lower EMI?",
            answer:
              "Increasing the tenure lowers your EMI significantly, making loan repayment easier. However, it increases the total interest paid over the life of the loan, making the loan costlier overall."
          },
          {
            question: "Is EMI the same for home, car, and personal loans?",
            answer:
              "The EMI formula is the same for all loan types, but interest rates and tenures differ. Personal loans typically have higher interest rates, while home loans offer longer tenures and lower monthly payments."
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
