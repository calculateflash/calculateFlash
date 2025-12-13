import { CalculatorCard } from "@/components/CardCalculator";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title:
    "Utility Calculators – Age, Percentage, GPA, QR Code, Date, Salary & More | CalculateFlash",
  description:
    "Use smart utility calculators like age calculator, date difference, GPA to percentage, QR code generator, percentage calculator, salary breakup, GST/VAT, matrix solver, zodiac, and more. Simple, fast, and accurate tools by CalculateFlash.",
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
    "love compatibility calculator",
    "flames calculator",
    "online utility tools",
  ],
  alternates: {
    canonical: `${SITE_URL}/utility`,
  },
  openGraph: {
    title:
      "Utility Calculators – Age, Percentage, GPA, QR Code & More",
    description:
      "Calculate age, date difference, GPA to percentage, generate QR codes, solve equations, calculate salary breakup, GST, and more using powerful utility calculators.",
    url: `${SITE_URL}/utility`,
    siteName: "CalculateFlash",
    type: "website",
  },
};

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
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Utility Calculators",
      description:
        "A collection of online utility calculators including age calculator, date difference, GPA to percentage, QR code generator, salary breakup, percentage calculator, equation solver, zodiac calculator, and more.",
      url: `${SITE_URL}/utility`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Date Difference Calculator", url: `${SITE_URL}/utility/dateDifferenceCalculator` },
        { "@type": "ListItem", position: 2, name: "GPA / CGPA to Percentage", url: `${SITE_URL}/utility/gpaConverter` },
        { "@type": "ListItem", position: 3, name: "QR Code Generator", url: `${SITE_URL}/utility/qrCodeGenerator` },
        { "@type": "ListItem", position: 4, name: "Number Base Converter", url: `${SITE_URL}/utility/baseConverter` },
        { "@type": "ListItem", position: 5, name: "GST / VAT Calculator", url: `${SITE_URL}/utility/gstCalculator` },
        { "@type": "ListItem", position: 6, name: "Salary Breakup Calculator", url: `${SITE_URL}/utility/salaryBreakupCalculator` },
        { "@type": "ListItem", position: 7, name: "Matrix Calculator", url: `${SITE_URL}/utility/matrixCalculator` },
        { "@type": "ListItem", position: 8, name: "DOB to Zodiac Calculator", url: `${SITE_URL}/utility/zodiacCalculator` },
        { "@type": "ListItem", position: 9, name: "Equation Solver", url: `${SITE_URL}/utility/equationSolver` },
        { "@type": "ListItem", position: 10, name: "Insurance Premium Calculator", url: `${SITE_URL}/utility/insurancePremiumCalculator` },
        { "@type": "ListItem", position: 11, name: "Age Calculator", url: `${SITE_URL}/utility/ageCalculator` },
        { "@type": "ListItem", position: 12, name: "Percentage Calculator", url: `${SITE_URL}/utility/percentageCalculator` },
        { "@type": "ListItem", position: 13, name: "SGPA to CGPA Calculator", url: `${SITE_URL}/utility/sgpaCgpaCalculator` },
        { "@type": "ListItem", position: 14, name: "FLAMES Calculator", url: `${SITE_URL}/utility/flamesCalculator` },
        { "@type": "ListItem", position: 15, name: "Love Compatibility Calculator", url: `${SITE_URL}/utility/loveCompatibilityCalculator` },
      ],
    }),
  }}
/>

    </section>
  )
}
