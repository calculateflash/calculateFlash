export type CalculatorMeta = {
  title: string;
  description: string;
};

export const calculatorMetaMap: Record<string, CalculatorMeta> = {
  sipCalculator: {
    title: "SIP Calculator – Calculate Mutual Fund SIP Returns Online",
    description:
      "Use SIP Calculator to calculate future value, total investment, and estimated returns on monthly SIP investments in India.",
  },

  emiCalculator: {
    title: "EMI Calculator – Calculate Loan EMI, Interest & Tenure Online",
    description:
      "Free EMI Calculator to calculate monthly loan EMI, total interest, and repayment schedule for home, car, and personal loans.",
  },

  gstCalculator: {
    title: "GST Calculator – Add or Remove GST Instantly Online",
    description:
      "GST Calculator helps you add or remove GST easily for 5%, 12%, 18% and 28% tax slabs. Accurate and fast GST calculation.",
  },

  incomeTax: {
    title: "Income Tax Calculator – Calculate Income Tax Online in India",
    description:
      "Income Tax Calculator to estimate your tax liability based on latest Indian income tax slabs. Fast and accurate results.",
  },

  compoundCalculator: {
    title: "Compound Interest Calculator – Calculate Investment Growth Online",
    description:
      "Compound Interest Calculator helps calculate future value of investments with compounding. Ideal for long-term planning.",
  },

  fdCalculator: {
    title: "FD Calculator – Calculate Fixed Deposit Maturity Amount Online",
    description:
      "FD Calculator to calculate maturity amount and interest earned on fixed deposits. Compare returns easily online.",
  },

  rdCalculator: {
    title: "RD Calculator – Calculate Recurring Deposit Maturity Online",
    description:
      "RD Calculator helps calculate maturity value of monthly recurring deposits based on interest rate and tenure.",
  },

  simpleInterest: {
    title: "Simple Interest Calculator – Calculate Interest & Total Amount",
    description:
      "Simple Interest Calculator to calculate interest earned and total amount using principal, rate, and time.",
  },

  lumpSumCalculator: {
    title: "Lump Sum Calculator – Calculate One-Time Investment Returns",
    description:
      "Lump Sum Calculator helps calculate future value of one-time investments in mutual funds and other instruments.",
  },

  inflationCalculator: {
    title: "Inflation Calculator – Calculate Future Value of Money",
    description:
      "Inflation Calculator shows how inflation affects purchasing power and future value of money over time.",
  },

  loanEligibilityCalculator: {
    title: "Loan Eligibility Calculator – Check How Much Loan You Can Get",
    description:
      "Loan Eligibility Calculator helps estimate how much home or personal loan you are eligible for based on income.",
  },

  loanTenureCalculator: {
    title: "Loan Tenure Calculator – Calculate Loan Repayment Duration",
    description:
      "Loan Tenure Calculator helps determine loan repayment duration based on EMI amount and interest rate.",
  },
};
