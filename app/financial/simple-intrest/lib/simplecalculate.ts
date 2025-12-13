type SimpleInterestInput = {
  principal: number;
  annualRate: number;
  startDate: string; // YYYY-MM-DD
  endDate: string;
};

export function calculateSimpleInterest({
  principal,
  annualRate,
  startDate,
  endDate,
}: SimpleInterestInput) {
  if (!startDate || !endDate) {
    return {
      simpleInterest: 0,
      totalAmount: principal,
      years: 0,
    };
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMs = end.getTime() - start.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const years = diffInDays / 365;

  const simpleInterest = (principal * annualRate * years) / 100;
  const totalAmount = principal + simpleInterest;

  return {
    simpleInterest: Math.round(simpleInterest),
    totalAmount: Math.round(totalAmount),
    years: Number(years.toFixed(2))
  }
}
