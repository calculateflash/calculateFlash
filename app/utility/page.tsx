import { CalculatorCard } from "@/components/CardCalculator";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title:
    "Utility Calculators – Age, Percentage, GPA, QR Code, Date & More | CalculateFlash",
  description:
    "Use powerful utility calculators like age calculator, date difference, GPA to percentage, QR code generator, percentage calculator, salary breakup, GST/VAT, matrix solver, zodiac, insurance premium, and more. Simple, fast, and accurate tools by CalculateFlash.",
  keywords: [
    "utility calculator",
    "age calculator",
    "percentage calculator",
    "date difference calculator",
    "gpa to percentage",
    "qr code generator",
    "salary breakup calculator",
    "gst vat calculator",
    "matrix calculator",
    "zodiac calculator",
    "equation solver",
    "insurance premium calculator",
    "sgpa to cgpa calculator",
    "flames calculator",
    "love compatibility calculator",
    "online utility tools",
  ],
  alternates: {
    canonical: '/utility',
  },
  openGraph: {
    title:
      "Utility Calculators – Age, Percentage, GPA, QR Code & More",
    description:
      "Calculate age, date difference, GPA to percentage, generate QR codes, solve equations, calculate salary breakup, GST/VAT, insurance premium, and more using smart utility calculators.",
    url: '/utility',
    siteName: "CalculateFlash",
    type: "website",
  },
};

export default function UtilityPage() {
  return (
    <>
      {/* ================= TOP DESCRIPTION (ALIGNED + PREMIUM) ================= */}
      <section className="mb-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Utility Calculators for Everyday Calculations
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            CalculateFlash provides a wide range of <strong>utility calculators</strong>
            designed to handle everyday calculations quickly and accurately.
            These tools help students, professionals, and individuals solve
            common problems without manual effort.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            From calculating age and date differences to converting GPA scores,
            generating QR codes, solving equations, estimating salary breakup,
            and even fun tools like FLAMES and love compatibility — our utility
            calculators simplify tasks and save time.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            <li>✔ Age, date & percentage calculations</li>
            <li>✔ GPA, SGPA & CGPA conversions</li>
            <li>✔ Salary, tax & insurance estimations</li>
            <li>✔ Converters, solvers & fun utilities</li>
          </ul>
        </div>
      </section>

      {/* ================= UTILITY CALCULATOR GRID (UNCHANGED UI) ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CalculatorCard title="Date Difference Calculator" description="Calculate days, weeks, months between two dates." href="/utility/dateDifferenceCalculator" gradient="from-blue-500 to-cyan-500" />
        <CalculatorCard title="GPA / CGPA to Percentage" description="Convert GPA or CGPA into percentage instantly." href="/utility/gpaConverter" gradient="from-green-500 to-emerald-500" />
        <CalculatorCard title="QR Code Generator" description="Generate QR codes for text, URLs, or contact info." href="/utility/qrCodeGenerator" gradient="from-teal-500 to-green-500" />
        <CalculatorCard title="Number Base Converter" description="Convert Binary ↔ Decimal ↔ Hexadecimal." href="/utility/baseConverter" gradient="from-gray-700 to-gray-900" />
        <CalculatorCard title="GST / VAT Calculator" description="Calculate tax, reverse tax, and gross amount." href="/utility/gstCalculator" gradient="from-amber-500 to-orange-600" />
        <CalculatorCard title="Salary Breakup Calculator" description="Convert CTC to in-hand salary with deductions." href="/utility/salaryBreakupCalculator" gradient="from-pink-500 to-rose-600" />
        <CalculatorCard title="Matrix Calculator" description="Perform matrix operations easily." href="/utility/matrixCalculator" gradient="from-blue-600 to-indigo-700" />
        <CalculatorCard title="DOB to Zodiac Calculator" description="Find your zodiac sign from your date of birth." href="/utility/zodiacCalculator" gradient="from-yellow-400 to-orange-500" />
        <CalculatorCard title="Equation Solver" description="Solve algebraic equations instantly." href="/utility/equationSolver" gradient="from-purple-600 to-pink-600" />
        <CalculatorCard title="Insurance Premium Calculator" description="Estimate insurance premium based on age & coverage." href="/utility/insurancePremiumCalculator" gradient="from-sky-500 to-blue-600" />
        <CalculatorCard title="Age Calculator" description="Find your exact age in years, months, days, hours & seconds." href="/utility/ageCalculator" gradient="from-indigo-500 to-purple-500" />
        <CalculatorCard title="Percentage Calculator" description="Calculate percentages, discounts & percentage change." href="/utility/percentageCalculator" gradient="from-orange-500 to-yellow-500" />
        <CalculatorCard title="SGPA to CGPA Calculator" description="Convert SGPA scores into CGPA and percentage instantly." href="/utility/sgpaCgpaCalculator" gradient="from-emerald-500 to-teal-500" />
        <CalculatorCard title="FLAMES Calculator" description="Check relationship status using the popular FLAMES game." href="/utility/flamesCalculator" gradient="from-pink-500 to-red-500" />
        <CalculatorCard title="Love Compatibility Calculator" description="Check love compatibility percentage between two names." href="/utility/loveCompatibilityCalculator" gradient="from-pink-500 to-red-500" />
      </section>

      {/* ================= WHY USE UTILITY CALCULATORS ================= */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Why Use Utility Calculators?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Utility calculators help convert everyday calculations into quick,
            accurate results. Instead of manually computing dates, percentages,
            grades, or conversions, these tools deliver instant answers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            From academic use and office work to personal planning and fun tools,
            utility calculators reduce errors, save time, and improve productivity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Using online utility calculators ensures consistency and clarity across
            repeated calculations, making them ideal for daily use.
          </p>
        </div>
      </section>

      {/* ================= RELATED UTILITY CALCULATORS (SAME UI) ================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Related Utility Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CalculatorCard title="Academic Calculator" description="Handle grades & score conversions easily." href="/utility/gpaConverter" gradient="from-sky-500 to-sky-700" />
          <CalculatorCard title="Conversion Tools" description="Convert units, numbers & values instantly." href="/utility/baseConverter" gradient="from-fuchsia-500 to-fuchsia-700" />
          <CalculatorCard title="Fun Calculators" description="Explore FLAMES, zodiac & compatibility tools." href="/utility/flamesCalculator" gradient="from-orange-500 to-orange-700" />
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
              { "@type": "ListItem", position: 2, name: "Utility Calculators", item: `${SITE_URL}/utility` },
            ],
          }),
        }}
      />
    </>
  );
}
