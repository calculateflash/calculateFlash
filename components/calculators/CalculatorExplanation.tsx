interface ExplanationProps {
  title: string;
  description: string;
  steps?: string[];
  formula?: string;
}

export function CalculatorExplanation({
  title,
  description,
  steps = [],
  formula,
}: ExplanationProps) {
  return (
    <section className="mt-10 p-6 bg-white rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-3">{title}</h2>
      <p className="text-slate-700 mb-4">{description}</p>

      {formula && (
        <div className="p-4 bg-slate-100 rounded-md text-sm font-mono mb-4">
          <strong>Formula:</strong>
          <br />
          {formula}
        </div>
      )}

      {steps.length > 0 && (
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
    </section>
  );
}
