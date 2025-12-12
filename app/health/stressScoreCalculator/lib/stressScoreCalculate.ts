export interface StressInput {
  sleep: number;        // hours per day
  workHours: number;    // hours per day
  screenTime: number;   // hours per day
  activity: "none" | "light" | "moderate" | "high";
  caffeine: "low" | "medium" | "high";
  mood: "happy" | "neutral" | "stressed" | "anxious";
}

export function calculateStressScore(input: StressInput) {
  let score = 0;

  // Sleep (low sleep increases stress)
  if (input.sleep < 5) score += 25;
  else if (input.sleep < 7) score += 15;
  else if (input.sleep < 8) score += 5;
  else score += 0;

  // Work hours
  if (input.workHours > 12) score += 25;
  else if (input.workHours > 9) score += 15;
  else if (input.workHours > 6) score += 5;

  // Screen time
  if (input.screenTime > 8) score += 20;
  else if (input.screenTime > 5) score += 10;
  else if (input.screenTime > 3) score += 5;

  // Caffeine
  if (input.caffeine === "high") score += 15;
  else if (input.caffeine === "medium") score += 8;

  // Activity (more activity reduces stress)
  if (input.activity === "none") score += 15;
  else if (input.activity === "light") score += 8;
  else if (input.activity === "moderate") score += 3;
  else score += 0;

  // Mood impact
  const moodScore = {
    happy: 0,
    neutral: 8,
    stressed: 18,
    anxious: 25,
  };
  score += moodScore[input.mood];

  // Cap score 0–100
  score = Math.min(100, Math.max(0, score));

  // Category
  let category = "";
  if (score <= 20) category = "Low Stress";
  else if (score <= 40) category = "Mild Stress";
  else if (score <= 60) category = "Moderate Stress";
  else if (score <= 80) category = "High Stress";
  else category = "Very High Stress";

  return {
    stressScore: score,
    category,
  };
}
