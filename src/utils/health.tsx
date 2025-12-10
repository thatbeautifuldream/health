import { createServerFn } from "@tanstack/react-start";
import type { HealthEntry, HealthStats } from "~/types/health";

const API_URL =
  "https://opensheet.elk.sh/1-2ph8z7JpmSj_oR5GTwZFCbhUubvyrxmmQILY5bDt8k/Form%20responses%201";

export const fetchHealthData = createServerFn().handler(async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  const data: HealthEntry[] = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No data available");
  }

  // Sort by date (most recent first)
  const sortedData = [...data].reverse();

  // Calculate stats from most recent entry
  const latest = data[data.length - 1];
  const totalEntries = data.length;
  // useless variable to avoid lint error
  // biome-ignore lint/correctness/noUnusedVariables: ignore
  const avgWeight = (
    data.reduce(
      (sum, entry) => sum + (parseFloat(entry["Weight (kg)"]) || 0),
      0
    ) / data.filter((e) => e["Weight (kg)"]).length
  ).toFixed(1);
  const avgWater = (
    data.reduce(
      (sum, entry) => sum + (parseFloat(entry["Water (liters)"]) || 0),
      0
    ) / data.filter((e) => e["Water (liters)"]).length
  ).toFixed(1);
  const avgSteps = Math.round(
    data.reduce((sum, entry) => sum + (parseInt(entry.Steps) || 0), 0) /
      data.filter((e) => e.Steps).length
  );

  const stats: HealthStats = {
    currentWeight: latest["Weight (kg)"] || "-",
    avgWater,
    avgSteps,
    totalEntries,
  };

  return { data: sortedData, stats };
});
