type CompoundInterestInput = {
  principal: number;
  annualRate: number;
  startDate: string;
  endDate: string;
  compounding: number;
};

export function calculateCompoundInterest({
  principal,
  annualRate,
  startDate,
  endDate,
  compounding,
}: CompoundInterestInput) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffDays =
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

  const years = diffDays / 365;

  const r = annualRate / 100;
  const n = compounding;

  const maturityValue =
    principal * Math.pow(1 + r / n, n * years);

  const interestEarned = maturityValue - principal;

  return {
    maturityValue: Math.round(maturityValue),
    interestEarned: Math.round(interestEarned),
    years: Number(years.toFixed(2)),
  };
}
