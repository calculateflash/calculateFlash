"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { calculateFD } from "./lib/fdCalculate";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";
const related = relatedCalculatorsMap.compoundCalculator;


export default function FDCalculatorPage() {
  const [principal, setPrincipal] = useState<number | "">(100000);
  const [annualRate, setAnnualRate] = useState<number | "">(6.5);
  const [years, setYears] = useState<number | "">(5);
  const [compounding, setCompounding] = useState<number>(4); // quarterly (default)

  const [result, setResult] = useState<{
    maturityValue: number;
    interestEarned: number;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateFD({
      principal: Number(principal) || 0,
      annualRate: Number(annualRate) || 0,
      years: Number(years) || 0,
      compounding,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="FD Calculator"
        description="Compute the maturity amount and interest earned on a Fixed Deposit. This calculator factors in principal, interest rate, duration, and compounding frequency. Compare FD returns across banks and plan secure, fixed-income investments easily."
      />

      {/* INPUT SECTION */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Principal Amount (₹)"
            value={principal}
            onChange={setPrincipal}
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

          {/* Compounding Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">Compounding Frequency</label>
            <select
              className="border rounded-md p-2 w-full"
              value={compounding}
              onChange={(e) => setCompounding(Number(e.target.value))}
            >
              <option value={1}>Yearly</option>
              <option value={2}>Half-Yearly</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate FD"
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
            label="Maturity Value"
            value={result.maturityValue}
          />

          <ResultCard
            label="Interest Earned"
            value={result.interestEarned}
          />

        </div>
      )}

      <CalculatorExplanation
        title="How FD Maturity Is Calculated?"
        description="Fixed Deposits grow at a fixed interest rate and compound periodically. Banks usually compound quarterly."
        formula={`Maturity Amount = P × (1 + r/n)^(n×t)`}
        steps={[
          "P = FD principal amount.",
          "r = Annual interest rate.",
          "n = Compounding frequency (monthly, quarterly, yearly).",
          "t = Time period in years.",
          "Interest is added back every compounding period."
        ]}
      />

      <CalculatorFAQ
        items={[
          {
            question: "How is the maturity amount calculated for a Fixed Deposit?",
            answer:
              "FD maturity is calculated using the compound interest formula based on the principal, interest rate, tenure, and compounding frequency. Banks typically compound interest quarterly, which increases the final amount compared to annual compounding. The calculator helps estimate the exact maturity value before investing."
          },
          {
            question: "Which compounding frequency gives the highest FD returns?",
            answer:
              "More frequent compounding—such as monthly or quarterly—gives higher returns because interest is added to the principal more often. Most banks use quarterly compounding, which increases maturity value compared to yearly compounding. Always check your bank’s compounding method before investing."
          },
          {
            question: "Are FD returns taxable in India?",
            answer:
              "Yes, FD interest is fully taxable under 'Income from Other Sources' as per your income tax slab. Banks deduct TDS if annual interest exceeds ₹40,000 (₹50,000 for senior citizens). However, tax-saving FDs with a 5-year lock-in offer tax benefits under Section 80C."
          },
          {
            question: "What is the minimum and maximum tenure for FD?",
            answer:
              "FDs typically start at a minimum tenure of 7 days and can go up to 10 years depending on the bank. Longer tenures generally provide higher interest rates. The tenure affects both the maturity amount and interest earned, making it an important decision before investing."
          },
          {
            question: "Can I withdraw my FD before maturity?",
            answer:
              "Yes, premature withdrawal is allowed but may attract a penalty of 0.5% to 1% on the interest rate. Some banks also revise the applicable interest based on the duration the FD was actually held. Use an FD calculator to understand the impact before withdrawing."
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
