export interface SalaryInput {
  ctc: number;                 // Annual CTC
  pfPercent: number;           // PF percentage
  professionalTax: number;     // Annual professional tax
  bonus: number;               // Annual bonus
}

export interface SalaryResult {
  basic: number;
  hra: number;
  specialAllowance: number;
  pf: number;
  professionalTax: number;
  annualInHand: number;
  monthlyInHand: number;
}

export function calculateSalary(
  input: SalaryInput
): SalaryResult | { error: string } {
  const { ctc, pfPercent, professionalTax, bonus } = input;

  if (ctc <= 0 || pfPercent < 0 || professionalTax < 0 || bonus < 0) {
    return { error: "Invalid input values" };
  }

  // Standard Indian salary assumptions
  const basic = ctc * 0.4;
  const hra = basic * 0.4;
  const specialAllowance = ctc - (basic + hra + bonus);

  const pf = (basic * pfPercent) / 100;
  const totalDeductions = pf + professionalTax;

  const annualInHand = ctc - totalDeductions;
  const monthlyInHand = annualInHand / 12;

  return {
    basic: Number(basic.toFixed(2)),
    hra: Number(hra.toFixed(2)),
    specialAllowance: Number(specialAllowance.toFixed(2)),
    pf: Number(pf.toFixed(2)),
    professionalTax: Number(professionalTax.toFixed(2)),
    annualInHand: Number(annualInHand.toFixed(2)),
    monthlyInHand: Number(monthlyInHand.toFixed(2)),
  };
}
