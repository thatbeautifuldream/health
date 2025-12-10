import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/form")({
  component: FormPage,
});

function FormPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="shrink-0 container mx-auto px-4 py-8 max-w-7xl">
        <header className="flex items-start justify-between">
          <div>
            <h1 className="font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-gray-900">
              Health Tracking Form
            </h1>
            <p className="mt-2 text-sm/6 font-medium text-gray-600">
              Log your daily health metrics
            </p>
          </div>
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-900 transition-colors"
          >
            Back to Dashboard
          </Link>
        </header>
      </div>

      <div className="flex-1 flex justify-center overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfXkOZIW17gWZ8emujkTbJKNlz-cNfALbV6mjv4olmGCYSqSw/viewform?embedded=true"
          className="w-full max-w-[640px] h-full border-0"
          title="Health Tracking Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
