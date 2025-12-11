import { createFileRoute, Link } from "@tanstack/react-router";
import { StatCard } from "~/components/stat-card";
import { HealthTable } from "~/components/health-table";
import { fetchHealthData } from "~/utils/health";
import { formatLastUpdated } from "~/utils/date-util";

export const Route = createFileRoute("/")({
  loader: async () => fetchHealthData(),
  component: Home,
  pendingComponent: () => (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-sky-50 border border-sky-200 p-6 rounded">
        <p className="text-sky-700 font-medium animate-pulse">
          Fetching Milind's wellness journey 🥗
        </p>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-red-50 border border-red-200 p-6 rounded">
        <p className="text-red-700 font-medium">Error: {error.message}</p>
      </div>
    </div>
  ),
});

function Home() {
  const { data, stats } = Route.useLoaderData();
  const lastUpdated = formatLastUpdated(new Date());

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-gray-900">
            Milind's Health Tracker
          </h1>
          <p className="mt-2 text-sm/6 font-medium text-gray-600">
            Daily metrics and wellness journey
          </p>
        </div>
        <Link
          to="/form"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-900 transition-colors"
        >
          Add Entry
        </Link>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Current Weight"
          value={stats.currentWeight}
          unit="kg"
          color="sky"
        />
        <StatCard
          label="Avg Water"
          value={stats.avgWater}
          unit="L"
          color="blue"
        />
        <StatCard
          label="Avg Steps"
          value={stats.avgSteps.toLocaleString()}
          color="green"
        />
        <StatCard
          label="Total Days"
          value={stats.totalEntries}
          color="purple"
        />
      </div>

      <div className="mb-6">
        <HealthTable data={data} />
      </div>

      <p className="text-xs text-gray-600 text-left">
        Last updated:{" "}
        <span className="font-medium text-gray-900">{lastUpdated}</span>
      </p>
    </div>
  );
}
