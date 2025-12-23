"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { calculateSIP } from "./lib/sipCalculate";
import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";
import type { Metadata } from "next";
import { calculatorSeoContentMap } from "../../financial/lib/financeCalculatorSeoContent";
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard";

import { relatedCalculatorsMap } from "../lib/financeRelatedCalculators";

const related = relatedCalculatorsMap.sipCalculator;

export const metadata: Metadata = {
  title: "SIP Calculator – Calculate Mutual Fund SIP Returns Online",
  description:
    "Free SIP Calculator to calculate future value, total investment, and estimated returns on monthly SIP investments in India.",
  alternates: {
    canonical: `${process.env.PUBLIC_SITE_URL}/financial/sipCalculator`,
  },
};


export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState<number | "">(5000);
  const [years, setYears] = useState<number | "">(10);
  const [annualRate, setAnnualRate] = useState<number | "">(12);

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;


  const [result, setResult] = useState<{
    futureValue: number;
    totalInvested: number;
    estimatedReturns: number;
  } | null>(null);

  const handleCalculate = () => {
  const output = calculateSIP({
    monthly: Number(monthly) || 0,
    years: Number(years) || 0,
    annualRate: Number(annualRate) || 0,
  });

  setResult(output);
};


  return (
    <>
    <section className="max-w-3xl mx-auto">
      <CalculatorHeader
  title="SIP Calculator (Mutual Fund SIP Calculator)"
  description="Use this SIP calculator to estimate future value, total investment, and returns from monthly mutual fund SIPs. Understand long-term compounding and plan systematic investments confidently."
/>


      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Monthly Investment (₹)"
            value={monthly}
            onChange={setMonthly}
          />

          <InputCard
            label="Investment Period (Years)"
            value={years}
            onChange={setYears}
          />

          <InputCard
            label="Expected Annual Return (%)"
            value={annualRate}
            onChange={setAnnualRate}
          />

          <ActionsCard
            calculateLabel="Calculate SIP"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD GRID */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ResultCard
            label="Total Invested"
            value={result.totalInvested}
          />

          <ResultCard
            label="Estimated Returns"
            value={result.estimatedReturns}
          />

          <ResultCard
            label="Future Value"
            value={result.futureValue}
          />

        </div>
      )}

      <CalculatorExplanation
        title={calculatorSeoContentMap.sipCalculator.title}
        description={calculatorSeoContentMap.sipCalculator.description}
        formula={calculatorSeoContentMap.sipCalculator.formula}
        steps={calculatorSeoContentMap.sipCalculator.steps}
      />

      <Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is SIP Investment?
  </h2>

  <p>
    SIP (Systematic Investment Plan) is a disciplined way of investing in mutual
    funds where you invest a fixed amount every month. SIPs help investors build
    long-term wealth by benefiting from compounding and rupee cost averaging.
  </p>

  <p>
    SIP calculators help estimate the future value of investments based on
    monthly contribution, expected returns, and time horizon. This allows
    investors to plan financial goals such as retirement, education, or wealth
    creation more effectively.
  </p>

  <p>
    Due to flexibility and long-term growth potential, SIPs are one of the most
    popular investment options in India.
  </p>
</Card>


      <CalculatorFAQ
        items={[
          {
            question: "How does a SIP calculator estimate the future value of investments?",
            answer:
              "A SIP calculator uses the compound interest formula to compute the future value of monthly investments. It considers your monthly contribution, expected annual returns, and investment duration. This helps you understand how consistent SIP investing builds long-term wealth through compounding."
          },
          {
            question: "Is SIP better than lump sum investment?",
            answer:
              "SIP is ideal for averaging out market fluctuations because you invest periodically. It reduces market timing risk and suits beginners who want disciplined investing. Lump sum works better when markets are undervalued and you have large capital available."
          },
          {
            question: "How much return can I expect from SIP investments?",
            answer:
              "SIP returns depend on market performance, fund type, and investment duration. Historically, equity SIPs deliver 10–14% annualized returns over long periods. The longer you stay invested, the greater the compounding impact on your overall returns."
          },
          {
            question: "Can I increase or decrease my SIP amount over time?",
            answer:
              "Yes, SIPs are flexible. You can increase your SIP amount through a top-up SIP or reduce it based on your financial situation. Adjusting SIP contributions helps align long-term goals like retirement, education, or wealth creation."
          },
          {
            question: "Is SIP safe for long-term financial goals?",
            answer:
              "SIP is considered one of the most stable long-term wealth-building strategies. By investing monthly, you benefit from rupee cost averaging and compound returns. Over 5–10 years, SIPs can outperform many traditional investment options."
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
    </>
  );
}
