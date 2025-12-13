export type FlamesResult =
  | "Friends"
  | "Love"
  | "Affection"
  | "Marriage"
  | "Enemy"
  | "Siblings";

const flamesMap: Record<string, FlamesResult> = {
  F: "Friends",
  L: "Love",
  A: "Affection",
  M: "Marriage",
  E: "Enemy",
  S: "Siblings",
};

export function calculateFlames(
  name1: string,
  name2: string
): FlamesResult {
  const a = name1.toLowerCase().replace(/[^a-z]/g, "").split("");
  const b = name2.toLowerCase().replace(/[^a-z]/g, "").split("");

  for (let i = 0; i < a.length; i++) {
    const index = b.indexOf(a[i]);
    if (index !== -1) {
      a[i] = "";
      b[index] = "";
    }
  }

  const count = a.join("").length + b.join("").length;
  const flames = ["F", "L", "A", "M", "E", "S"];

  let idx = 0;
  while (flames.length > 1) {
    idx = (idx + count - 1) % flames.length;
    flames.splice(idx, 1);
  }

  return flamesMap[flames[0]];
}
