"use client";

import { useEffect, useRef } from "react";
import { Complex } from "./polynomialSolve";

interface Props {
  coefficients: number[];
  roots: Complex[];
}

export function PolynomialGraph({ coefficients, roots }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, 400, 400);
    ctx.translate(200, 200);
    ctx.scale(1, -1);

    ctx.strokeStyle = "#aaa";
    ctx.beginPath();
    ctx.moveTo(-200, 0);
    ctx.lineTo(200, 0);
    ctx.moveTo(0, -200);
    ctx.lineTo(0, 200);
    ctx.stroke();

    ctx.strokeStyle = "#4f46e5";
    ctx.beginPath();
    for (let x = -100; x <= 100; x += 0.2) {
      const y = coefficients.reduce((a, c) => a * x + c, 0);
      x === -100 ? ctx.moveTo(x * 2, y * 2) : ctx.lineTo(x * 2, y * 2);
    }
    ctx.stroke();

    ctx.fillStyle = "red";
    roots.forEach((r) => {
      if (Math.abs(r.im) < 1e-6) {
        ctx.beginPath();
        ctx.arc(r.re * 2, 0, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }, [coefficients, roots]);

  return (
    <canvas
      ref={ref}
      width={400}
      height={400}
      className="mx-auto border rounded-lg"
    />
  );
}
