import { CalculatorCard } from "@/components/CardCalculator";

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

    </section>
  )
}
