export const utilityCalculatorSchemaMap: Record<
  string,
  {
    faq: { question: string; answer: string }[];
    howTo?: { name: string; steps: { text: string }[] };
  }
> = {
  ageCalculator: {
    faq: [
      {
        question: "How is age calculated?",
        answer:
          "Age is calculated based on date of birth and current date.",
      },
    ],
  },

  percentageCalculator: {
    faq: [
      {
        question: "How do I calculate percentage?",
        answer:
          "Percentage is calculated by dividing part by whole and multiplying by 100.",
      },
    ],
  },

  qrCodeGenerator: {
    faq: [
      {
        question: "Is QR code generator free?",
        answer:
          "Yes, QR code generation is free to use.",
      },
    ],
  },
  baseConverter: {
  faq: [
    {
      question: "What is a number base converter?",
      answer:
        "A number base converter converts values between binary, decimal, and hexadecimal number systems."
    },
    {
      question: "Which number systems are supported?",
      answer:
        "This converter supports binary, decimal, and hexadecimal number systems."
    },
    {
      question: "Is this base converter accurate?",
      answer:
        "Yes, it validates inputs and uses standard base conversion methods."
    },
    {
      question: "Who uses base converters?",
      answer:
        "Base converters are commonly used by students, programmers, and electronics engineers."
    }
  ],
  howTo: {
    name: "How to Convert Number Bases",
    steps: [
      { text: "Enter the number you want to convert." },
      { text: "Select the source number system." },
      { text: "Click convert to see binary, decimal, and hexadecimal results." }
    ]
  }
},

};
