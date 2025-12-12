interface EMIInput {
  loanAmount: number;       // Principal
  annualRate: number;       // Percent per year
  tenureMonths: number;     // Months
}

export function calculateEMI({
  loanAmount,
  annualRate,
  tenureMonths,
}: EMIInput) {
  const r = annualRate / 12 / 100; // monthly interest rate
  const n = tenureMonths;

  if (r === 0) {
    const emi = loanAmount / n;
    return {
      emi,
      totalInterest: 0,
      totalPayment: loanAmount
    };
  }

  // EMI formula
  const emi = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment)
  };
}
