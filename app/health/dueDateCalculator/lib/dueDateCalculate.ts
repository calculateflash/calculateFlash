// dueDateCalculate.ts
export interface DueDateInput {
  lmp: string; // Last menstrual period date (YYYY-MM-DD)
}

export function calculateDueDate({ lmp }: DueDateInput) {
  if (!lmp) {
    return {
      dueDate: "",
      weeksPregnant: 0,
      trimester: "Invalid input"
    };
  }

  const lmpDate = new Date(lmp);
  const dueDate = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000); // +280 days (40 weeks)

  const today = new Date();
  const diffMs = today.getTime() - lmpDate.getTime();
  const weeksPregnant = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

  let trimester = "";
  if (weeksPregnant < 13) trimester = "1st Trimester";
  else if (weeksPregnant < 28) trimester = "2nd Trimester";
  else trimester = "3rd Trimester";

  return {
    dueDate: dueDate.toISOString().split("T")[0],
    weeksPregnant,
    trimester
  };
}
