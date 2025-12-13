export type BaseType = "binary" | "decimal" | "hex";

export function convertAll(value: string, from: BaseType) {
  let decimalValue: number;

  // Validate + convert to decimal
  try {
    if (from === "binary") {
      if (!/^[01]+$/.test(value)) return { error: "Invalid binary number" };
      decimalValue = parseInt(value, 2);
    } else if (from === "decimal") {
      if (!/^[0-9]+$/.test(value)) return { error: "Invalid decimal number" };
      decimalValue = parseInt(value, 10);
    } else {
      if (!/^[0-9a-fA-F]+$/.test(value)) return { error: "Invalid hex number" };
      decimalValue = parseInt(value, 16);
    }

    return {
      binary: decimalValue.toString(2),
      decimal: decimalValue.toString(10),
      hex: decimalValue.toString(16).toUpperCase()
    };
  } catch (err) {
    return { error: "Conversion failed" };
  }
}
