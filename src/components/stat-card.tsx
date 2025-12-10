type StatCardProps = {
  label: string;
  value: string | number;
  unit?: string;
  color: "sky" | "blue" | "green" | "purple";
};

export function StatCard({ label, value, unit, color }: StatCardProps) {
  const colorClasses = {
    sky: "bg-sky-50 border-sky-200",
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
  };

  return (
    <div className={`${colorClasses[color]} border p-4 rounded`}>
      <div className="text-xs font-medium text-gray-600 mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {value} {unit && <span className="text-sm font-normal">{unit}</span>}
      </div>
    </div>
  );
}
