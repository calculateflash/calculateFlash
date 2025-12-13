export interface InsuranceInput {
  age: number;
  gender: "male" | "female";
  sumInsured: number;
  policyType: "individual" | "family";
  smoker: boolean;
  preExisting: boolean;
  term: number;
}

export interface InsuranceResult {
  yearlyPremium: number;
  monthlyPremium: number;
  breakdown: {
    base: number;
    ageFactor: number;
    smokerFactor: number;
    diseaseFactor: number;
    policyFactor: number;
  };
}

export function calculateInsurancePremium(
  input: InsuranceInput
): InsuranceResult {
  const {
    age,
    gender,
    sumInsured,
    policyType,
    smoker,
    preExisting,
    term,
  } = input;

  // Base premium = 5% of sum insured
  const base = sumInsured * 0.05;

  // Age factor
  let ageFactor = 1;
  if (age > 45) ageFactor = 1.4;
  else if (age > 30) ageFactor = 1.2;

  // Lifestyle factors
  const smokerFactor = smoker ? 1.3 : 1;
  const diseaseFactor = preExisting ? 1.25 : 1;

  // Policy type
  const policyFactor = policyType === "family" ? 1.6 : 1;

  const yearlyPremium =
    base *
    ageFactor *
    smokerFactor *
    diseaseFactor *
    policyFactor;

  return {
    yearlyPremium: Math.round(yearlyPremium),
    monthlyPremium: Math.round(yearlyPremium / 12),
    breakdown: {
      base,
      ageFactor,
      smokerFactor,
      diseaseFactor,
      policyFactor,
    },
  };
}
