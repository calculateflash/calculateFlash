interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export function CalculatorFAQ({ title = "FAQ", items }: FAQProps) {
  return (
    <section className="mt-10 p-6 bg-white rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>

      <div className="space-y-4">
        {items.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold text-slate-800">{faq.question}</h3>
            <p className="text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
