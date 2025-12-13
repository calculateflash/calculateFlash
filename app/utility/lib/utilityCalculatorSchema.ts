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
};
