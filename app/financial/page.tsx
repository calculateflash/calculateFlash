import { CalculatorCard } from "@/components/CardCalculator";
import type { Metadata } from "next";
import Link from "next/link";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "Financial Calculators – EMI, SIP, GST, Tax, FD, RD & More | CalculateFlash",
  description:
    "Use free financial calculators to calculate EMI, SIP returns, GST, income tax, FD, RD, inflation impact, loan eligibility and more. Accurate, fast, and easy tools by CalculateFlash.",
  keywords: [
    "financial calculator",
    "emi calculator",
    "sip calculator",
    "gst calculator",
    "income tax calculator",
    "fd calculator",
    "rd calculator",
    "compound interest calculator",
    "inflation calculator",
    "loan eligibility calculator",
    "loan tenure calculator",
    "investment calculator online",
  ],
  alternates: {
    canonical: `${SITE_URL}/financial`,
  },
  openGraph: {
    title: "Financial Calculators – EMI, SIP, GST & Investment Tools",
    description:
      "Calculate EMI, SIP returns, GST, income tax, FD, RD, inflation and loan eligibility using trusted financial calculators.",
    url: `${SITE_URL}/financial`,
    siteName: "CalculateFlash",
    type: "website",
  },
};

export default function FinancialPage() {
  return (
    <>
       {/* ================= TOP DESCRIPTION (ALIGNED + PREMIUM) ================= */}
      <section className="mb-12 linear-gradient-to-br from-slate-50 to-slate-100 rounded-2xl px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Calculators for Smarter Money Decisions
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            CalculateFlash provides a complete set of <strong>financial calculators</strong> designed
            to help you understand loans, investments, taxes, and savings clearly. These tools are
            built to give fast and accurate results using standard financial formulas.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you are planning a home loan, calculating EMI, estimating SIP or lump sum
            returns, checking GST, or understanding how inflation affects your money, our
            calculators help reduce guesswork and support better financial planning.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            <li>✔ EMI, loan eligibility & tenure planning</li>
            <li>✔ SIP, FD, RD & investment growth analysis</li>
            <li>✔ Income tax & GST calculations</li>
            <li>✔ Inflation impact & savings evaluation</li>
          </ul>
        </div>
      </section>

      {/* ===== CALCULATOR GRID (UNCHANGED UI) ===== */}
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
          href="/financial/compoundCalculator"
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

   {/* ===== WHY USE FINANCIAL CALCULATORS (PREMIUM + ALIGNED) ===== */}
<section className="mt-16">
  <div className="max-w-5xl mx-auto px-2">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
      Why Use Financial Calculators?
    </h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Financial calculators help you make confident money decisions by converting
      complex formulas into clear, actionable numbers. Instead of guessing loan
      EMIs, investment returns, or tax amounts, these tools provide accurate
      estimates based on standard financial principles.
    </p>

    <p className="text-gray-600 leading-relaxed mb-4">
      Whether you are choosing the right loan tenure, comparing SIP returns,
      planning fixed deposits, or understanding how inflation affects your
      savings, financial calculators simplify planning and reduce costly mistakes.
    </p>

    <p className="text-gray-600 leading-relaxed">
      Using online financial calculators saves time, improves clarity, and helps
      you evaluate multiple scenarios before making important financial decisions.
    </p>
  </div>
</section>

        {/* ================= RELATED CALCULATOR LINKS ================= */}
      {/* ================= RELATED CALCULATORS (SAME UI) ================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Related Financial Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CalculatorCard title="Home Loan Calculator" description="Plan home loan EMIs and tenure." href="/financial/emiCalculator" gradient="from-sky-500 to-sky-700" />
          <CalculatorCard title="Investment Calculator" description="Estimate long-term investment growth." href="/financial/sipCalculator" gradient="from-fuchsia-500 to-fuchsia-700" />
          <CalculatorCard title="Tax Planning Calculator" description="Understand income tax impact." href="/financial/incomeTax" gradient="from-orange-500 to-orange-700" />
        </div>
      </section>


      {/* ===== SCHEMA (UNCHANGED) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Financial Calculators",
                item: `${SITE_URL}/financial`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
