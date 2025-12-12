interface SIPInput {
  monthly: number;      // Monthly investment
  years: number;        // Investment duration (years)
  annualRate: number;   // Expected returns in %
}

export function calculateSIP({ monthly, years, annualRate }: SIPInput) {
  const r = annualRate / 100 / 12;   // monthly rate
  const n = years * 12;              // number of months

  if (r === 0) {
    const totalInvested = monthly * n;
    return {
      futureValue: totalInvested,
      totalInvested,
      estimatedReturns: 0,
    };
  }

  const futureValue =
    monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  const totalInvested = monthly * n;
  const estimatedReturns = futureValue - totalInvested;

  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
  };
}
