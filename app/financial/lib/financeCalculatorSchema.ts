export type FAQItem = {
  question: string;
  answer: string;
};

export type HowToStepItem = {
  text: string;
};

export const calculatorSchemaMap: Record<
  string,
  {
    faq: FAQItem[];
    howTo?: {
      name: string;
      steps: HowToStepItem[];
    };
  }
> = {
  sipCalculator: {
    faq: [
      {
        question: "How does a SIP calculator estimate returns?",
        answer:
          "A SIP calculator uses compound interest to calculate future value based on monthly investment, expected returns, and duration.",
      },
      {
        question: "Is SIP safe for long-term investment?",
        answer:
          "SIP is considered a stable long-term investment strategy due to rupee cost averaging and compounding benefits.",
      },
    ],
    howTo: {
      name: "How to Calculate SIP Returns",
      steps: [
        { text: "Enter monthly SIP amount" },
        { text: "Select investment duration in years" },
        { text: "Enter expected annual return rate" },
        { text: "Click calculate to view SIP returns" },
      ],
    },
  },

  emiCalculator: {
    faq: [
      {
        question: "How is EMI calculated?",
        answer:
          "EMI is calculated using loan amount, interest rate, and tenure with a standard EMI formula.",
      },
      {
        question: "Does EMI change during loan tenure?",
        answer:
          "EMI usually remains constant unless the loan has a floating interest rate.",
      },
    ],
    howTo: {
      name: "How to Calculate EMI",
      steps: [
        { text: "Enter loan amount" },
        { text: "Enter interest rate" },
        { text: "Select loan tenure" },
        { text: "Click calculate to view EMI amount" },
      ],
    },
  },

  gstCalculator: {
    faq: [
      {
        question: "How do I calculate GST?",
        answer:
          "GST is calculated by applying the GST percentage to the original amount.",
      },
      {
        question: "What GST rates are applicable in India?",
        answer:
          "GST slabs in India are 5%, 12%, 18%, and 28%.",
      },
    ],
    howTo: {
      name: "How to Calculate GST",
      steps: [
        { text: "Enter original amount" },
        { text: "Select GST percentage" },
        { text: "Choose add or remove GST" },
        { text: "View GST amount and final price" },
      ],
    },
  },

  incomeTax: {
    faq: [
      {
        question: "How is income tax calculated in India?",
        answer:
          "Income tax is calculated based on income slabs, deductions, and selected tax regime.",
      },
      {
        question: "Which tax regime is better?",
        answer:
          "The better tax regime depends on your income, deductions, and exemptions.",
      },
    ],
    howTo: {
      name: "How to Calculate Income Tax",
      steps: [
        { text: "Enter annual income" },
        { text: "Add deductions if applicable" },
        { text: "Select tax regime" },
        { text: "View estimated tax liability" },
      ],
    },
  },

  compoundCalculator: {
  faq: [
    {
      question: "What is a compound interest calculator?",
      answer:
        "A compound interest calculator helps calculate interest where interest is added to the principal and future interest is earned on both principal and accumulated interest."
    },
    {
      question: "Why use date-based compound interest calculation?",
      answer:
        "Date-based calculation uses the exact duration between investment dates, improving accuracy compared to manual year entry."
    },
    {
      question: "How does compounding frequency affect returns?",
      answer:
        "More frequent compounding increases returns because interest is added to the principal more often."
    },
    {
      question: "Is compound interest better than simple interest?",
      answer:
        "Yes, compound interest generates higher returns over time because interest earns interest."
    }
  ],
  howTo: {
    name: "How to Calculate Compound Interest Using Dates",
    steps: [
      { text: "Enter the principal amount." },
      { text: "Enter the annual interest rate." },
      { text: "Select start and end dates." },
      { text: "Choose compounding frequency." },
      { text: "Click calculate to get interest and total amount." }
    ]
  }
},

  fdCalculator: {
    faq: [
      {
        question: "What is a fixed deposit?",
        answer:
          "A fixed deposit is an investment where money is deposited for a fixed tenure at a fixed interest rate.",
      },
      {
        question: "How is FD maturity calculated?",
        answer:
          "FD maturity is calculated using principal, interest rate, and tenure.",
      },
    ],
    howTo: {
      name: "How to Calculate FD Maturity",
      steps: [
        { text: "Enter deposit amount" },
        { text: "Enter interest rate" },
        { text: "Select deposit tenure" },
        { text: "View maturity amount" },
      ],
    },
  },

  rdCalculator: {
    faq: [
      {
        question: "What is a recurring deposit?",
        answer:
          "A recurring deposit allows you to invest a fixed amount monthly for a chosen tenure.",
      },
      {
        question: "How is RD maturity calculated?",
        answer:
          "RD maturity is calculated using monthly deposits, interest rate, and tenure.",
      },
    ],
    howTo: {
      name: "How to Calculate RD Maturity",
      steps: [
        { text: "Enter monthly deposit amount" },
        { text: "Enter interest rate" },
        { text: "Select tenure" },
        { text: "View RD maturity value" },
      ],
    },
  },

  simpleInterest: {
    faq: [
      {
        question: "What is simple interest?",
        answer:
          "Simple interest is calculated only on the principal amount without compounding.",
      },
      {
        question: "Where is simple interest used?",
        answer:
          "Simple interest is commonly used in short-term loans and basic savings.",
      },
    ],
    howTo: {
      name: "How to Calculate Simple Interest",
      steps: [
        { text: "Enter principal amount" },
        { text: "Enter interest rate" },
        { text: "Enter time period" },
        { text: "View simple interest amount" },
      ],
    },
  },

  lumpSumCalculator: {
  faq: [
    {
      question: "What is a lump sum calculator?",
      answer:
        "A lump sum calculator helps estimate the future value and returns of a one-time investment using compound interest."
    },
    {
      question: "Is lump sum investment better than SIP?",
      answer:
        "Lump sum investment can be beneficial when markets are undervalued, while SIP helps average market volatility. The best choice depends on timing and risk tolerance."
    },
    {
      question: "How are lump sum returns calculated?",
      answer:
        "Lump sum returns are calculated using the compound interest formula based on investment amount, annual return rate, and duration."
    },
    {
      question: "Is lump sum investment risky?",
      answer:
        "Lump sum investments carry market risk, especially in equity funds, but long-term investing can reduce volatility impact."
    }
  ],
  howTo: {
    name: "How to Calculate Lump Sum Investment Returns",
    steps: [
      { text: "Enter the one-time investment amount." },
      { text: "Enter the expected annual return rate." },
      { text: "Enter the investment duration in years." },
      { text: "Click calculate to see future value and interest earned." }
    ]
  }
},


  loanEligibilityCalculator: {
    faq: [
      {
        question: "How is loan eligibility calculated?",
        answer:
          "Loan eligibility is calculated based on income, expenses, and interest rate.",
      },
      {
        question: "Does credit score affect eligibility?",
        answer:
          "Yes, a good credit score increases loan eligibility.",
      },
    ],
    howTo: {
      name: "How to Calculate Loan Eligibility",
      steps: [
        { text: "Enter monthly income" },
        { text: "Enter existing obligations" },
        { text: "Select interest rate" },
        { text: "View eligible loan amount" },
      ],
    },
  },

  loanTenureCalculator: {
    faq: [
      {
        question: "What is loan tenure?",
        answer:
          "Loan tenure is the duration over which the loan is repaid.",
      },
      {
        question: "Can I change loan tenure?",
        answer:
          "Loan tenure can be changed by adjusting EMI or refinancing.",
      },
    ],
    howTo: {
      name: "How to Calculate Loan Tenure",
      steps: [
        { text: "Enter loan amount" },
        { text: "Enter EMI amount" },
        { text: "Enter interest rate" },
        { text: "View repayment tenure" },
      ],
    },
  },
};
