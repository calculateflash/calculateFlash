import { CalculatorCard } from "@/components/CardCalculator";
import { AboutSection } from "@/components/AboutSection";
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
            href="/health/bmiCalculator"
            gradient="from-red-500 to-rose-600"
          />

          <CalculatorCard
            title="Calorie Calculator"
            description="Daily calorie needs based on activity."
            href="/health/calorieIntakeCalculator"
            gradient="from-orange-500 to-amber-600"
          />

          {/* Utility */}
          <CalculatorCard
            title="Age Calculator"
            description="Calculate accurate age in seconds."
            href="/utility/ageCalculator"
            gradient="from-purple-500 to-fuchsia-600"
          />

          <CalculatorCard
            title="Unit Converter"
            description="Convert units quickly and easily."
            href="/health/unitConverter"
            gradient="from-teal-500 to-cyan-600"
          />

        </div>

        <AboutSection/>

        <section className="mt-16 bg-white p-8 rounded-xl shadow-sm border space-y-10">

          {/* WHY CHOOSE US */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Why Choose CalculateFlash?</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              CalculateFlash is built to deliver fast, accurate, and easy-to-use
              calculators that help users make informed decisions effortlessly. 
              With a growing suite of financial, health, and utility tools, we focus 
              on reliability, transparency, and user satisfaction—making complex 
              calculations simple for everyone.
            </p>

            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>Accurate & Trusted Results:</strong> Uses industry-standard formulas trusted by experts and institutions.</li>
              <li><strong>Fast & Lightweight:</strong> Instant results with an optimized interface that works smoothly across all devices.</li>
              <li><strong>Wide Range of Tools:</strong> Financial, health, and utility calculators—all available in one place.</li>
              <li><strong>SEO-Optimized Pages:</strong> Built to rank higher on Google and deliver authoritative content for users.</li>
              <li><strong>Ad-friendly Platform:</strong> Clean UI designed for monetization without compromising user experience.</li>
            </ul>
          </div>

          {/* HOW IT WORKS */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">How It Works</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              CalculateFlash is designed to make every tool intuitive and effortless to use.
              Whether you're calculating EMI, estimating returns, checking your health stats,
              or converting units, our system works the same way across all tools.
            </p>

            <ol className="list-decimal pl-6 text-slate-700 space-y-2">
              <li><strong>Choose a Calculator:</strong> Browse our finance, health, or utility tools to find the one you need.</li>
              <li><strong>Enter Your Values:</strong> Input only the necessary details—no complicated forms or technical steps.</li>
              <li><strong>Get Instant Results:</strong> View accurate outputs immediately, including charts, comparisons, and summaries.</li>
              <li><strong>Explore Insights:</strong> Read explanations, formulas, and FAQs to understand how the calculation works.</li>
              <li><strong>Use Anywhere, Anytime:</strong> All tools are mobile-friendly, fast, and available without login or downloads.</li>
            </ol>
          </div>
      </section>

      </div>

    </section>
  );
}
