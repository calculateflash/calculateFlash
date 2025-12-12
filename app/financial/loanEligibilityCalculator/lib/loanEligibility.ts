interface LoanEligibilityInput {
  income: number;
  existingEmi: number;
  annualRate: number;
  tenureYears: number;
}

export function calculateLoanEligibility({
  income,
  existingEmi,
  annualRate,
  tenureYears,
}: LoanEligibilityInput) {
  const foir = 0.50; // 50% of income allowed for EMI
  const maxEligibleEmi = income * foir - existingEmi;

  if (maxEligibleEmi <= 0) {
    return {
      maxEligibleEmi: 0,
      maxEligibleLoan: 0,
    };
  }

  const r = annualRate / 12 / 100;
  const n = tenureYears * 12;

  // Reverse EMI formula: P = EMI × [(1+r)^n - 1] / (r × (1+r)^n)
  const pow = Math.pow(1 + r, n);
  const maxEligibleLoan = maxEligibleEmi * ((pow - 1) / (r * pow));

  return {
    maxEligibleEmi: Math.round(maxEligibleEmi),
    maxEligibleLoan: Math.round(maxEligibleLoan),
  };
}
