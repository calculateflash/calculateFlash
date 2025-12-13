"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import {
  calculateMatrix,
  Matrix,
  MatrixOperation,
} from "./lib/matrixCalculate";

function parseMatrix(input: string): Matrix {
  return input
    .trim()
    .split("\n")
    .map(r => r.split(",").map(Number));
}

export default function MatrixCalculatorPage() {
  const [matrixA, setMatrixA] = useState("1,2\n3,4");
  const [matrixB, setMatrixB] = useState("5,6\n7,8");
  const [operation, setOperation] =
    useState<MatrixOperation>("add");

  const [matrixResult, setMatrixResult] =
    useState<Matrix | null>(null);
  const [scalarResult, setScalarResult] =
    useState<number | null>(null);

  const handleCalculate = () => {
    const output = calculateMatrix(
      parseMatrix(matrixA),
      parseMatrix(matrixB),
      operation
    );
    if (output.error) return;

    setMatrixResult(output.result ?? null);
    setScalarResult(output.value ?? null);
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="Matrix Calculator"
        description="Perform matrix addition, multiplication, determinant, inverse, and rank calculations instantly. Ideal for students and linear algebra practice."
      />

      <Card className="p-6 mb-6">
        <div className="grid gap-6">

          <textarea
            className="w-full border rounded-md p-2 h-24"
            value={matrixA}
            onChange={e => setMatrixA(e.target.value)}
          />

          <textarea
            className="w-full border rounded-md p-2 h-24"
            value={matrixB}
            onChange={e => setMatrixB(e.target.value)}
          />

          <select
            className="w-full border rounded-md p-2"
            value={operation}
            onChange={e =>
              setOperation(e.target.value as MatrixOperation)
            }
          >
            <option value="add">A + B</option>
            <option value="subtract">A − B</option>
            <option value="multiply">A × B</option>
            <option value="transposeA">Transpose A</option>
            <option value="transposeB">Transpose B</option>
            <option value="determinant">Determinant (A)</option>
            <option value="inverse">Inverse (A)</option>
            <option value="rank">Rank (A)</option>
          </select>

          <ActionsCard
            calculateLabel="Calculate"
            exportLabel="Export PDF"
            onCalculate={handleCalculate}
            onExport={() => {}}
          />
        </div>
      </Card>

      {/* CENTERED MATRIX RESULT */}
      {matrixResult && (
        <div className="mt-10 flex justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Result Matrix
            </h3>

            <div className="inline-block rounded-xl border-2
                            p-6 shadow-lg">
              <table className="border-collapse">
                <tbody>
                  {matrixResult.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="border px-6 py-4
                                     text-lg font-medium
                                     min-w-[80px]"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CENTERED SCALAR RESULT */}
      {scalarResult !== null && (
        <div className="mt-10 flex justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">
              Result Value
            </h3>

            <div className="px-10 py-6 rounded-xl
                            bg-gradient-to-r
                            from-indigo-500 to-purple-600
                            text-white text-3xl font-bold">
              {scalarResult}
            </div>
          </div>
        </div>
      )}
      <CalculatorExplanation
        title="Matrix Operations Explained"
        description="This calculator performs common linear algebra operations used in mathematics and engineering."
        formula={`Determinant (2×2):
|a b|
|c d| = ad − bc

Inverse:
A⁻¹ = adj(A) / det(A)

Rank:
Number of independent rows`}
        steps={[
          "Enter matrix values.",
          "Select the operation.",
          "Click calculate to get the result."
        ]}
      />

      <CalculatorFAQ
        items={[
          { question: "What operations are supported?", answer: "Addition, multiplication, determinant, inverse, transpose and rank." },
          { question: "Matrix format?", answer: "Comma for columns, new line for rows." },
          { question: "Inverse condition?", answer: "Inverse exists only if determinant ≠ 0." },
          { question: "Rank meaning?", answer: "Rank is the number of independent rows." },
          { question: "Exam-ready?", answer: "Yes, follows standard linear algebra rules." },
        ]}
      />

      

    </section>
  );
}
