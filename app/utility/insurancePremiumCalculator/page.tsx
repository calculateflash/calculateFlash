"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import {
  calculateInsurancePremium,
  InsuranceResult,
} from "./lib/insurancePremiumCalculate";

export default function InsurancePremiumCalculatorPage() {
  const [age, setAge] = useState<number | "">(30);
  const [sumInsured, setSumInsured] = useState<number | "">(500000);
  const [term, setTerm] = useState<number | "">(1);

  const [gender, setGender] = useState<"male" | "female">("male");
  const [policyType, setPolicyType] = useState<"individual" | "family">(
    "individual"
  );
  const [smoker, setSmoker] = useState(false);
  const [preExisting, setPreExisting] = useState(false);

  const [result, setResult] = useState<InsuranceResult | null>(null);

  const handleCalculate = () => {
    if (!age || !sumInsured || !term) return;

    setResult(
      calculateInsurancePremium({
        age: Number(age),
        gender,
        sumInsured: Number(sumInsured),
        policyType,
        smoker,
        preExisting,
        term: Number(term),
      })
    );
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Health Insurance Premium Calculator"
        description="Estimate your health insurance premium based on age, lifestyle, policy type, and sum insured. This helps you plan medical coverage and expenses effectively."
      />

      {/* INPUTS */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard label="Age" value={age} onChange={setAge} />
          <InputCard
            label="Sum Insured (₹)"
            value={sumInsured}
            onChange={setSumInsured}
          />
          <InputCard label="Policy Term (years)" value={term} onChange={setTerm} />

          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <select
              className="w-full border rounded-md p-2"
              value={gender}
              onChange={(e) =>
                setGender(e.target.value as "male" | "female")
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Policy Type</label>
            <select
              className="w-full border rounded-md p-2"
              value={policyType}
              onChange={(e) =>
                setPolicyType(e.target.value as "individual" | "family")
              }
            >
              <option value="individual">Individual</option>
              <option value="family">Family Floater</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={smoker}
              onChange={(e) => setSmoker(e.target.checked)}
            />
            <span>Smoker</span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={preExisting}
              onChange={(e) => setPreExisting(e.target.checked)}
            />
            <span>Pre-existing Diseases</span>
          </div>

          <ActionsCard
            calculateLabel="Calculate Premium"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ResultCard
            label="Yearly Premium (₹)"
            value={result.yearlyPremium}
          />
          <ResultCard
            label="Monthly Premium (₹)"
            value={result.monthlyPremium}
          />
        </div>
      )}

      {/* EXPLANATION */}
      <CalculatorExplanation
        title="How Insurance Premium Is Calculated?"
        description="Health insurance premiums are influenced by medical risk factors, coverage amount, and policy structure."
        steps={[
          "Base premium is calculated as a percentage of sum insured.",
          "Age increases medical risk and affects premium.",
          "Smoking and pre-existing diseases increase premium.",
          "Family policies cost more than individual policies.",
          "Final premium is adjusted using all risk factors.",
        ]}
      />

      {/* FAQ */}
      <CalculatorFAQ
        items={[
          {
            question: "Is this premium exact?",
            answer:
              "No. This is an estimate. Actual premiums depend on insurer rules.",
          },
          {
            question: "Why does age increase premium?",
            answer:
              "Higher age increases health risks and claim probability.",
          },
          {
            question: "Does smoking affect premium?",
            answer:
              "Yes. Smoking significantly increases health risks.",
          },
          {
            question: "What is a family floater?",
            answer:
              "A single policy covering multiple family members.",
          },
          {
            question: "Is this calculator suitable for planning?",
            answer:
              "Yes. It helps compare and plan insurance budgets.",
          },
        ]}
      />

    </section>
  );
}
