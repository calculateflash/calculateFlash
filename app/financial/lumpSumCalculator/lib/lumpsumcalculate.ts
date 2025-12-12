interface LumpSumInput {
  principal: number;
  annualRate: number;
  years: number;
}

export function calculateLumpSum({
  principal,
  annualRate,
  years,
}: LumpSumInput) {
  const r = annualRate / 100;

  // FV = P * (1 + r)^t
  const futureValue = principal * Math.pow(1 + r, years);
  const interestEarned = futureValue - principal;

  return {
    futureValue: Math.round(futureValue),
    interestEarned: Math.round(interestEarned),
  };
}
