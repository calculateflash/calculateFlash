// tdeeCalculate.ts
export interface TDEEInput {
  weightKg: number;
  heightCm: number;
  age: number;
  gender: "male" | "female";
  activity: string;
}

export function calculateTDEE({ weightKg, heightCm, age, gender, activity }: TDEEInput) {
  if (!weightKg || !heightCm || !age) {
    return {
      tdee: 0,
      bmr: 0
    };
  }

  let bmr = 0;

  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  const activityFactors: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  const tdee = bmr * (activityFactors[activity] || 1.2);

  return {
    tdee: Math.round(tdee),
    bmr: Math.round(bmr)
  };
}
