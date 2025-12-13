export const healthRelatedCalculatorsMap: Record<
  string,
  {
    title: string;
    description: string;
    href: string;
    gradient: string;
  }[]
> = {
  bmiCalculator: [
    {
      title: "Ideal Weight Calculator",
      description: "Find healthy body weight range.",
      href: "/health/idealWeightCalculator",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Body Fat Calculator",
      description: "Calculate body fat percentage.",
      href: "/health/bodyFatCalculator",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "Calorie Intake Calculator",
      description: "Calculate daily calorie needs.",
      href: "/health/calorieIntakeCalculator",
      gradient: "from-purple-500 to-purple-700",
    },
  ],
};
