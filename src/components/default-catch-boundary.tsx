import { Link, rootRouteId, useMatch, useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  console.error("DefaultCatchBoundary Error:", error);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="text-center max-w-2xl">
          <h1 className="font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-red-700 mb-4">
            Something Went Wrong
          </h1>
          <div className="bg-red-50 border border-red-200 p-6 mb-6 rounded">
            <p className="text-sm font-medium text-red-900 wrap-break-words">
              {error.message || "An unexpected error occurred"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
            }}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 transition-colors rounded"
          >
            Try Again
          </button>
          {isRoot ? (
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded"
            >
              Go Home
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
