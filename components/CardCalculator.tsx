import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CalculatorCardProps {
  title: string;
  description?: string;
  href: string;
  gradient?: string; // e.g., "from-blue-500 to-cyan-500"
}

export function CalculatorCard({
  title,
  description,
  href,
  gradient = "from-blue-500 to-indigo-500",
}: CalculatorCardProps) {
  return (
    <Link href={href}>
      <Card className={cn(
        "cursor-pointer hover:shadow-md transition-shadow bg-linear-to-br text-white",
        gradient
      )}>
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <ArrowRight className="w-5 h-5 opacity-80" />
          </div>
          {description && (
            <p className="text-sm mt-2 opacity-90">{description}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
