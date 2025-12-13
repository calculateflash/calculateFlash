"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateWaterIntake } from "./lib/waterIntakeCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";
import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.waterIntakeCalculator;

import StructuredData from "@/lib/StructuredData";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function WaterIntakeCalculatorPage() {
  const [weight, setWeight] = useState<number | "">(70);
  const [age, setAge] = useState<number | "">(30);

  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<
    "sedentary" | "light" | "moderate" | "heavy"
  >("sedentary");

  const [climate, setClimate] = useState<"normal" | "hot" | "very_hot">(
    "normal"
  );

  const [pregnancy, setPregnancy] = useState<
    "none" | "pregnant" | "breastfeeding"
  >("none");

  const [result, setResult] = useState<{
    waterLiters: number;
    breakdown: {
      base: number;
      activity: number;
      climate: number;
      pregnancy: number;
    };
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateWaterIntake({
      weightKg: Number(weight) || 0,
      age: Number(age) || undefined,
      gender,
      activity,
      climate,
      pregnancy,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">
      <StructuredData
        calculatorKey="waterIntake"
        pageTitle="Water Intake Calculator"
        pageUrl={`${SITE_URL}/health/water-intake-calculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Health Calculators", url: `${SITE_URL}/health` },
          { name: "Water Intake Calculator", url: `${SITE_URL}/health/water-intake-calculator` },
        ]}
      />

      <CalculatorHeader
        title="Water Intake Calculator"
        description="Estimate your optimal daily water intake based on your weight, activity level, climate, and personal needs. Proper hydration supports energy levels, digestion, temperature regulation, and overall health."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Weight (kg)"
            value={weight}
            onChange={setWeight}
          />

          <InputCard
            label="Age (years)"
            value={age}
            onChange={setAge}
          />

          {/* Gender */}
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

          {/* Activity Level */}
          <div>
            <label className="block mb-2 font-medium">Activity Level</label>
            <select
              className="w-full border rounded-md p-2"
              value={activity}
              onChange={(e) =>
                setActivity(
                  e.target.value as
                    | "sedentary"
                    | "light"
                    | "moderate"
                    | "heavy"
                )
              }
            >
              <option value="sedentary">Sedentary (little/no exercise)</option>
              <option value="light">Light (1–3 days/week)</option>
              <option value="moderate">Moderate (3–5 days/week)</option>
              <option value="heavy">Heavy (intense exercise)</option>
            </select>
          </div>

          {/* Climate */}
          <div>
            <label className="block mb-2 font-medium">Climate</label>
            <select
              className="w-full border rounded-md p-2"
              value={climate}
              onChange={(e) =>
                setClimate(
                  e.target.value as "normal" | "hot" | "very_hot"
                )
              }
            >
              <option value="normal">Normal</option>
              <option value="hot">Hot</option>
              <option value="very_hot">Very Hot / Humid</option>
            </select>
          </div>

          {/* Pregnancy / Breastfeeding */}
          <div>
            <label className="block mb-2 font-medium">Pregnancy / Breastfeeding</label>
            <select
              className="w-full border rounded-md p-2"
              value={pregnancy}
              onChange={(e) =>
                setPregnancy(
                  e.target.value as "none" | "pregnant" | "breastfeeding"
                )
              }
            >
              <option value="none">None</option>
              <option value="pregnant">Pregnant</option>
              <option value="breastfeeding">Breastfeeding</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate Water Intake"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT CARD */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ResultCard
            label="Total Water (L/day)"
            value={result.waterLiters}
          />

          <ResultCard
            label="Breakdown (L)"
            value={`Base: ${result.breakdown.base} | Activity: ${result.breakdown.activity} | Climate: ${result.breakdown.climate} | Pregnancy: ${result.breakdown.pregnancy}`}
          />

        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Water Intake Is Calculated?"
        description="Daily hydration needs depend on your weight, physical activity, environmental temperature, and biological factors such as pregnancy or breastfeeding. This calculator uses scientifically supported hydration multipliers to give a personalized water recommendation."
        formula={`Base Hydration:
Men ≈ weight × 0.035 L
Women ≈ weight × 0.033 L

Activity Additions:
Light: +0.3 L
Moderate: +0.6 L
Heavy: +1.0 L

Climate Additions:
Hot: +0.3 L
Very Hot: +0.5 L

Pregnancy:
Pregnant: +0.5 L
Breastfeeding: +0.75 L`}
        steps={[
          "Enter your weight and age, then select gender.",
          "Choose your daily activity level to account for sweat and exertion.",
          "Select your climate since hotter weather increases hydration needs.",
          "If applicable, choose pregnancy or breastfeeding for additional hydration.",
          "The calculator adds your base water requirement and all adjustments to estimate your ideal daily intake."
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "Is drinking more water always better?",
            answer:
              "Not necessarily. Excessive intake can lead to overhydration. Drink according to your body's needs and avoid forcing extreme volumes."
          },
          {
            question: "Why does weight affect water needs?",
            answer:
              "Larger bodies contain more tissue that requires hydration, so water needs increase proportionally with weight."
          },
          {
            question: "Does age change hydration needs?",
            answer:
              "Yes. Older adults may need slightly less due to lower metabolic activity, but staying hydrated is critical for all ages."
          },
          {
            question: "Do I need more water if I exercise?",
            answer:
              "Yes. Physical activity increases sweat loss and requires additional hydration to maintain performance and health."
          },
          {
            question: "Should pregnant or breastfeeding women drink more water?",
            answer:
              "Yes. Pregnancy and breastfeeding increase hydration requirements to support fetal development and milk production."
          }
        ]}
      />

       <section className="mt-12">
                      <h2 className="text-xl font-semibold mb-6">
                          Related Health Calculators
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
