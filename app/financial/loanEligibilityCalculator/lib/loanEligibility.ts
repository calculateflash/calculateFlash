type Input = {
  income: number;
  existingEmi: number;
  annualRate: number;
  tenureYears: number;
};

export function calculateLoanEligibility({
  income,
  existingEmi,
  annualRate,
  tenureYears,
}: Input) {
  try {
    if (income <= 0 || tenureYears <= 0) {
      throw new Error("Invalid loan inputs");
    }

    const FOIR = 0.5;
    const maxEligibleEmi = income * FOIR - existingEmi;

    if (maxEligibleEmi <= 0) {
      return {
        maxEligibleEmi: 0,
        maxEligibleLoan: 0,
      };
    }

    const r = annualRate / 12 / 100;
    const n = tenureYears * 12;

    const maxEligibleLoan =
      (maxEligibleEmi * (1 - Math.pow(1 + r, -n))) / r;

    return {
      maxEligibleEmi: Math.round(maxEligibleEmi),
      maxEligibleLoan: Math.round(maxEligibleLoan),
    };
  } catch (err) {
    // ✅ ALWAYS rethrow Error
    throw err instanceof Error
      ? err
      : new Error("Loan eligibility calculation failed");
  }
}
