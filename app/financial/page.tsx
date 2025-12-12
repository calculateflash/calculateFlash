import { CalculatorCard } from "@/components/CardCalculator";

export default function FinancialPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CalculatorCard
        title="EMI Calculator"
        description="Loan EMI, interest rate, tenure breakdown."
        href="/financial/emiCalculator"
        gradient="from-orange-400 to-yellow-500"
      />

      <CalculatorCard
        title="SIP Calculator"
        description="Investment growth over time."
        href="/financial/sipCalculator"
        gradient="from-emerald-500 to-teal-500"
      />

      <CalculatorCard
        title="GST Calculator"
        description="Add or remove GST instantly."
        href="/financial/gstCalculator"
        gradient="from-blue-500 to-sky-500"
      />

      <CalculatorCard
        title="Income Tax Calculator"
        description="Estimate tax liability."
        href="/financial/incomeTax"
        gradient="from-purple-500 to-pink-500"
      />
    </section>
  );
}
