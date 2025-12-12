// macroCalculate.ts
export interface MacroInput {
  weightKg: number;
  heightCm: number;
  age: number;
  gender: "male" | "female";
  activity: string;
  goal: "maintenance" | "loss" | "gain";
}

export function calculateMacros({
  weightKg,
  heightCm,
  age,
  gender,
  activity,
  goal
}: MacroInput) {
  if (!weightKg || !heightCm || !age) {
    return {
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0
    };
  }

  // STEP 1: BMR (Mifflin-St Jeor)
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  // STEP 2: Activity multiplier
  const activityFactors: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  const tdee = bmr * (activityFactors[activity] || 1.2);

  // STEP 3: Goal adjustment
  let calories = tdee;

  if (goal === "loss") calories -= 500;       // Standard deficit
  if (goal === "gain") calories += 300;       // Lean bulk surplus

  // STEP 4: Macro split
  const protein = weightKg * 2.0;            // 2g per kg → optimal range
  const proteinCal = protein * 4;

  const fat = (0.25 * calories) / 9;        // 25% calories from fat
  const fatCal = fat * 9;

  const remainingCalories = calories - (proteinCal + fatCal);
  const carbs = remainingCalories / 4;

  return {
    calories: Math.round(calories),
    protein: Math.round(protein),
    fat: Math.round(fat),
    carbs: Math.max(0, Math.round(carbs))
  };
}
