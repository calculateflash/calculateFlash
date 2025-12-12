interface RDInput {
  monthlyDeposit: number;
  annualRate: number;
  years: number;
}

export function calculateRD({
  monthlyDeposit,
  annualRate,
  years,
}: RDInput) {
  const r = annualRate / 100 / 12; // monthly interest rate
  const n = years * 12; // total months

  // Formula: FV = P * [n + (n(n+1)/2)*(r)]
  const maturityValue =
    monthlyDeposit * (n + (n * (n + 1)) / 2 * r);

  const totalDeposited = monthlyDeposit * n;
  const interestEarned = maturityValue - totalDeposited;

  return {
    maturityValue: Math.round(maturityValue),
    totalDeposited: Math.round(totalDeposited),
    interestEarned: Math.round(interestEarned),
  };
}
