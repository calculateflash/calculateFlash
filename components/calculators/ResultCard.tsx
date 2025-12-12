import { Card } from "@/components/ui/card";

interface ResultCardProps {
  label: string;
  value: number | string;
}

export function ResultCard({ label, value }: ResultCardProps) {
  return (
    <Card className="p-4">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-xl font-semibold">
        {typeof value === "number" ? `₹${value.toLocaleString()}` : value}
      </div>
    </Card>
  );
}
