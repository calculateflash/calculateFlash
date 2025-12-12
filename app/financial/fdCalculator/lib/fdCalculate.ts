interface FDInput {
  principal: number;
  annualRate: number;
  years: number;
  compounding: number; // 1, 2, 4, 12
}

export function calculateFD({
  principal,
  annualRate,
  years,
  compounding,
}: FDInput) {
  const r = annualRate / 100;
  const n = compounding;

  // Maturity value formula
  const maturityValue = principal * Math.pow(1 + r / n, n * years);

  const interestEarned = maturityValue - principal;

  return {
    maturityValue: Math.round(maturityValue),
    interestEarned: Math.round(interestEarned),
  };
}
