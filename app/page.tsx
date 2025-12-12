import { CalculatorCard } from "@/components/CardCalculator";
import { ArrowRight, HeartPulse, Settings, Wallet } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">

      {/* APP NAME */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700">
        CalculateFlash
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
        CalculateFlash provides fast, accurate, and user-friendly tools for 
        finance, health, and daily utility needs. Explore our collection of 
        smart calculators designed to help you make informed decisions, plan 
        your finances, and simplify everyday tasks.
      </p>

      {/* CATEGORY ICON BUTTONS */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">

        <Link
          href="/financial"
          className="flex flex-col items-center gap-2 p-5 w-36 h-36 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
        >
          <Wallet className="w-10 h-10 text-blue-600" />
          <span className="font-semibold text-slate-700">Finance Tools</span>
        </Link>

        <Link
          href="/health"
          className="flex flex-col items-center gap-2 p-5 w-36 h-36 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
        >
          <HeartPulse className="w-10 h-10 text-red-600" />
          <span className="font-semibold text-slate-700">Health Tools</span>
        </Link>

        <Link
          href="/utility"
          className="flex flex-col items-center gap-2 p-5 w-36 h-36 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
        >
          <Settings className="w-10 h-10 text-emerald-600" />
          <span className="font-semibold text-slate-700">Utility Tools</span>
        </Link>

      </div>

      {/* POPULAR CALCULATORS */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Popular Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Finance */}
          <CalculatorCard
            title="EMI Calculator"
            description="Loan EMI, interest and total repayment."
            href="/financial/emiCalculator"
            gradient="from-blue-500 to-indigo-600"
          />

          <CalculatorCard
            title="SIP Calculator"
            description="Future value of monthly investments."
            href="/financial/sipCalculator"
            gradient="from-green-500 to-emerald-600"
          />

          {/* Health */}
          <CalculatorCard
            title="BMI Calculator"
            description="Body Mass Index for weight category."
            href="/health/bmi"
            gradient="from-red-500 to-rose-600"
          />

          <CalculatorCard
            title="Calorie Calculator"
            description="Daily calorie needs based on activity."
            href="/health/calorie"
            gradient="from-orange-500 to-amber-600"
          />

          {/* Utility */}
          <CalculatorCard
            title="Age Calculator"
            description="Calculate accurate age in seconds."
            href="/utility/age"
            gradient="from-purple-500 to-fuchsia-600"
          />

          <CalculatorCard
            title="Unit Converter"
            description="Convert units quickly and easily."
            href="/utility/unitConverter"
            gradient="from-teal-500 to-cyan-600"
          />

        </div>
      </div>

    </section>
  );
}
