interface TaxInput {
  income: number;
}

export function calculateIncomeTax({ income }: TaxInput) {
  let tax = 0;

  const slabs = [
    { limit: 300000, rate: 0 },
    { limit: 700000, rate: 0.05 },
    { limit: 1000000, rate: 0.10 },
    { limit: 1200000, rate: 0.15 },
    { limit: 1500000, rate: 0.20 },
    { limit: Infinity, rate: 0.30 },
  ];

  let previousLimit = 0;

  for (let i = 0; i < slabs.length; i++) {
    const slab = slabs[i];

    if (income > slab.limit) {
      tax += (slab.limit - previousLimit) * slab.rate;
      previousLimit = slab.limit;
    } else {
      tax += (income - previousLimit) * slab.rate;
      break;
    }
  }

  // Rebate under 87A for income <= ₹7,00,000
  if (income <= 700000) {
    tax = 0;
  }

  const effectiveRate = Number(((tax / income) * 100).toFixed(2));

  return {
    taxableIncome: income,
    taxPayable: Math.round(tax),
    effectiveRate, // now number
  };
}
