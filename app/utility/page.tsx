import { CalculatorCard } from "@/components/CardCalculator";

export default function HealthPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<CalculatorCard
  title="Date Difference Calculator"
  description="Calculate days, weeks, months between two dates."
  href="/utility/dateDifferenceCalculator"
  gradient="from-blue-500 to-cyan-500"
/>

<CalculatorCard
  title="GPA / CGPA to Percentage"
  description="Convert GPA or CGPA into percentage instantly."
  href="/utility/gpaConverter"
  gradient="from-green-500 to-emerald-500"
/>


<CalculatorCard
  title="QR Code Generator"
  description="Generate QR codes for text, URLs, or contact info."
  href="/utility/qrCodeGenerator"
  gradient="from-teal-500 to-green-500"
/>

<CalculatorCard
  title="Number Base Converter"
  description="Convert Binary ↔ Decimal ↔ Hexadecimal."
  href="/utility/baseConverter"
  gradient="from-gray-700 to-gray-900"
/>

<CalculatorCard
  title="GST / VAT Calculator"
  description="Calculate tax, reverse tax, and gross amount."
  href="/utility/gstCalculator"
  gradient="from-amber-500 to-orange-600"
/>

<CalculatorCard
  title="Salary Breakup Calculator"
  description="Convert CTC to in-hand salary with deductions."
  href="/utility/salaryBreakupCalculator"
  gradient="from-pink-500 to-rose-600"
/>

<CalculatorCard
  title="Matrix Calculator"
  description="Perform matrix operations"
  href="/utility/matrixCalculator"
  gradient="from-blue-600 to-indigo-700"
/>
<CalculatorCard
  title="DOB to Zodiac Calculator"
  description="Find your zodiac sign from your date of birth."
  href="/utility/zodiacCalculator"
  gradient="from-yellow-400 to-orange-500"
/>
<CalculatorCard
  title="Equation Solver"
  description="Solve algebraic equations instantly."
  href="/utility/equationSolver"
  gradient="from-purple-600 to-pink-600"
/>

<CalculatorCard
  title="Insurance Premium Calculator"
  description="Estimate insurance premium based on age coverage."
  href="/utility/insurancePremiumCalculator"
  gradient="from-sky-500 to-blue-600"
/>
<CalculatorCard
  title="Age Calculator"
  description="Find your exact age in years, months, days, hours, minutes & seconds."
  href="/utility/ageCalculator"
  gradient="from-indigo-500 to-purple-500"
/>


<CalculatorCard
  title="Percentage Calculator"
  description="Calculate percentages, discounts & percentage change."
  href="/utility/percentageCalculator"
  gradient="from-orange-500 to-yellow-500"
/>

<CalculatorCard
  title="SGPA to CGPA Calculator"
  description="Convert semester SGPA scores into CGPA and percentage instantly"
  href="/utility/sgpaCgpaCalculator"
  gradient="from-emerald-500 to-teal-500"
/>
<CalculatorCard
  title="FLAMES Calculator"
  description="Check your relationship status using the fun and popular FLAMES love game."
  href="/utility/flamesCalculator"
  gradient="from-pink-500 to-red-500"
/>
<CalculatorCard
  title="Love Compatibility Calculator"
  description="Check love compatibility percentage between two names instantly."
  href="/utility/loveCompatibilityCalculator"
  gradient="from-pink-500 to-red-500"
/>

    </section>
  )
}
