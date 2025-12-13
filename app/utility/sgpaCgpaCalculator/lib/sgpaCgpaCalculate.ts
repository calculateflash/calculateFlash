export interface SGPAResult {
  cgpa: number;
  percentage: number;
}

export function calculateCGPA(sgpas: number[]): SGPAResult {
  const valid = sgpas.filter((v) => !isNaN(v));

  const total = valid.reduce((sum, v) => sum + v, 0);
  const cgpa = total / valid.length;

  const percentage = cgpa * 9.5;

  return {
    cgpa: Number(cgpa.toFixed(2)),
    percentage: Number(percentage.toFixed(2)),
  };
}
