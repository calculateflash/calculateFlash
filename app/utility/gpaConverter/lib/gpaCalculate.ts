export interface GPAInput {
  value: number;
  scale: 4 | 5 | 10;
}

export function convertGPA({ value, scale }: GPAInput) {
  // Allow decimals like 8.75, 7.33, 3.5 etc.
  if (isNaN(value) || value < 0) {
    return { error: "Invalid GPA/CGPA value" };
  }

  // 10-point scale (CGPA → Percentage)
  if (scale === 10) {
    return {
      percentage: Number((value * 9.5).toFixed(2)),
      formula: "Percentage = CGPA × 9.5"
    };
  }

  // 4-point scale
  if (scale === 4) {
    const percentage = (value / 4) * 100;
    return {
      percentage: Number(percentage.toFixed(2)),
      formula: "Percentage = (GPA ÷ 4) × 100"
    };
  }

  // 5-point scale
  if (scale === 5) {
    const percentage = (value / 5) * 100;
    return {
      percentage: Number(percentage.toFixed(2)),
      formula: "Percentage = (GPA ÷ 5) × 100"
    };
  }

  return { error: "Invalid scale" };
}
