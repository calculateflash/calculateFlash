interface InflationInput {
  amount: number;
  rate: number; // inflation %
  years: number;
}

export function calculateInflation({ amount, rate, years }: InflationInput) {
  const r = rate / 100;

  // Future value after inflation
  const futureValue = amount * Math.pow(1 + r, years);

  // Present value equivalent (what future value is worth today)
  const presentValue = amount / Math.pow(1 + r, years);

  // Value lost due to inflation
  const valueLost = futureValue - amount;

  return {
    futureValue: Math.round(futureValue),
    presentValue: Math.round(presentValue),
    valueLost: Math.round(valueLost),
  };
}
