// calorieIntakeCalculate.ts
export interface CalorieInput {
  weightKg: number;
  heightCm: number;
  age: number;
  gender: "male" | "female";
  activity: string;
}

export function calculateCalorieIntake({
  weightKg,
  heightCm,
  age,
  gender,
  activity
}: CalorieInput) {
  if (!weightKg || !heightCm || !age) {
    return {
      maintenance: 0,
      loss: 0,
      gain: 0,
      bmr: 0
    };
  }

  // Step 1: BMR
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  // Step 2: Activity level multiplier
  const activityFactors: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9
  };

  const maintenance = bmr * (activityFactors[activity] || 1.2);

  // Step 3: Calorie goals
  const loss = maintenance - 500;     // Moderate deficit
  const gain = maintenance + 300;     // Lean bulking surplus

  return {
    maintenance: Math.round(maintenance),
    loss: Math.round(loss),
    gain: Math.round(gain),
    bmr: Math.round(bmr)
  };
}
