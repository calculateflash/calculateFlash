export type GSTMode = "exclusive" | "inclusive";

export interface GSTInput {
  amount: number;
  rate: number;
  mode: GSTMode;
}

export function calculateGST({ amount, rate, mode }: GSTInput) {
  if (amount <= 0 || rate < 0) {
    return { error: "Invalid input" };
  }

  const taxRate = rate / 100;

  if (mode === "exclusive") {
    const tax = amount * taxRate;
    const total = amount + tax;

    return {
      baseAmount: amount,
      taxAmount: Number(tax.toFixed(2)),
      totalAmount: Number(total.toFixed(2)),
    };
  }

  // inclusive
  const base = amount / (1 + taxRate);
  const tax = amount - base;

  return {
    baseAmount: Number(base.toFixed(2)),
    taxAmount: Number(tax.toFixed(2)),
    totalAmount: Number(amount.toFixed(2)),
  };
}
