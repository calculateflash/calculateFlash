interface GSTInput {
  amount: number;   // Given amount
  gstRate: number;  // GST % (5, 12, 18, 28)
}

export function calculateGST({ amount, gstRate }: GSTInput) {
  const rate = gstRate / 100;

  // Add GST (exclusive → inclusive)
  const gstAdded = amount * rate;
  const netAmountAfterAdding = amount + gstAdded;

  // Remove GST (inclusive → exclusive)
  const amountWithoutGST = amount / (1 + rate);
  const gstRemoved = amount - amountWithoutGST;

  return {
    gstAdded: Math.round(gstAdded),
    gstRemoved: Math.round(gstRemoved),
    netAmountAfterAdding: Math.round(netAmountAfterAdding),
    netAmountAfterRemoving: Math.round(amountWithoutGST),
  };
}
