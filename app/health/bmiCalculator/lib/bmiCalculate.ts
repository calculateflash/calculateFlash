// bmiCalculate.ts
export interface BMIInput {
  weightKg: number;   // in kilograms
  heightCm: number;   // in centimeters
}

export function calculateBMI({ weightKg, heightCm }: BMIInput) {
  const heightM = heightCm / 100;

  if (!heightM || !weightKg) {
    return {
      bmi: 0,
      category: "Invalid input"
    };
  }

  const bmi = weightKg / (heightM * heightM);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  return {
    bmi: Number(bmi.toFixed(1)),
    category
  };
}
