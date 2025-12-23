"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";

const related = utilityRelatedCalculatorsMap.matrixCalculator;
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
          title="Matrix Solver Online"
          description="Use this matrix solver to perform addition, subtraction, multiplication, transpose, determinant, inverse, and rank calculations step by step. Ideal for students studying linear algebra."
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
                                     min-w-20"
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
                            bg-linear-to-r
                            from-indigo-500 to-purple-600
                            text-white text-3xl font-bold">
              {scalarResult}
            </div>
          </div>
        </div>
      )}
      <CalculatorExplanation
  title="Matrix Operations Explained"
  description="This matrix solver helps you solve common linear algebra problems used in mathematics, engineering, and competitive exams."
  formula={`Determinant (2×2):
|a b|
|c d| = ad − bc

Inverse:
A⁻¹ = adj(A) / det(A)

Rank:
Number of linearly independent rows`}
  steps={[
    "Enter matrix values using commas for columns and new lines for rows.",
    "Select the required matrix operation.",
    "Click calculate to instantly get the result."
  ]}
/>

<Card className="p-6 mt-10 text-gray-700">
  <h2 className="text-xl text-blue-700 font-semibold">
    What is a Matrix Solver?
  </h2>

  <p>
    A matrix solver is an online tool used to solve matrix-based problems in
    linear algebra. It helps students quickly perform operations such as matrix
    addition, multiplication, determinant calculation, inverse finding, and
    rank determination without manual computation.
  </p>

  <p>
    This matrix calculator is especially useful for school and college students,
    engineering aspirants, and anyone preparing for exams where accuracy and
    speed are important.
  </p>

  <p>
    By following standard mathematical rules, the solver ensures reliable
    results that match textbook solutions.
  </p>
</Card>


      <CalculatorFAQ
        items={[
  {
    question: "What is a matrix solver?",
    answer: "A matrix solver is an online calculator used to perform matrix operations such as addition, multiplication, determinant, inverse, transpose, and rank."
  },
  {
    question: "How do I enter matrix values?",
    answer: "Enter values separated by commas for columns and use a new line for each row."
  },
  {
    question: "Can this matrix solver be used for exams?",
    answer: "Yes, it follows standard linear algebra rules and is suitable for exam practice and verification."
  },
  {
    question: "When does a matrix inverse exist?",
    answer: "A matrix inverse exists only when the determinant of the matrix is not zero."
  },
  {
    question: "What does matrix rank represent?",
    answer: "Matrix rank represents the number of linearly independent rows or columns in the matrix."
  }
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
  

    </section>
  );
}
