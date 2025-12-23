import { CalculatorCard } from "@/components/CardCalculator";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title:
    "Health Calculators – BMI, BMR, TDEE, Calories & Wellness Tools | CalculateFlash",
  description:
    "Use accurate health calculators like BMI, BMR, TDEE, calorie intake, body fat percentage, water intake, pregnancy due date, stress score, and more to track and improve your health.",
  keywords: [
    "health calculator",
    "bmi calculator",
    "bmr calculator",
    "tdee calculator",
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
    title: "Health Calculators – BMI, Calories & Wellness Tools",
    description:
      "Calculate BMI, BMR, TDEE, calorie needs, body fat percentage, water intake, pregnancy due date and more using reliable health calculators.",
    url: `${SITE_URL}/health`,
    siteName: "CalculateFlash",
    type: "website",
  },
};

export default function HealthPage() {
  return (
    <>
      {/* ================= TOP DESCRIPTION (ALIGNED + PREMIUM) ================= */}
      <section className="mb-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Health Calculators for Better Wellness Tracking
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            CalculateFlash offers a wide range of <strong>health calculators</strong> designed
            to help you understand your body, nutrition, fitness, and overall wellness.
            These tools provide quick and reliable results using established health
            formulas and guidelines.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you want to calculate BMI, estimate daily calorie needs, track
            body fat percentage, plan water intake, or estimate pregnancy due dates,
            our calculators help you make informed health and lifestyle decisions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            <li>✔ BMI, BMR & TDEE calculations</li>
            <li>✔ Calorie, macro & nutrition planning</li>
            <li>✔ Body fat, ideal weight & hydration tracking</li>
            <li>✔ Pregnancy, stress & wellness analysis</li>
          </ul>
        </div>
      </section>

      {/* ================= HEALTH CALCULATOR GRID (UNCHANGED UI) ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CalculatorCard title="BMI Calculator" description="Check Body Mass Index & category." href="/health/bmiCalculator" gradient="from-orange-400 to-yellow-500" />
        <CalculatorCard title="BMR Calculator" description="Estimate how many calories your body burns." href="/health/bmrCalculator" gradient="from-emerald-500 to-teal-500" />
        <CalculatorCard title="TDEE Calculator" description="Estimate your total daily energy expenditure." href="/health/tdeeCalculator" gradient="from-blue-500 to-indigo-500" />
        <CalculatorCard title="Ideal Weight Calculator" description="Find your ideal body weight range." href="/health/idealWeightCalculator" gradient="from-purple-500 to-pink-500" />
        <CalculatorCard title="Body Fat Calculator" description="Calculate your body fat percentage." href="/health/bodyFatCalculator" gradient="from-rose-500 to-red-500" />
        <CalculatorCard title="Calorie Intake Calculator" description="Determine recommended daily calorie intake." href="/health/calorieIntakeCalculator" gradient="from-green-500 to-lime-500" />
        <CalculatorCard title="Water Intake Calculator" description="Find your ideal daily water intake." href="/health/waterIntakeCalculator" gradient="from-cyan-500 to-sky-500" />
        <CalculatorCard title="Macro Calculator" description="Get your daily protein, fat & carb targets." href="/health/macroCalculator" gradient="from-yellow-500 to-amber-500" />
        <CalculatorCard title="Pregnancy Due Date Calculator" description="Estimate your expected delivery date." href="/health/dueDateCalculator" gradient="from-teal-500 to-green-600" />
        <CalculatorCard title="Stress Score Calculator" description="Estimate stress based on lifestyle factors." href="/health/stressScoreCalculator" gradient="from-purple-500 to-red-600" />
        <CalculatorCard title="Numerology Calculator" description="Discover insights from your Life Path Number." href="/health/numerologyCalculator" gradient="from-violet-500 to-indigo-600" />
        <CalculatorCard title="Unit Converter" description="Convert length, weight, temperature & time." href="/health/unitConverter" gradient="from-blue-500 to-indigo-600" />
      </section>

      {/* ================= WHY USE HEALTH CALCULATORS ================= */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Why Use Health Calculators?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Health calculators help translate medical and fitness formulas into
            easy-to-understand values. Instead of guessing calorie needs, ideal
            weight, or hydration levels, these tools give you quick and accurate
            estimates.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            From fitness planning and weight management to pregnancy tracking and
            stress evaluation, health calculators support informed decisions and
            encourage healthier lifestyle choices.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Using online health calculators saves time, improves awareness, and
            helps you monitor progress consistently without complexity.
          </p>
        </div>
      </section>

      {/* ================= RELATED HEALTH CALCULATORS (SAME UI) ================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Related Health Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CalculatorCard title="Fitness Calculator" description="Plan workouts & calorie burn." href="/health/tdeeCalculator" gradient="from-sky-500 to-sky-700" />
          <CalculatorCard title="Nutrition Calculator" description="Balance daily nutrition & macros." href="/health/macroCalculator" gradient="from-fuchsia-500 to-fuchsia-700" />
          <CalculatorCard title="Wellness Calculator" description="Track stress & hydration levels." href="/health/stressScoreCalculator" gradient="from-orange-500 to-orange-700" />
        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Health Calculators", item: `${SITE_URL}/health` },
            ],
          }),
        }}
      />
    </>
  );
}
