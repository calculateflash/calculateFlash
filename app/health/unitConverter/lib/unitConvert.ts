export type UnitCategory =
  | "length"
  | "weight"
  | "time"
  | "temperature";

/* ---------- UNIT MAP TYPES ---------- */

type UnitMap = Record<string, number>;

const lengthUnits: UnitMap = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  mile: 1609.34,
  foot: 0.3048,
};

const weightUnits: UnitMap = {
  kilogram: 1,
  gram: 0.001,
  milligram: 0.000001,
  pound: 0.453592,
};

const timeUnits: UnitMap = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
};

/* ---------- EXPORTED UNITS ---------- */

export const units: Record<
  Exclude<UnitCategory, "temperature">,
  UnitMap
> = {
  length: lengthUnits,
  weight: weightUnits,
  time: timeUnits,
};

/* ---------- CONVERTER ---------- */

export function convertUnit(
  category: UnitCategory,
  value: number,
  from: string,
  to: string
): number {
  if (category === "temperature") {
    return convertTemperature(value, from, to);
  }

  const unitMap = units[category];

  const baseValue = value * unitMap[from];
  const converted = baseValue / unitMap[to];

  return Number(converted.toFixed(6));
}

/* ---------- TEMPERATURE ---------- */

function convertTemperature(
  value: number,
  from: string,
  to: string
): number {
  let celsius: number;

  if (from === "fahrenheit") {
    celsius = ((value - 32) * 5) / 9;
  } else if (from === "kelvin") {
    celsius = value - 273.15;
  } else {
    celsius = value;
  }

  if (to === "fahrenheit") {
    return Number(((celsius * 9) / 5 + 32).toFixed(2));
  }

  if (to === "kelvin") {
    return Number((celsius + 273.15).toFixed(2));
  }

  return Number(celsius.toFixed(2));
}
