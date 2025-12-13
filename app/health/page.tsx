import { CalculatorCard } from "@/components/CardCalculator";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title:
    "Health Calculators – BMI, BMR, TDEE, Body Fat, Calories & More | CalculateFlash",
  description:
    "Use accurate health calculators including BMI, BMR, TDEE, ideal weight, body fat percentage, calorie intake, water intake, pregnancy due date, stress score, and more. CalculateFlash helps you track health metrics easily.",
  keywords: [
    "health calculator",
    "bmi calculator",
    "bmr calculator",
    "tdee calculator",
    "ideal weight calculator",
    "body fat calculator",
    "calorie intake calculator",
    "water intake calculator",
    "pregnancy due date calculator",
    "stress score calculator",
    "macro calculator",
    "online health tools",
  ],
  alternates: {
    canonical: `${SITE_URL}/health`,
  },
  openGraph: {
    title: "Health Calculators – BMI, BMR, Calories & Fitness Tools",
    description:
      "Calculate BMI, BMR, TDEE, calorie needs, body fat percentage, water intake, pregnancy due date and more using reliable health calculators.",
    url: `${SITE_URL}/health`,
    siteName: "CalculateFlash",
    type: "website",
  },
};

export default function HealthPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <CalculatorCard
        title="BMI Calculator"
        description="Check Body Mass Index & category."
        href="/health/bmiCalculator"
        gradient="from-orange-400 to-yellow-500"
      />

      <CalculatorCard
        title="BMR Calculator"
        description="Estimate how many calories your body burns"
        href="/health/bmrCalculator"
        gradient="from-emerald-500 to-teal-500"
      />

      <CalculatorCard
        title="TDEE Calculator"
        description="Estimate your total daily energy expenditure."
        href="/health/tdeeCalculator"
        gradient="from-blue-500 to-indigo-500"
      />

      <CalculatorCard
        title="Ideal Weight Calculator"
        description="Find your ideal body weight range."
        href="/health/idealWeightCalculator"
        gradient="from-purple-500 to-pink-500"
      />

      <CalculatorCard
        title="Body Fat Calculator"
        description="Calculate your body fat percentage."
        href="/health/bodyFatCalculator"
        gradient="from-rose-500 to-red-500"
      />

      <CalculatorCard
        title="Calorie Intake Calculator"
        description="Determine recommended daily calorie intake."
        href="/health/calorieIntakeCalculator"
        gradient="from-green-500 to-lime-500"
      />

      <CalculatorCard
        title="Water Intake Calculator"
        description="Find your ideal daily water intake."
        href="/health/waterIntakeCalculator"
        gradient="from-cyan-500 to-sky-500"
      />

      <CalculatorCard
        title="Macro Calculator"
        description="Get your daily protein, fat & carb targets."
        href="/health/macroCalculator"
        gradient="from-yellow-500 to-amber-500"
      />

      <CalculatorCard
        title="Pregnancy Due Date Calculator"
        description="Estimate your expected delivery date."
        href="/health/dueDateCalculator"
        gradient="from-teal-500 to-green-600"
      />
      <CalculatorCard
        title="Stress Score Calculator"
        description="Estimate your stress level based on sleep, work, screen time, activity, caffeine and mood."
        href="/health/stressScoreCalculator"
        gradient="from-purple-500 to-red-600"
      />
      <CalculatorCard
        title="Numerology Calculator"
        description="Find your Life Path Number and discover what it reveals about your personality."
        href="/health/numerologyCalculator"
        gradient="from-violet-500 to-indigo-600"
      />
      <CalculatorCard
        title="Unit Converter"
        description="Convert length, weight, temperature, and time units instantly."
        href="/health/unitConverter"
        gradient="from-blue-500 to-indigo-600"
      />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Health Calculators",
      description:
        "A collection of online health calculators including BMI, BMR, TDEE, body fat, calorie intake, water intake, pregnancy due date, stress score, and fitness tools.",
      url: `${SITE_URL}/health`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BMI Calculator",
          url: `${SITE_URL}/health/bmiCalculator`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BMR Calculator",
          url: `${SITE_URL}/health/bmrCalculator`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "TDEE Calculator",
          url: `${SITE_URL}/health/tdeeCalculator`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ideal Weight Calculator",
          url: `${SITE_URL}/health/idealWeightCalculator`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Body Fat Calculator",
          url: `${SITE_URL}/health/bodyFatCalculator`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Calorie Intake Calculator",
          url: `${SITE_URL}/health/calorieIntakeCalculator`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Water Intake Calculator",
          url: `${SITE_URL}/health/waterIntakeCalculator`,
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Macro Calculator",
          url: `${SITE_URL}/health/macroCalculator`,
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Pregnancy Due Date Calculator",
          url: `${SITE_URL}/health/dueDateCalculator`,
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Stress Score Calculator",
          url: `${SITE_URL}/health/stressScoreCalculator`,
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Numerology Calculator",
          url: `${SITE_URL}/health/numerologyCalculator`,
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Unit Converter",
          url: `${SITE_URL}/health/unitConverter`,
        },
      ],
    }),
  }}
/>

    </section>
  )
}
