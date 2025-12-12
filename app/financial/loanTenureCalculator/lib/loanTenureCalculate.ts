interface TenureInput {
  loanAmount: number;
  annualRate: number;
  emi: number;
}

export function calculateLoanTenure({
  loanAmount,
  annualRate,
  emi,
}: TenureInput) {
  const r = annualRate / 12 / 100; // monthly rate

  // EMI must be greater than interest portion
  if (emi <= loanAmount * r || emi <= 0) {
    return {
      tenureMonths: 0,
      tenureYears: 0,
    };
  }

  // Tenure formula: n = ln(EMI / (EMI - P*r)) / ln(1+r)
  const numerator = Math.log(emi / (emi - loanAmount * r));
  const denominator = Math.log(1 + r);

  const tenureMonths = Math.round(numerator / denominator);
  const tenureYears = Math.round((tenureMonths / 12) * 100) / 100;

  return {
    tenureMonths,
    tenureYears,
  };
}
