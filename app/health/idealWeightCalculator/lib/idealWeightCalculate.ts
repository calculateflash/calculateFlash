// idealWeightCalculate.ts
export interface IdealWeightInput {
  heightCm: number;
  gender: "male" | "female";
}

export function calculateIdealWeight({ heightCm, gender }: IdealWeightInput) {
  if (!heightCm) {
    return {
      idealWeight: 0
    };
  }

  let idealWeight = 0;

  if (gender === "male") {
    idealWeight = 50 + 0.9 * (heightCm - 152);
  } else {
    idealWeight = 45.5 + 0.9 * (heightCm - 152);
  }

  return {
    idealWeight: Math.round(idealWeight)
  };
}
