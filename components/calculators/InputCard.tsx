import { Input } from "@/components/ui/input";

interface CalcInputProps {
  label: string;
  value: number | "";
  onChange: (val: number | "") => void;
}

export function InputCard({ label, value, onChange }: CalcInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Empty input → send empty string
    if (val === "") {
      onChange("");
      return;
    }

    // Valid number
    const num = Number(val);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <Input value={value} onChange={handleChange} />
    </div>
  );
}
