import type { HealthEntry } from "~/types/health";
import { CheckmarkIcon } from "./checkmark-icon";

type HealthTableProps = {
  data: HealthEntry[];
};

export function HealthTable({ data }: HealthTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Weight
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Water
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Steps
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Nuts
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Tea
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Lunch
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Dinner
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                {entry.Date || "-"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {entry["Weight (kg)"] || "-"} kg
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {entry["Water (liters)"] || "-"} L
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {entry.Steps ? parseInt(entry.Steps).toLocaleString() : "-"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                {entry["Nuts (Y/N)"] === "Y" ? (
                  <CheckmarkIcon />
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {entry["CCF Tea (cups)"] || "-"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                {entry["Salad Before Lunch (Y/N)"] === "Y" ? (
                  <CheckmarkIcon />
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                {entry["Salad Before Dinner (Y/N)"] === "Y" ? (
                  <CheckmarkIcon />
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td
                className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate"
                title={entry.Notes || ""}
              >
                {entry.Notes || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
