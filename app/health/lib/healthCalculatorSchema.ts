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
      question: "What is a BMI calculator?",
      answer:
        "A BMI calculator helps determine Body Mass Index using height and weight to classify weight categories."
    },
    {
      question: "What is a healthy BMI range?",
      answer:
        "A BMI between 18.5 and 24.9 is considered healthy for most adults."
    },
    {
      question: "Is BMI accurate for everyone?",
      answer:
        "BMI is a screening tool and may not be accurate for athletes, muscular individuals, or pregnant women."
    },
    {
      question: "Does BMI differ for men and women?",
      answer:
        "BMI categories are the same for adult men and women."
    }
  ],
  howTo: {
    name: "How to Calculate BMI",
    steps: [
      { text: "Enter your weight in kilograms." },
      { text: "Enter your height in centimeters." },
      { text: "Click calculate to get BMI value and category." }
    ]
  }
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
      question: "What is a BMR calculator?",
      answer:
        "A BMR calculator estimates the number of calories your body burns at rest based on weight, height, age, and gender."
    },
    {
      question: "Which formula is used for BMR?",
      answer:
        "This calculator uses the Mifflin–St Jeor formula, which is widely regarded as the most accurate for adults."
    },
    {
      question: "Why is BMR important?",
      answer:
        "BMR is used to calculate daily calorie needs and helps plan weight loss, maintenance, or muscle gain."
    },
    {
      question: "Does BMR differ for men and women?",
      answer:
        "Yes, men usually have higher BMR due to greater muscle mass, and formulas account for gender differences."
    }
  ],
  howTo: {
    name: "How to Calculate BMR",
    steps: [
      { text: "Enter your weight in kilograms." },
      { text: "Enter your height in centimeters." },
      { text: "Enter your age and select gender." },
      { text: "Click calculate to see BMR value." }
    ]
  }
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
  unitConverter: {
  faq: [
    {
      question: "What is a unit converter?",
      answer:
        "A unit converter is a tool that converts values from one measurement unit to another using standard conversion factors."
    },
    {
      question: "Which units are supported?",
      answer:
        "This converter supports length, weight, temperature, and time units."
    },
    {
      question: "Is unit conversion accurate?",
      answer:
        "Yes, it uses internationally accepted unit conversion standards."
    },
    {
      question: "Does this unit converter work offline?",
      answer:
        "Once the page is loaded, conversions can be done without internet."
    }
  ],
  howTo: {
    name: "How to Convert Units",
    steps: [
      { text: "Select the unit category." },
      { text: "Enter the value to convert." },
      { text: "Choose the source unit." },
      { text: "Choose the target unit." },
      { text: "Click convert to see the result." }
    ]
  }
},

};
