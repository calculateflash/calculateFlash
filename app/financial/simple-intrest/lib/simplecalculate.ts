interface SIInput {
  principal: number;
  annualRate: number;
  years: number;
}

export function calculateSimpleInterest({
  principal,
  annualRate,
  years,
}: SIInput) {
  const simpleInterest = (principal * annualRate * years) / 100;
  const totalAmount = principal + simpleInterest;

  return {
    simpleInterest: Math.round(simpleInterest),
    totalAmount: Math.round(totalAmount),
  };
}
