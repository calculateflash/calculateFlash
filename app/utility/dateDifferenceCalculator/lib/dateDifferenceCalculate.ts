export interface DateDiffInput {
  startDate: string;
  endDate: string;
}

export function calculateDateDifference({ startDate, endDate }: DateDiffInput) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
    return { error: "Invalid date range" };
  }

  // Years / Months / Days calculation
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Total difference calculations
  const diffMs = end.getTime() - start.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
  };
}
