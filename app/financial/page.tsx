import { CalculatorCard } from "@/components/CardCalculator";

export default function FinancialPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <CalculatorCard
        title="EMI Calculator"
        description="Loan EMI, interest rate, tenure breakdown."
        href="/financial/emiCalculator"
        gradient="from-red-500 to-red-700"
      />

      <CalculatorCard
        title="SIP Calculator"
        description="Investment growth over time."
        href="/financial/sipCalculator"
        gradient="from-green-500 to-green-700"
      />

      <CalculatorCard
        title="GST Calculator"
        description="Add or remove GST instantly."
        href="/financial/gstCalculator"
        gradient="from-blue-500 to-blue-700"
      />

      <CalculatorCard
        title="Income Tax Calculator"
        description="Estimate your tax liability."
        href="/financial/incomeTax"
        gradient="from-purple-500 to-purple-700"
      />

      <CalculatorCard
        title="Compound Interest Calculator"
        description="Future value of compounded investment."
        href="/financial/compundCalculator"
        gradient="from-indigo-500 to-indigo-700"
      />

      <CalculatorCard
        title="FD Calculator"
        description="Calculate maturity value of fixed deposits."
        href="/financial/fdCalculator"
        gradient="from-emerald-500 to-emerald-700"
      />

      <CalculatorCard
        title="RD Calculator"
        description="Monthly recurring deposit maturity."
        href="/financial/rdCalculator"
        gradient="from-amber-500 to-amber-700"
      />

      <CalculatorCard
        title="Simple Interest Calculator"
        description="Basic interest and total amount."
        href="/financial/simple-intrest"
        gradient="from-cyan-500 to-cyan-700"
      />

      <CalculatorCard
        title="Lump Sum Calculator"
        description="Future value of one-time investment."
        href="/financial/lumpSumCalculator"
        gradient="from-lime-500 to-lime-700"
      />

      <CalculatorCard
        title="Inflation Calculator"
        description="How inflation affects money value."
        href="/financial/inflationCalculator"
        gradient="from-rose-500 to-rose-700"
      />

      <CalculatorCard
        title="Loan Eligibility Calculator"
        description="Check how much loan you can get."
        href="/financial/loanEligibilityCalculator"
        gradient="from-teal-500 to-teal-700"
      />

      <CalculatorCard
        title="Loan Tenure Calculator"
        description="Find repayment duration based on EMI."
        href="/financial/loanTenureCalculator"
        gradient="from-yellow-500 to-yellow-700"
      />

    </section>
  );
}
