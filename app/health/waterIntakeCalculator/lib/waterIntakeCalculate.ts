// waterIntakeCalculate.ts
export interface WaterInput {
  weightKg: number;
  gender: "male" | "female";
  activity: "sedentary" | "light" | "moderate" | "heavy";
  climate: "normal" | "hot" | "very_hot";
  pregnancy: "none" | "pregnant" | "breastfeeding";
  age?: number;
}

export function calculateWaterIntake({
  weightKg,
  gender,
  activity,
  climate,
  pregnancy,
}: WaterInput) {
  if (!weightKg || weightKg <= 0) {
    return {
      waterLiters: 0,
      breakdown: {
        base: 0,
        activity: 0,
        climate: 0,
        pregnancy: 0,
      },
    };
  }

  // Base factor (gender difference)
  const baseFactor = gender === "male" ? 0.035 : 0.033;
  const base = weightKg * baseFactor;

  // Activity additions
  const activityAdditions: Record<
    "sedentary" | "light" | "moderate" | "heavy",
    number
  > = {
    sedentary: 0,
    light: 0.3,
    moderate: 0.6,
    heavy: 1.0,
  };

  // Climate additions
  const climateAdditions: Record<"normal" | "hot" | "very_hot", number> = {
    normal: 0,
    hot: 0.3,
    very_hot: 0.5,
  };

  // Pregnancy additions
  const pregnancyAdditions: Record<
    "none" | "pregnant" | "breastfeeding",
    number
  > = {
    none: 0,
    pregnant: 0.5,
    breastfeeding: 0.75,
  };

  const activityAddition = activityAdditions[activity];
  const climateAddition = climateAdditions[climate];
  const pregnancyAddition = pregnancyAdditions[pregnancy];

  // TOTAL — use const (ESLint fix)
  const total =
    base + activityAddition + climateAddition + pregnancyAddition;

  return {
    waterLiters: Number(total.toFixed(2)),
    breakdown: {
      base: Number(base.toFixed(2)),
      activity: Number(activityAddition.toFixed(2)),
      climate: Number(climateAddition.toFixed(2)),
      pregnancy: Number(pregnancyAddition.toFixed(2)),
    },
  };
}
