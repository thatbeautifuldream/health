import { jsxs, jsx } from "react/jsx-runtime";
import { R as Route } from "./router-BJM5yOxH.js";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
function StatCard({ label, value, unit, color }) {
  const colorClasses = {
    sky: "bg-sky-400/10 border-sky-400/20",
    blue: "bg-blue-400/10 border-blue-400/20",
    green: "bg-green-400/10 border-green-400/20",
    purple: "bg-purple-400/10 border-purple-400/20"
  };
  return /* @__PURE__ */ jsxs("div", { className: `${colorClasses[color]} border p-4`, children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-gray-700 dark:text-gray-400 mb-1", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-gray-950 dark:text-white", children: [
      value,
      " ",
      unit && /* @__PURE__ */ jsx("span", { className: "text-sm font-normal", children: unit })
    ] })
  ] });
}
function CheckmarkIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "inline h-5 w-5",
      viewBox: "0 0 22 22",
      fill: "none",
      strokeLinecap: "square",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "11", className: "fill-sky-400/25" }),
        /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "10.5", className: "stroke-sky-400/25" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 11.5L10.5 14L14 8",
            className: "stroke-sky-800 dark:stroke-sky-300",
            strokeWidth: "2"
          }
        )
      ]
    }
  );
}
function HealthTable({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto border border-gray-950/5 dark:border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-950/5 dark:divide-white/10", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-gray-100 dark:bg-white/5", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Date" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Weight" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Water" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Steps" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-center text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Nuts" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Tea" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-center text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Lunch" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-center text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Dinner" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-gray-950 dark:text-white uppercase tracking-wider", children: "Notes" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-950/5 dark:divide-white/10 bg-white dark:bg-gray-950", children: data.map((entry, index) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-100 dark:hover:bg-white/5", children: [
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-950 dark:text-white", children: entry.Date || "-" }),
      /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: [
        entry["Weight (kg)"] || "-",
        " kg"
      ] }),
      /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: [
        entry["Water (liters)"] || "-",
        " L"
      ] }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: entry.Steps ? parseInt(entry.Steps).toLocaleString() : "-" }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-center", children: entry["Nuts (Y/N)"] === "Y" ? /* @__PURE__ */ jsx(CheckmarkIcon, {}) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 dark:text-gray-600", children: "-" }) }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: entry["CCF Tea (cups)"] || "-" }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-center", children: entry["Salad Before Lunch (Y/N)"] === "Y" ? /* @__PURE__ */ jsx(CheckmarkIcon, {}) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 dark:text-gray-600", children: "-" }) }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-sm text-center", children: entry["Salad Before Dinner (Y/N)"] === "Y" ? /* @__PURE__ */ jsx(CheckmarkIcon, {}) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 dark:text-gray-600", children: "-" }) }),
      /* @__PURE__ */ jsx(
        "td",
        {
          className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate",
          title: entry.Notes || "",
          children: entry.Notes || "-"
        }
      )
    ] }, index)) })
  ] }) });
}
function Home() {
  const {
    data,
    stats
  } = Route.useLoaderData();
  const lastUpdated = (/* @__PURE__ */ new Date()).toLocaleString();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-gray-600 dark:text-gray-100", children: "Milind's Health Tracker" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm/6 font-medium text-gray-600 dark:text-gray-400", children: "Daily metrics and wellness journey" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(StatCard, { label: "Current Weight", value: stats.currentWeight, unit: "kg", color: "sky" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Avg Water", value: stats.avgWater, unit: "L", color: "blue" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Avg Steps", value: stats.avgSteps.toLocaleString(), color: "green" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Total Days", value: stats.totalEntries, color: "purple" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(HealthTable, { data }) }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-700 dark:text-gray-400 text-center", children: [
      "Last updated:",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-950 dark:text-white", children: lastUpdated })
    ] })
  ] });
}
export {
  Home as component
};
