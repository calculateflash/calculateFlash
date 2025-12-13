"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const related = utilityRelatedCalculatorsMap.equationSolver;
import {
  solvePolynomial,
  parsePolynomial,
  PolynomialResult,
} from "./lib/polynomialSolve";

import { PolynomialGraph } from "./lib/PolynomialGraph";

type Mode = "linear" | "quadratic" | "cubic" | "higher";

export default function EquationSolverPage() {
  const [mode, setMode] = useState<Mode>("linear");
  const [coeffs, setCoeffs] = useState<(number | "")[]>(["", ""]);
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState<PolynomialResult | null>(null);
  const [error, setError] = useState("");

  const inputsCount =
    mode === "linear" ? 2 : mode === "quadratic" ? 3 : 4;

  /* ---------- VALIDATION ---------- */
  const validateInputs = (): boolean => {
    if (mode === "higher") {
      if (!expr.trim()) {
        setError("Please enter a polynomial expression.");
        return false;
      }
      return true;
    }

    for (let i = 0; i < inputsCount; i++) {
      if (coeffs[i] === "") {
        setError("Please fill in all coefficient fields.");
        return false;
      }
    }

    if (Number(coeffs[0]) === 0) {
      setError("Leading coefficient cannot be 0.");
      return false;
    }

    return true;
  };

  const handleSolve = () => {
    setError("");
    setResult(null);

    if (!validateInputs()) return;

    const coefficients =
      mode === "higher"
        ? parsePolynomial(expr)
        : coeffs.map((v) => Number(v));

    setResult(solvePolynomial(coefficients));
  };

  /* ---------- STEP-BY-STEP ---------- */
  const buildSteps = (): string[] => {
    if (!result) return [];

    /* ===== EXPRESSION MODE (ROOTS INCLUDED) ===== */
    if (mode === "higher") {
      const steps: string[] = [];

      steps.push(`Step 1: Given polynomial expression: ${expr} = 0`);
      steps.push(`Step 2: Degree of polynomial = ${result.degree}`);
      steps.push("Step 3: Convert expression into standard polynomial form");
      steps.push("Step 4: Numerical methods are applied to compute roots");

      result.roots.forEach((r, i) => {
        steps.push(
          Math.abs(r.im) < 1e-8
            ? `Step ${5 + i}: Root ${i + 1} → x = ${r.re.toFixed(4)}`
            : `Step ${5 + i}: Root ${i + 1} → x = ${r.re.toFixed(4)} ${
                r.im > 0 ? "+" : "-"
              } ${Math.abs(r.im).toFixed(4)}i`
        );
      });

      steps.push(
        `Step ${5 + result.roots.length}: Verify roots by substitution f(x) ≈ 0`
      );

      return steps;
    }

    const nums = coeffs.map((v) => Number(v));

    /* ---------- LINEAR ---------- */
    if (mode === "linear") {
      const [a, b] = nums;
      return [
        "Step 1: Given equation: ax + b = 0",
        `Step 2: Substitute values → ${a}x + ${b} = 0`,
        `Step 3: Move constant → ${a}x = ${-b}`,
        `Step 4: Divide both sides by ${a}`,
        `Step 5: Solution → x = ${(-b / a).toFixed(4)}`,
      ];
    }

    /* ---------- QUADRATIC ---------- */
    if (mode === "quadratic") {
      const [a, b, c] = nums;
      const D = b * b - 4 * a * c;
      const steps: string[] = [];

      steps.push("Step 1: Given equation: ax² + bx + c = 0");
      steps.push(`Step 2: Substitute values → ${a}x² + ${b}x + ${c} = 0`);
      steps.push("Step 3: Apply quadratic formula");
      steps.push("        x = (−b ± √(b² − 4ac)) / 2a");
      steps.push(`Step 4: Discriminant D = ${D}`);

      if (D >= 0) {
        steps.push("Step 5: D ≥ 0 → real roots");
        result.roots.forEach((r, i) => {
          steps.push(`Step ${6 + i}: Root ${i + 1} → x = ${r.re.toFixed(4)}`);
        });
      } else {
        const real = -b / (2 * a);
        const imag = Math.sqrt(-D) / (2 * a);

        steps.push("Step 5: D < 0 → complex roots");
        steps.push(`Step 6: √${D} = ${Math.sqrt(-D).toFixed(4)}i`);
        steps.push(
          real === 0
            ? `Step 7: Roots → x = ± ${imag.toFixed(4)}i`
            : `Step 7: Roots → x = ${real.toFixed(4)} ± ${imag.toFixed(4)}i`
        );
      }

      return steps;
    }

    /* ---------- CUBIC ---------- */
    const [a, b, c, d] = nums;
    const steps: string[] = [];

    steps.push("Step 1: Given cubic equation:");
    steps.push(`        ${a}x³ + ${b}x² + ${c}x + ${d} = 0`);

    const testValues = [-3, -2, -1, 1, 2, 3];
    let factor: number | null = null;

    for (const x of testValues) {
      const val = a * x ** 3 + b * x ** 2 + c * x + d;
      steps.push(`Step 2: Try x = ${x}`);
      steps.push(`        f(${x}) = ${val}`);
      if (val === 0) {
        steps.push(`        ✓ (x − ${x}) is a factor`);
        factor = x;
        break;
      }
    }

    if (factor !== null) {
      steps.push("Step 3: Reduce cubic to quadratic");
      steps.push("Step 4: Solve resulting quadratic equation");
    } else {
      steps.push("Step 3: No integer roots found");
      steps.push("Step 4: Apply Cardano’s method");
    }

    result.roots.forEach((r, i) => {
      steps.push(
        Math.abs(r.im) < 1e-8
          ? `Step ${5 + i}: Root ${i + 1} → x = ${r.re.toFixed(4)}`
          : `Step ${5 + i}: Root ${i + 1} → x = ${r.re.toFixed(4)} ${
              r.im > 0 ? "+" : "-"
            } ${Math.abs(r.im).toFixed(4)}i`
      );
    });

    return steps;
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Equation Solver"
        description="Solve linear, quadratic, cubic, and higher-degree polynomial equations with accurate step-by-step calculations."
      />

      <Card className="p-6 space-y-4 mb-6">

        <select
          className="border p-2 rounded w-full"
          value={mode}
          onChange={(e) => {
            const m = e.target.value as Mode;
            setMode(m);
            setCoeffs(
              Array(m === "linear" ? 2 : m === "quadratic" ? 3 : 4).fill("")
            );
            setExpr("");
            setResult(null);
            setError("");
          }}
        >
          <option value="linear">Linear (ax + b)</option>
          <option value="quadratic">Quadratic (ax² + bx + c)</option>
          <option value="cubic">Cubic (ax³ + bx² + cx + d)</option>
          <option value="higher">Any Degree (expression)</option>
        </select>

        {mode !== "higher" ? (
          <>
            {coeffs.slice(0, inputsCount).map((v, i) => (
              <input
                key={i}
                type="number"
                className="border p-2 rounded w-full"
                placeholder={`Enter coefficient ${i + 1}`}
                value={v}
                onChange={(e) => {
                  const next = [...coeffs];
                  next[i] = e.target.value === "" ? "" : Number(e.target.value);
                  setCoeffs(next);
                }}
              />
            ))}
            <p className="text-sm text-gray-600">
              {mode === "linear" &&
                "Example: a = 2, b = -4 → 2x − 4 = 0"}
              {mode === "quadratic" &&
                "Example: a = 1, b = -5, c = 6 → x² − 5x + 6 = 0"}
              {mode === "cubic" &&
                "Example: a = 1, b = -6, c = 11, d = -6 → x³ − 6x² + 11x − 6 = 0"}
            </p>
          </>
        ) : (
          <>
            <input
              className="border p-2 rounded w-full"
              placeholder="Example: x^4 - 5x^2 + 4"
              value={expr}
              onChange={(e) => setExpr(e.target.value)}
            />
            <p className="text-sm text-gray-600">
              Supports expressions of any degree.
            </p>
          </>
        )}

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <ActionsCard
          calculateLabel="Solve"
          exportLabel="Export PDF"
          onCalculate={handleSolve}
          onExport={() => {}}
        />
      </Card>

      {result && (
        <>
          {/* ROOTS */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-4">Roots</h3>
            <div className="space-y-2">
              {result.roots.map((r, i) => (
                <div
                  key={i}
                  className="text-lg font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
                >
                  {Math.abs(r.im) < 1e-8
                    ? `x${i + 1} = ${r.re.toFixed(4)}`
                    : `x${i + 1} = ${r.re.toFixed(4)} ${
                        r.im > 0 ? "+" : "-"
                      } ${Math.abs(r.im).toFixed(4)}i`}
                </div>
              ))}
            </div>
          </div>

          <PolynomialGraph
            coefficients={result.coefficients}
            roots={result.roots}
          />

          <CalculatorExplanation
            title="Step-by-Step Calculation"
            description="Below is the actual numeric calculation used to solve the equation."
            steps={buildSteps()}
          />
        </>
      )}

      <CalculatorFAQ
        items={[
          {
            question: "Why are roots repeated in explanation and above?",
            answer:
              "Roots are shown visually and textually for better understanding."
          },
          {
            question: "Why are numerical methods used for expressions?",
            answer:
              "Symbolic steps vary by equation; numerical methods are reliable."
          },
          {
            question: "Can I solve equations with decimals?",
            answer: "Yes, decimal and negative values are supported."
          },
          {
            question: "Is this solver suitable for students?",
            answer: "Yes, steps are written clearly."
          },
          {
            question: "Is the math accurate?",
            answer: "Yes, standard polynomial-solving methods are used."
          },
        ]}
      />
<section className="mt-12">
                      <h2 className="text-xl font-semibold mb-6">
                          Some other Calculators
                      </h2>
                
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {related.map((calc) => (
                          <CalculatorMiniCard key={calc.href} {...calc} />
                          ))}
                      </div>
                  </section>
                  <StructuredData
  calculatorKey="equationSolver"
  pageTitle="Equation Solver"
  pageUrl={`${SITE_URL}/utility/equation-solver`}
  breadcrumbs={[
    { name: "Home", url: SITE_URL },
    { name: "Utility Calculators", url: `${SITE_URL}/utility` },
    { name: "Equation Solver", url: `${SITE_URL}/utility/equation-solver` },
  ]}
/>

    </section>
  );
}
