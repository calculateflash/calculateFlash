export type Matrix = number[][];

export type MatrixOperation =
  | "add"
  | "subtract"
  | "multiply"
  | "transposeA"
  | "transposeB"
  | "determinant"
  | "inverse"
  | "rank";

/* ---------- Helpers ---------- */

function isSquare(m: Matrix): boolean {
  return m.length === m[0].length;
}

function cloneMatrix(m: Matrix): Matrix {
  return m.map(row => [...row]);
}

/* ---------- Determinant ---------- */

function determinant(matrix: Matrix): number {
  const n = matrix.length;

  if (n === 1) return matrix[0][0];
  if (n === 2) {
    return (
      matrix[0][0] * matrix[1][1] -
      matrix[0][1] * matrix[1][0]
    );
  }

  let det = 0;
  for (let col = 0; col < n; col++) {
    const sub = matrix
      .slice(1)
      .map(row => row.filter((_, j) => j !== col));

    det +=
      (col % 2 === 0 ? 1 : -1) *
      matrix[0][col] *
      determinant(sub);
  }
  return det;
}

/* ---------- Inverse ---------- */

function inverse(matrix: Matrix): Matrix | null {
  const det = determinant(matrix);
  if (det === 0) return null;

  const n = matrix.length;
  const adj: Matrix = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sub = matrix
        .filter((_, r) => r !== i)
        .map(row => row.filter((_, c) => c !== j));

      const sign = (i + j) % 2 === 0 ? 1 : -1;
      adj[j][i] = sign * determinant(sub);
    }
  }

  return adj.map(row =>
    row.map(v => Number((v / det).toFixed(3)))
  );
}

/* ---------- Rank ---------- */

function rank(matrix: Matrix): number {
  const m = cloneMatrix(matrix);
  const rows = m.length;
  const cols = m[0].length;
  let rank = cols;

  for (let r = 0; r < rank; r++) {
    if (m[r][r] !== 0) {
      for (let c = 0; c < rows; c++) {
        if (c !== r) {
          const mult = m[c][r] / m[r][r];
          for (let k = 0; k < rank; k++) {
            m[c][k] -= mult * m[r][k];
          }
        }
      }
    } else {
      let reduce = true;
      for (let i = r + 1; i < rows; i++) {
        if (m[i][r] !== 0) {
          [m[r], m[i]] = [m[i], m[r]];
          reduce = false;
          break;
        }
      }

      if (reduce) {
        rank--;
        for (let i = 0; i < rows; i++) {
          m[i][r] = m[i][rank];
        }
        r--;
      }
    }
  }
  return rank;
}

/* ---------- Main ---------- */

export function calculateMatrix(
  A: Matrix,
  B: Matrix,
  op: MatrixOperation
): { result?: Matrix; value?: number; error?: string } {

  const rA = A.length;
  const cA = A[0].length;
  const rB = B.length;
  const cB = B[0].length;

  if (op === "add" || op === "subtract") {
    if (rA !== rB || cA !== cB) {
      return { error: "Matrices must have same dimensions" };
    }
    return {
      result: A.map((row, i) =>
        row.map((v, j) =>
          op === "add" ? v + B[i][j] : v - B[i][j]
        )
      ),
    };
  }

  if (op === "multiply") {
    if (cA !== rB) {
      return { error: "Columns of A must equal rows of B" };
    }
    const res: Matrix = Array.from({ length: rA }, () =>
      Array(cB).fill(0)
    );
    for (let i = 0; i < rA; i++) {
      for (let j = 0; j < cB; j++) {
        for (let k = 0; k < cA; k++) {
          res[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return { result: res };
  }

  if (op === "transposeA") {
    return { result: A[0].map((_, i) => A.map(r => r[i])) };
  }

  if (op === "transposeB") {
    return { result: B[0].map((_, i) => B.map(r => r[i])) };
  }

  if (op === "determinant") {
    if (!isSquare(A)) return { error: "Square matrix required" };
    return { value: determinant(A) };
  }

  if (op === "inverse") {
    if (!isSquare(A)) return { error: "Square matrix required" };
    const inv = inverse(A);
    if (!inv) return { error: "Matrix has no inverse" };
    return { result: inv };
  }

  if (op === "rank") {
    return { value: rank(A) };
  }

  return { error: "Invalid operation" };
}
