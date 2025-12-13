export interface NumerologyResult {
  lifePath: number;
  meaning: string;
  traits: string[];
}

function reduceToLifePath(num: number): number {
  while (num > 9 && num !== 11 && num !== 22) {
    num = num
      .toString()
      .split("")
      .reduce((s, d) => s + Number(d), 0);
  }
  return num;
}

export function calculateNumerology(dob: string): NumerologyResult {
  const digits = dob.replace(/-/g, "");
  const sum = digits
    .split("")
    .reduce((s, d) => s + Number(d), 0);

  const lifePath = reduceToLifePath(sum);

  const meanings: Record<number, NumerologyResult> = {
    1: {
      lifePath: 1,
      meaning: "Leader",
      traits: ["Independent", "Confident", "Ambitious"],
    },
    2: {
      lifePath: 2,
      meaning: "Peacemaker",
      traits: ["Diplomatic", "Kind", "Supportive"],
    },
    3: {
      lifePath: 3,
      meaning: "Creative Soul",
      traits: ["Creative", "Expressive", "Optimistic"],
    },
    4: {
      lifePath: 4,
      meaning: "Builder",
      traits: ["Practical", "Hardworking", "Reliable"],
    },
    5: {
      lifePath: 5,
      meaning: "Adventurer",
      traits: ["Freedom-loving", "Energetic", "Curious"],
    },
    6: {
      lifePath: 6,
      meaning: "Caretaker",
      traits: ["Responsible", "Caring", "Protective"],
    },
    7: {
      lifePath: 7,
      meaning: "Thinker",
      traits: ["Analytical", "Spiritual", "Intuitive"],
    },
    8: {
      lifePath: 8,
      meaning: "Achiever",
      traits: ["Powerful", "Goal-oriented", "Disciplined"],
    },
    9: {
      lifePath: 9,
      meaning: "Humanitarian",
      traits: ["Compassionate", "Generous", "Idealistic"],
    },
    11: {
      lifePath: 11,
      meaning: "Master Intuitive",
      traits: ["Visionary", "Inspirational", "Sensitive"],
    },
    22: {
      lifePath: 22,
      meaning: "Master Builder",
      traits: ["Strategic", "Practical", "Leader"],
    },
  };

  return meanings[lifePath];
}
