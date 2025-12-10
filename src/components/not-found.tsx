import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="text-center">
          <h1 className="font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-gray-900 mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-sm/6 font-medium text-gray-600">
            {children || "The page you are looking for does not exist."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 transition-colors cursor-pointer rounded"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
