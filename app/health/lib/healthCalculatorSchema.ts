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

  bodyFatCalculator: {
  faq: [
    {
      question: "What is a body fat calculator?",
      answer:
        "A body fat calculator estimates body fat percentage using body measurements such as height, waist, neck, and hip based on the U.S. Navy Method."
    },
    {
      question: "Is the U.S. Navy Method accurate?",
      answer:
        "It is more accurate than BMI and widely used for estimating body fat, though medical scans provide higher precision."
    },
    {
      question: "Why does the formula differ for men and women?",
      answer:
        "Men and women store fat differently, so the Navy Method uses different measurements to improve accuracy."
    },
    {
      question: "Can body fat percentage change over time?",
      answer:
        "Yes, body fat percentage can decrease with exercise, healthy diet, and consistent fitness routines."
    }
  ],
  howTo: {
    name: "How to Calculate Body Fat Percentage",
    steps: [
      { text: "Measure your height, waist, and neck." },
      { text: "Measure hip circumference if you are female." },
      { text: "Enter measurements into the calculator." },
      { text: "Click calculate to see body fat percentage and category." }
    ]
  }
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
