export type RelatedCalculator = {
  title: string;
  description: string;
  href: string;
  gradient: string;
};

export const relatedCalculatorsMap: Record<string, RelatedCalculator[]> = {
  sipCalculator: [
    {
      title: "EMI Calculator",
      description: "Loan EMI, interest rate, tenure breakdown.",
      href: "/financial/emiCalculator",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Lump Sum Calculator",
      description: "Future value of one-time investment.",
      href: "/financial/lumpSumCalculator",
      gradient: "from-lime-500 to-lime-700",
    },
    {
      title: "FD Calculator",
      description: "Calculate maturity value of fixed deposits.",
      href: "/financial/fdCalculator",
      gradient: "from-emerald-500 to-emerald-700",
    },
  ],

  emiCalculator: [
    {
      title: "Loan Eligibility Calculator",
      description: "Check how much loan you can get.",
      href: "/financial/loanEligibilityCalculator",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      title: "Loan Tenure Calculator",
      description: "Find repayment duration based on EMI.",
      href: "/financial/loanTenureCalculator",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
  ],

  gstCalculator: [
    {
      title: "Income Tax Calculator",
      description: "Estimate your tax liability.",
      href: "/financial/incomeTax",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Simple Interest Calculator",
      description: "Basic interest and total amount.",
      href: "/financial/simple-intrest",
      gradient: "from-cyan-500 to-cyan-700",
    },
    {
      title: "EMI Calculator",
      description: "Loan EMI, interest rate, tenure breakdown.",
      href: "/financial/emiCalculator",
      gradient: "from-red-500 to-red-700",
    },
  ],

  incomeTax: [
    {
      title: "GST Calculator",
      description: "Add or remove GST instantly.",
      href: "/financial/gstCalculator",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "Inflation Calculator",
      description: "How inflation affects money value.",
      href: "/financial/inflationCalculator",
      gradient: "from-rose-500 to-rose-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
  ],

  compoundCalculator: [
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Lump Sum Calculator",
      description: "Future value of one-time investment.",
      href: "/financial/lumpSumCalculator",
      gradient: "from-lime-500 to-lime-700",
    },
    {
      title: "FD Calculator",
      description: "Calculate maturity value of fixed deposits.",
      href: "/financial/fdCalculator",
      gradient: "from-emerald-500 to-emerald-700",
    },
  ],

  fdCalculator: [
    {
      title: "RD Calculator",
      description: "Monthly recurring deposit maturity.",
      href: "/financial/rdCalculator",
      gradient: "from-amber-500 to-amber-700",
    },
    {
      title: "Compound Interest Calculator",
      description: "Compounded investment growth.",
      href: "/financial/compoundCalculator",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
  ],

  rdCalculator: [
    {
      title: "FD Calculator",
      description: "Calculate maturity value of fixed deposits.",
      href: "/financial/fdCalculator",
      gradient: "from-emerald-500 to-emerald-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Compound Interest Calculator",
      description: "Compounded investment growth.",
      href: "/financial/compoundCalculator",
      gradient: "from-indigo-500 to-indigo-700",
    },
  ],

  simpleInterest: [
    {
      title: "Compound Interest Calculator",
      description: "Compounded investment growth.",
      href: "/financial/compoundCalculator",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      title: "EMI Calculator",
      description: "Loan EMI, interest rate, tenure breakdown.",
      href: "/financial/emiCalculator",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "GST Calculator",
      description: "Add or remove GST instantly.",
      href: "/financial/gstCalculator",
      gradient: "from-blue-500 to-blue-700",
    },
  ],

  lumpSumCalculator: [
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Compound Interest Calculator",
      description: "Compounded investment growth.",
      href: "/financial/compoundCalculator",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      title: "FD Calculator",
      description: "Calculate maturity value of fixed deposits.",
      href: "/financial/fdCalculator",
      gradient: "from-emerald-500 to-emerald-700",
    },
  ],

  inflationCalculator: [
    {
      title: "Income Tax Calculator",
      description: "Estimate your tax liability.",
      href: "/financial/incomeTax",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Lump Sum Calculator",
      description: "Future value of one-time investment.",
      href: "/financial/lumpSumCalculator",
      gradient: "from-lime-500 to-lime-700",
    },
  ],

  loanEligibilityCalculator: [
    {
      title: "EMI Calculator",
      description: "Loan EMI, interest rate, tenure breakdown.",
      href: "/financial/emiCalculator",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Loan Tenure Calculator",
      description: "Find repayment duration based on EMI.",
      href: "/financial/loanTenureCalculator",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
  ],

  loanTenureCalculator: [
    {
      title: "EMI Calculator",
      description: "Loan EMI, interest rate, tenure breakdown.",
      href: "/financial/emiCalculator",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Loan Eligibility Calculator",
      description: "Check how much loan you can get.",
      href: "/financial/loanEligibilityCalculator",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      title: "SIP Calculator",
      description: "Investment growth over time.",
      href: "/financial/sipCalculator",
      gradient: "from-green-500 to-green-700",
    },
  ],
};
