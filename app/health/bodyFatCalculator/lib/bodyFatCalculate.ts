// bodyFatCalculate.ts
export interface BodyFatInput {
  heightCm: number;
  neckCm: number;
  waistCm: number;
  hipCm?: number;
  gender: "male" | "female";
}

export function calculateBodyFat({
  heightCm,
  neckCm,
  waistCm,
  hipCm,
  gender
}: BodyFatInput) {
  if (!heightCm || !neckCm || !waistCm) {
    return {
      bodyFat: 0,
      category: "Invalid input"
    };
  }

  let bodyFat = 0;

  if (gender === "male") {
    bodyFat =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waistCm - neckCm) +
          0.15456 * Math.log10(heightCm)) -
      450;
  } else {
    if (!hipCm) {
      return {
        bodyFat: 0,
        category: "Hip required for female"
      };
    }

    bodyFat =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistCm + hipCm - neckCm) +
          0.221 * Math.log10(heightCm)) -
      450;
  }

  const category =
    bodyFat < 6
      ? "Essential Fat"
      : bodyFat < 14
      ? "Athletes"
      : bodyFat < 18
      ? "Fitness"
      : bodyFat < 25
      ? "Average"
      : "Obese";

  return {
    bodyFat: Number(bodyFat.toFixed(1)),
    category
  };
}
