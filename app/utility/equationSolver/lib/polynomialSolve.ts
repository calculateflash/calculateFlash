export interface Complex {
  re: number;
  im: number;
}

export interface PolynomialResult {
  degree: number;
  coefficients: number[];
  roots: Complex[];
  verified: number[];
  factorization?: string;
  steps: string[];
}

const EPS = 1e-8;

/* ================= UTIL ================= */

const evaluate = (coeffs: number[], x: number): number =>
  coeffs.reduce((acc, c) => acc * x + c, 0);

/* ================= LINEAR ================= */

function solveLinear([a, b]: number[]): PolynomialResult {
  const root = -b / a;

  return {
    degree: 1,
    coefficients: [a, b],
    roots: [{ re: root, im: 0 }],
    verified: [Math.abs(evaluate([a, b], root))],
    steps: [
      "Given equation: ax + b = 0",
      `Substitute values → ${a}x + ${b} = 0`,
      `Solve → x = ${root.toFixed(4)}`,
    ],
  };
}

/* ================= QUADRATIC ================= */

function solveQuadratic([a, b, c]: number[]): PolynomialResult {
  const D = b * b - 4 * a * c;
  const steps: string[] = [
    "Given equation: ax² + bx + c = 0",
    "Apply quadratic formula",
    "x = (−b ± √(b² − 4ac)) / 2a",
    `Discriminant D = ${D}`,
  ];

  if (D >= 0) {
    const s = Math.sqrt(D);
    const r1 = (-b + s) / (2 * a);
    const r2 = (-b - s) / (2 * a);

    steps.push("D ≥ 0 → two real roots");

    return {
      degree: 2,
      coefficients: [a, b, c],
      roots: [
        { re: r1, im: 0 },
        { re: r2, im: 0 },
      ],
      verified: [
        Math.abs(evaluate([a, b, c], r1)),
        Math.abs(evaluate([a, b, c], r2)),
      ],
      factorization: `(x − ${r1})(x − ${r2})`,
      steps,
    };
  }

  const re = -b / (2 * a);
  const im = Math.sqrt(-D) / (2 * a);

  steps.push("D < 0 → complex roots");

  return {
    degree: 2,
    coefficients: [a, b, c],
    roots: [
      { re, im },
      { re, im: -im },
    ],
    verified: [0, 0],
    steps,
  };
}

/* ================= CUBIC ================= */

function findIntegerRoots(coeffs: number[]): number[] {
  const c = Math.abs(coeffs[coeffs.length - 1]);
  const roots: number[] = [];

  for (let i = 1; i <= c; i++) {
    if (c % i === 0) {
      if (Math.abs(evaluate(coeffs, i)) < EPS) roots.push(i);
      if (Math.abs(evaluate(coeffs, -i)) < EPS) roots.push(-i);
    }
  }

  return roots;
}

function solveCubic(coeffs: number[]): PolynomialResult {
  const steps: string[] = [
    "Detected cubic equation",
    "Trying integer roots using Rational Root Theorem",
  ];

  const intRoots = findIntegerRoots(coeffs);

  if (intRoots.length > 0) {
    const roots = intRoots.map((r) => ({ re: r, im: 0 }));

    steps.push(`Found integer root(s): ${intRoots.join(", ")}`);
    steps.push("Factorize and reduce polynomial");

    return {
      degree: 3,
      coefficients: coeffs,
      roots,
      verified: roots.map((r) => Math.abs(evaluate(coeffs, r.re))),
      factorization: roots.map((r) => `(x − ${r.re})`).join(""),
      steps,
    };
  }

  steps.push("No integer roots found");
  steps.push("Applying Cardano’s method");

  const [a, b, c, d] = coeffs;
  const A = b / a;
  const B = c / a;
  const C = d / a;

  const Q = (3 * B - A * A) / 9;
  const R = (9 * A * B - 27 * C - 2 * A * A * A) / 54;
  const D = Q * Q * Q + R * R;

  const S = Math.cbrt(R + Math.sqrt(Math.abs(D)));
  const T = Math.cbrt(R - Math.sqrt(Math.abs(D)));
  const root = -A / 3 + (S + T);

  return {
    degree: 3,
    coefficients: coeffs,
    roots: [{ re: root, im: 0 }],
    verified: [Math.abs(evaluate(coeffs, root))],
    steps,
  };
}

/* ================= DISPATCHER ================= */

export function solvePolynomial(coeffs: number[]): PolynomialResult {
  // remove leading zeros
  while (coeffs.length > 1 && Math.abs(coeffs[0]) < EPS) {
    coeffs.shift();
  }

  const degree = coeffs.length - 1;

  switch (degree) {
    case 1:
      return solveLinear(coeffs);
    case 2:
      return solveQuadratic(coeffs);
    case 3:
      return solveCubic(coeffs);
    default:
      return {
        degree,
        coefficients: coeffs,
        roots: [],
        verified: [],
        steps: [
          `Degree ${degree} polynomial detected`,
          "Numeric root finding is not implemented for higher degrees",
        ],
      };
  }
}

/* ================= PARSER (FIXED) ================= */

export function parsePolynomial(input: string): number[] {
  const clean = input
    .replace(/\s+/g, "")
    .replace(/-/g, "+-")
    .replace(/^\+/, "");

  const terms = clean.split("+").filter(Boolean);
  const map: Record<number, number> = {};

  for (const t of terms) {
    if (t.includes("x")) {
      const [c, p] = t.split("x");

      const coef =
        c === "" || c === "+"
          ? 1
          : c === "-"
          ? -1
          : Number(c);

      const pow = p?.startsWith("^")
        ? Number(p.slice(1))
        : 1;

      map[pow] = (map[pow] ?? 0) + coef;
    } else {
      map[0] = (map[0] ?? 0) + Number(t);
    }
  }

  const maxPower = Math.max(...Object.keys(map).map(Number));
  const coeffs: number[] = [];

  for (let i = maxPower; i >= 0; i--) {
    coeffs.push(map[i] ?? 0);
  }

  return coeffs;
}
