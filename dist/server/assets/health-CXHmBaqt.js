import { a as createServerRpc, c as createServerFn } from "../server.js";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const API_URL = "https://opensheet.elk.sh/1-2ph8z7JpmSj_oR5GTwZFCbhUubvyrxmmQILY5bDt8k/Form%20responses%201";
const fetchHealthData_createServerFn_handler = createServerRpc("5ad59667454d14f144b045241d237cb0787980c57ad245609fa9a54f0d724c35", (opts, signal) => {
  return fetchHealthData.__executeServer(opts, signal);
});
const fetchHealthData = createServerFn().handler(fetchHealthData_createServerFn_handler, async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No data available");
  }
  const sortedData = [...data].reverse();
  const latest = data[data.length - 1];
  const totalEntries = data.length;
  (data.reduce((sum, entry) => sum + (parseFloat(entry["Weight (kg)"]) || 0), 0) / data.filter((e) => e["Weight (kg)"]).length).toFixed(1);
  const avgWater = (data.reduce((sum, entry) => sum + (parseFloat(entry["Water (liters)"]) || 0), 0) / data.filter((e) => e["Water (liters)"]).length).toFixed(1);
  const avgSteps = Math.round(data.reduce((sum, entry) => sum + (parseInt(entry.Steps) || 0), 0) / data.filter((e) => e.Steps).length);
  const stats = {
    currentWeight: latest["Weight (kg)"] || "-",
    avgWater,
    avgSteps,
    totalEntries
  };
  return {
    data: sortedData,
    stats
  };
});
export {
  fetchHealthData_createServerFn_handler
};
