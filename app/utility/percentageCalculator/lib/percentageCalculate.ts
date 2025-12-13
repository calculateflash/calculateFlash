export interface PercentageInput {
  value: number;
  total: number;
}

export interface PercentageChangeInput {
  oldValue: number;
  newValue: number;
}

export function calculatePercentage({ value, total }: PercentageInput) {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(2));
}

export function calculatePercentageOf({
  value,
  total,
}: PercentageInput) {
  return Number(((value / 100) * total).toFixed(2));
}

export function calculatePercentageChange({
  oldValue,
  newValue,
}: PercentageChangeInput) {
  if (oldValue === 0) return 0;

  const change =
    ((newValue - oldValue) / oldValue) * 100;

  return Number(change.toFixed(2));
}
