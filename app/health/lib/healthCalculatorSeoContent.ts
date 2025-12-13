export const healthCalculatorSeoContentMap: Record<
  string,
  {
    title: string;
    description: string;
    formula?: string;
    steps: string[];
  }
> = {
  bmiCalculator: {
    title: "How BMI Calculator Works",
    description:
      "BMI Calculator calculates Body Mass Index using height and weight to assess whether a person is underweight, normal, overweight, or obese.",
    formula: "BMI = Weight (kg) ÷ Height² (m²)",
    steps: [
      "Enter your height",
      "Enter your weight",
      "Click calculate",
      "View BMI result and category",
    ],
  },

  bmrCalculator: {
    title: "How BMR Calculator Works",
    description:
      "BMR Calculator estimates calories required to maintain basic body functions at rest.",
    steps: [
      "Enter age, gender, height, and weight",
      "Select activity level",
      "Calculate BMR value",
    ],
  },

  bodyFatCalculator: {
    title: "How Body Fat Calculator Works",
    description:
      "Body Fat Calculator estimates body fat percentage using physical measurements.",
    steps: [
      "Enter gender and age",
      "Enter body measurements",
      "Calculate body fat percentage",
    ],
  },

  calorieIntakeCalculator: {
    title: "How Calorie Intake Calculator Works",
    description:
      "Calorie Intake Calculator estimates daily calorie needs based on activity and goals.",
    steps: [
      "Enter age, gender, height, weight",
      "Select activity level",
      "Calculate daily calories",
    ],
  },

  dueDateCalculator: {
    title: "How Due Date Calculator Works",
    description:
      "Due Date Calculator estimates pregnancy delivery date based on LMP.",
    steps: [
      "Enter last menstrual period date",
      "Calculate estimated due date",
    ],
  },

  idealWeightCalculator: {
    title: "How Ideal Weight Calculator Works",
    description:
      "Ideal Weight Calculator estimates healthy weight range using standard formulas.",
    steps: [
      "Enter height and gender",
      "Calculate ideal weight range",
    ],
  },

  macroCalculator: {
    title: "How Macro Calculator Works",
    description:
      "Macro Calculator splits calories into protein, carbs, and fats.",
    steps: [
      "Enter calorie goal",
      "Select fitness goal",
      "View macro breakdown",
    ],
  },

  numerologyCalculator: {
    title: "How Numerology Calculator Works",
    description:
      "Numerology Calculator calculates life path number from birth date.",
    steps: [
      "Enter date of birth",
      "Calculate numerology number",
    ],
  },

  stressScoreCalculator: {
    title: "How Stress Score Calculator Works",
    description:
      "Stress Score Calculator assesses stress level based on lifestyle inputs.",
    steps: [
      "Answer stress-related questions",
      "Calculate stress score",
    ],
  },

  tdeeCalculator: {
    title: "How TDEE Calculator Works",
    description:
      "TDEE Calculator estimates total daily energy expenditure.",
    steps: [
      "Enter BMR details",
      "Select activity level",
      "Calculate TDEE",
    ],
  },

  unitConverter: {
    title: "How Unit Converter Works",
    description:
      "Unit Converter helps convert health-related measurement units.",
    steps: [
      "Select source unit",
      "Select target unit",
      "Enter value and convert",
    ],
  },

  waterIntakeCalculator: {
    title: "How Water Intake Calculator Works",
    description:
      "Water Intake Calculator estimates daily hydration needs.",
    steps: [
      "Enter body weight",
      "Select activity level",
      "Calculate daily water intake",
    ],
  },
};
