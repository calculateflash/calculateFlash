export type CalculatorSeoContent = {
  title: string;
  description: string;
  formula?: string;
  steps: string[];
};

export const calculatorSeoContentMap: Record<string, CalculatorSeoContent> = {
  sipCalculator: {
    title: "How SIP Calculator Works",
    description: `
A SIP Calculator is a financial planning tool that helps investors estimate the
future value of their systematic investments in mutual funds. SIP stands for
Systematic Investment Plan, where a fixed amount is invested every month.

In India, SIP is one of the most popular investment options because it promotes
financial discipline, reduces market timing risk, and benefits from long-term
compounding.

When you invest through SIP, each monthly contribution earns returns based on the
expected annual rate. Over time, these returns also earn returns, creating the
power of compounding. The longer your investment duration, the higher the
potential growth.

This SIP Calculator allows you to calculate total invested amount, estimated
returns, and final maturity value. It is ideal for long-term goals like
retirement, education, and wealth creation.
    `,
    formula: "Future Value = P × [(1 + r)^n – 1] / r × (1 + r)",
    steps: [
      "P = Monthly SIP investment amount",
      "r = Monthly rate of return (annual rate ÷ 12 ÷ 100)",
      "n = Total number of months",
      "Each monthly investment compounds until maturity",
    ],
  },

  emiCalculator: {
    title: "How EMI Calculator Works",
    description: `
An EMI Calculator helps borrowers calculate their monthly loan repayment amount
based on loan amount, interest rate, and tenure. EMI stands for Equated Monthly
Instalment.

This calculator is commonly used for home loans, car loans, and personal loans.
It helps borrowers plan finances by showing EMI amount, total interest payable,
and total repayment amount.
    `,
    formula: "EMI = P × r × (1 + r)^n / ((1 + r)^n – 1)",
    steps: [
      "P = Loan principal amount",
      "r = Monthly interest rate",
      "n = Loan tenure in months",
      "EMI remains constant throughout tenure",
    ],
  },

  gstCalculator: {
    title: "How GST Calculator Works",
    description: `
A GST Calculator helps users add or remove Goods and Services Tax from an amount.
It is useful for businesses and consumers to quickly calculate GST payable or
inclusive price.
    `,
    formula: "GST Amount = (Original Price × GST %) ÷ 100",
    steps: [
      "Enter original amount",
      "Select GST percentage",
      "Choose add or remove GST",
      "Calculator shows GST and final amount",
    ],
  },

  incomeTax: {
    title: "How Income Tax Calculator Works",
    description: `
An Income Tax Calculator helps individuals estimate their tax liability based on
income, deductions, and applicable tax slabs in India.
    `,
    steps: [
      "Enter annual income",
      "Add deductions under sections like 80C",
      "Select applicable tax regime",
      "Calculator estimates payable tax",
    ],
  },

  compoundCalculator: {
    title: "How Compound Interest Calculator Works",
    description: `
A Compound Interest Calculator helps estimate investment growth when interest is
earned on both principal and accumulated interest over time.
    `,
    formula: "A = P × (1 + r/n)^(n×t)",
    steps: [
      "P = Principal amount",
      "r = Annual interest rate",
      "n = Compounding frequency",
      "t = Time period in years",
    ],
  },

  fdCalculator: {
    title: "How FD Calculator Works",
    description: `
An FD Calculator helps investors calculate maturity value and interest earned on
fixed deposits over a specific tenure.
    `,
    steps: [
      "Enter deposit amount",
      "Select interest rate",
      "Choose tenure period",
      "Calculator shows maturity value",
    ],
  },

  rdCalculator: {
    title: "How RD Calculator Works",
    description: `
An RD Calculator helps calculate maturity amount of recurring deposits where a
fixed sum is deposited monthly.
    `,
    steps: [
      "Enter monthly deposit amount",
      "Select interest rate",
      "Choose deposit tenure",
      "Calculator computes maturity value",
    ],
  },

  simpleInterest: {
    title: "How Simple Interest Calculator Works",
    description: `
A Simple Interest Calculator calculates interest earned on principal without
compounding over time.
    `,
    formula: "SI = (P × R × T) ÷ 100",
    steps: [
      "P = Principal amount",
      "R = Rate of interest",
      "T = Time period",
      "Interest is calculated linearly",
    ],
  },

  lumpSumCalculator: {
    title: "How Lump Sum Calculator Works",
    description: `
A Lump Sum Calculator helps estimate future value of a one-time investment based
on expected rate of return and time.
    `,
    steps: [
      "Enter investment amount",
      "Select expected return rate",
      "Choose investment duration",
      "Calculator shows future value",
    ],
  },

  inflationCalculator: {
    title: "How Inflation Calculator Works",
    description: `
An Inflation Calculator shows how inflation affects the purchasing power of money
over time.
    `,
    steps: [
      "Enter current amount",
      "Select inflation rate",
      "Choose time duration",
      "Calculator shows future value loss",
    ],
  },

  loanEligibilityCalculator: {
    title: "How Loan Eligibility Calculator Works",
    description: `
A Loan Eligibility Calculator estimates how much loan a person can get based on
income, expenses, and interest rate.
    `,
    steps: [
      "Enter monthly income",
      "Add existing obligations",
      "Select interest rate",
      "Calculator estimates eligible loan amount",
    ],
  },

  loanTenureCalculator: {
    title: "How Loan Tenure Calculator Works",
    description: `
A Loan Tenure Calculator helps determine repayment duration based on EMI amount
and loan details.
    `,
    steps: [
      "Enter loan amount",
      "Enter EMI amount",
      "Select interest rate",
      "Calculator shows repayment tenure",
    ],
  },
};
