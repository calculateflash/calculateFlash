export interface LoveResult {
  percentage: number;
  label: string;
}

export function calculateLoveCompatibility(
  name1: string,
  name2: string
): LoveResult {
  const clean = (name: string) =>
    name.toLowerCase().replace(/[^a-z]/g, "");

  const a = clean(name1);
  const b = clean(name2);

  let score = 0;

  for (const ch of a) {
    if (b.includes(ch)) score += ch.charCodeAt(0);
  }

  for (const ch of b) {
    if (a.includes(ch)) score += ch.charCodeAt(0);
  }

  const percentage = Math.min(
    100,
    Math.max(30, score % 101)
  );

  let label = "Good Match";
  if (percentage >= 85) label = "Perfect Match ❤️";
  else if (percentage >= 70) label = "Strong Compatibility 💖";
  else if (percentage >= 50) label = "Average Compatibility 🙂";
  else label = "Needs Effort ⚠️";

  return {
    percentage,
    label,
  };
}
