// bmrCalculate.ts
export interface BMRInput {
  weightKg: number;
  heightCm: number;
  age: number;
  gender: "male" | "female";
}

export function calculateBMR({ weightKg, heightCm, age, gender }: BMRInput) {
  if (!weightKg || !heightCm || !age) {
    return {
      bmr: 0
    };
  }

  let bmr = 0;

  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  return {
    bmr: Math.round(bmr)
  };
}
