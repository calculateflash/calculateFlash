import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CalculatorCardProps {
  title: string;
  description?: string;
  href: string;
  gradient?: string;
}

export function CalculatorMiniCard({
  title,
  description,
  href,
  gradient = "from-blue-500 to-indigo-500",
}: CalculatorCardProps) {
  return (
    <Link href={href} className="block">
      <Card
        className={cn(
          "cursor-pointer bg-linear-to-br text-white",
          "hover:opacity-95 transition",
          gradient
        )}
      >
        <CardContent className="px-3 py-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-medium truncate">
              {title}
            </h3>
            <ArrowRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
          </div>

          {description && (
            <p className="text-[11px] mt-0.5 opacity-85 truncate">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
