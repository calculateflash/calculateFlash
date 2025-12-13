export type CalculatorRoute = {
  section: "financial" | "health" | "utility";
  slug: string;
};

export const ALL_CALCULATORS: CalculatorRoute[] = [
  /* ---------------- FINANCIAL ---------------- */
  { section: "financial", slug: "sipCalculator" },
  { section: "financial", slug: "emiCalculator" },
  { section: "financial", slug: "gstCalculator" },
  { section: "financial", slug: "incomeTax" },
  { section: "financial", slug: "compoundCalculator" },
  { section: "financial", slug: "fdCalculator" },
  { section: "financial", slug: "rdCalculator" },
  { section: "financial", slug: "simple-intrest" },
  { section: "financial", slug: "lumpSumCalculator" },
  { section: "financial", slug: "inflationCalculator" },
  { section: "financial", slug: "loanEligibilityCalculator" },
  { section: "financial", slug: "loanTenureCalculator" },

  /* ---------------- HEALTH ---------------- */
  { section: "health", slug: "bmiCalculator" },
  { section: "health", slug: "bmrCalculator" },
  { section: "health", slug: "bodyFatCalculator" },
  { section: "health", slug: "calorieIntakeCalculator" },
  { section: "health", slug: "dueDateCalculator" },
  { section: "health", slug: "idealWeightCalculator" },
  { section: "health", slug: "macroCalculator" },
  { section: "health", slug: "numerologyCalculator" },
  { section: "health", slug: "stressScoreCalculator" },
  { section: "health", slug: "tdeeCalculator" },
  { section: "health", slug: "unitConverter" },
  { section: "health", slug: "waterIntakeCalculator" },

  /* ---------------- UTILITY ---------------- */
  { section: "utility", slug: "ageCalculator" },
  { section: "utility", slug: "baseConverter" },
  { section: "utility", slug: "dateDifferenceCalculator" },
  { section: "utility", slug: "equationSolver" },
  { section: "utility", slug: "flamesCalculator" },
  { section: "utility", slug: "gpaConverter" },
  { section: "utility", slug: "gstCalculator" },
  { section: "utility", slug: "insurancePremiumCalculator" },
  { section: "utility", slug: "loveCompatibilityCalculator" },
  { section: "utility", slug: "matrixCalculator" },
  { section: "utility", slug: "percentageCalculator" },
  { section: "utility", slug: "qrCodeGenerator" },
  { section: "utility", slug: "salaryBreakupCalculator" },
  { section: "utility", slug: "sgpaCgpaCalculator" },
  { section: "utility", slug: "zodiacCalculator" },
];
