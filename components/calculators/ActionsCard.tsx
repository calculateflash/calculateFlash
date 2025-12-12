import { Button } from "@/components/ui/button";

interface CalcActionsProps {
  calculateLabel?: string;
  exportLabel?: string;
  onCalculate: () => void;
  onExport?: () => void;
}

export function ActionsCard({
  calculateLabel = "Calculate",
  exportLabel = "Export PDF",
  onCalculate,
  onExport,
}: CalcActionsProps) {
  return (
    <div className="flex gap-4 items-end">
      <Button
        variant="amber"
        onClick={onCalculate}
        className="cursor-pointer"
      >
        {calculateLabel}
      </Button>

      <Button
        variant="amberOutline"
        className="cursor-pointer"
        onClick={onExport}
      >
        {exportLabel}
      </Button>
    </div>
  );
}
