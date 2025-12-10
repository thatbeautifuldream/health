export type HealthEntry = {
  Date: string;
  "Weight (kg)": string;
  "Water (liters)": string;
  Steps: string;
  "Nuts (Y/N)": string;
  "CCF Tea (cups)": string;
  "Salad Before Lunch (Y/N)": string;
  "Salad Before Dinner (Y/N)": string;
  Notes: string;
};

export type HealthStats = {
  currentWeight: string;
  avgWater: string;
  avgSteps: number;
  totalEntries: number;
};
