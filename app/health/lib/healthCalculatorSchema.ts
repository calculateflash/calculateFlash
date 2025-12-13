export const healthCalculatorSchemaMap: Record<
  string,
  {
    faq: { question: string; answer: string }[];
    howTo?: { name: string; steps: { text: string }[] };
  }
> = {
  bmiCalculator: {
    faq: [
      {
        question: "What is BMI?",
        answer:
          "BMI stands for Body Mass Index and helps assess healthy weight range.",
      },
      {
        question: "Is BMI accurate?",
        answer:
          "BMI provides a general estimate but does not measure body fat directly.",
      },
    ],
    howTo: {
      name: "How to Calculate BMI",
      steps: [
        { text: "Enter height" },
        { text: "Enter weight" },
        { text: "Click calculate" },
      ],
    },
  },

  bmrCalculator: {
    faq: [
      {
        question: "What is BMR?",
        answer:
          "BMR is the number of calories required to maintain basic bodily functions.",
      },
    ],
  },

  calorieIntakeCalculator: {
    faq: [
      {
        question: "How many calories should I eat daily?",
        answer:
          "Daily calorie needs depend on age, activity level, and goals.",
      },
    ],
  },
};
