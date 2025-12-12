import { cn } from "@/lib/utils";

interface CalculatorHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function CalculatorHeader({ title, description, className }: CalculatorHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-3xl font-bold text-blue-800  mb-2">
        {title}
      </h1>
      <p className="text-amber-600 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
