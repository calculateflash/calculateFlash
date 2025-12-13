"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { InputCard } from "@/components/calculators/InputCard";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { calculateStressScore } from "./lib/stressScoreCalculate";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";


import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { healthRelatedCalculatorsMap } from "../lib/healthRelatedCalculators";
const related = healthRelatedCalculatorsMap.stressScoreCalculator;
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
export default function StressScoreCalculatorPage() {
  const [sleep, setSleep] = useState<number | "">(7);
  const [workHours, setWorkHours] = useState<number | "">(8);
  const [screenTime, setScreenTime] = useState<number | "">(4);

  const [activity, setActivity] = useState<
    "none" | "light" | "moderate" | "high"
  >("none");

  const [caffeine, setCaffeine] = useState<"low" | "medium" | "high">("low");

  const [mood, setMood] = useState<
    "happy" | "neutral" | "stressed" | "anxious"
  >("neutral");

  const [result, setResult] = useState<{
    stressScore: number;
    category: string;
  } | null>(null);

  const handleCalculate = () => {
    const output = calculateStressScore({
      sleep: Number(sleep),
      workHours: Number(workHours),
      screenTime: Number(screenTime),
      activity,
      caffeine,
      mood,
    });

    setResult(output);
  };

  return (
    <section className="max-w-3xl mx-auto">
      <StructuredData
        calculatorKey="stressScore"
        pageTitle="Stress Score Calculator"
        pageUrl={`${SITE_URL}/health/stress-score-calculator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Health Calculators", url: `${SITE_URL}/health` },
          { name: "Stress Score Calculator", url: `${SITE_URL}/health/stress-score-calculator` },
        ]}
      />

      <CalculatorHeader
        title="Stress Score Calculator"
        description="Estimate your daily stress score based on lifestyle factors such as sleep duration, work intensity, screen exposure, physical activity, caffeine levels, and overall mood."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputCard
            label="Sleep Duration (hours/day)"
            value={sleep}
            onChange={setSleep}
          />

          <InputCard
            label="Work Hours (per day)"
            value={workHours}
            onChange={setWorkHours}
          />

          <InputCard
            label="Screen Time (hours/day)"
            value={screenTime}
            onChange={setScreenTime}
          />

          {/* Activity */}
          <div>
            <label className="block mb-2 font-medium">Physical Activity</label>
            <select
              className="w-full border rounded-md p-2"
              value={activity}
              onChange={(e) =>
                setActivity(
                  e.target.value as "none" | "light" | "moderate" | "high"
                )
              }
            >
              <option value="none">None</option>
              <option value="light">Light (1–2 days/week)</option>
              <option value="moderate">Moderate (3–4 days/week)</option>
              <option value="high">High (5+ days/week)</option>
            </select>
          </div>

          {/* Caffeine */}
          <div>
            <label className="block mb-2 font-medium">Caffeine Intake</label>
            <select
              className="w-full border rounded-md p-2"
              value={caffeine}
              onChange={(e) =>
                setCaffeine(e.target.value as "low" | "medium" | "high")
              }
            >
              <option value="low">Low (0–1 cups/day)</option>
              <option value="medium">Medium (2–3 cups/day)</option>
              <option value="high">High (4+ cups/day)</option>
            </select>
          </div>

          {/* Mood */}
          <div>
            <label className="block mb-2 font-medium">Mood State</label>
            <select
              className="w-full border rounded-md p-2"
              value={mood}
              onChange={(e) =>
                setMood(
                  e.target.value as "happy" | "neutral" | "stressed" | "anxious"
                )
              }
            >
              <option value="happy">Happy / Relaxed</option>
              <option value="neutral">Neutral</option>
              <option value="stressed">Stressed</option>
              <option value="anxious">Anxious</option>
            </select>
          </div>

          <ActionsCard
            calculateLabel="Calculate Stress Score"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />

        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard label="Stress Score (0–100)" value={result.stressScore} />
          <ResultCard label="Category" value={result.category} />
        </div>
      )}

      {/* EXPLANATION SECTION */}
      <CalculatorExplanation
        title="How Stress Score Is Calculated?"
        description="Your stress score is based on lifestyle factors that influence your physical and mental well-being. Less sleep, long work hours, a sedentary lifestyle, more caffeine, extended screen time, and anxious mood can increase your stress."
        formula={`Sleep Impact:
Less sleep → Higher stress

Work Hours:
Longer work hours → Higher stress

Screen Time:
More screen exposure → Higher stress

Physical Activity:
More exercise → Lower stress

Caffeine Intake:
Higher caffeine → Higher stress

Mood Factor:
Happy → Low stress
Neutral → Mild stress
Stressed → High stress
Anxious → Very high stress`}
        steps={[
          "Enter your sleep duration.",
          "Enter your daily working hours.",
          "Provide your total screen time.",
          "Choose your physical activity level.",
          "Select your caffeine consumption amount.",
          "Choose your mood state for today.",
        ]}
      />

      {/* FAQ SECTION */}
      <CalculatorFAQ
        items={[
          {
            question: "Is a high stress score dangerous?",
            answer:
              "Scores above 60 indicate significant stress. Consider lifestyle adjustments and relaxation techniques."
          },
          {
            question: "Does sleep really reduce stress?",
            answer:
              "Yes. Proper sleep improves mood, mental clarity, and reduces anxiety."
          },
          {
            question: "Does caffeine increase stress?",
            answer:
              "Too much caffeine raises cortisol and may increase anxiety."
          },
          {
            question: "Can exercise reduce stress?",
            answer:
              "Yes. Physical activity releases endorphins which naturally lower stress."
          },
          {
            question: "Is stress score medically accurate?",
            answer:
              "It is an estimation tool, not a medical diagnosis. Consult a professional for severe stress symptoms."
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
