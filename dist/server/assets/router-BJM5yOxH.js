import { jsx, jsxs } from "react/jsx-runtime";
import { useRouter, useMatch, rootRouteId, Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error("DefaultCatchBoundary Error:", error);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-red-600 dark:text-red-400 mb-4", children: "Something Went Wrong" }),
      /* @__PURE__ */ jsx("div", { className: "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 p-6 mb-6", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-red-900 dark:text-red-200 wrap-break-words", children: error.message || "An unexpected error occurred" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap justify-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            router2.invalidate();
          },
          className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors",
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors",
          children: "Go Home"
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => window.history.back(),
          className: "px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors",
          children: "Go Back"
        }
      )
    ] })
  ] }) });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-[0.8125rem]/6 font-medium tracking-widest uppercase text-gray-600 dark:text-gray-200 mb-2", children: "404 - Page Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm/6 font-medium text-gray-600 dark:text-gray-400", children: children || "The page you are looking for does not exist." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => window.history.back(),
          className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer",
          children: "Go Back"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors",
          children: "Go Home"
        }
      )
    ] })
  ] }) });
}
const appCss = "/assets/app-AeE9UkJf.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      ...seo({
        title: "Health Tracker - Diet & Weight Management Dashboard | Milind Mishra",
        description: "Personal health and diet tracking dashboard for weight management journey. Monitor progress, nutrition, and wellness goals."
      }),
      {
        name: "keywords",
        content: "health tracking, diet management, weight loss, nutrition, wellness, fitness, milind mishra"
      },
      {
        name: "author",
        content: "Milind Mishra"
      },
      {
        property: "og:title",
        content: "Health Tracker - Diet & Weight Management Dashboard"
      },
      {
        property: "og:description",
        content: "Personal health and diet tracking dashboard for weight management journey"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://health.milind.app"
      },
      {
        property: "og:site_name",
        content: "Health Tracker"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Health Tracker - Diet & Weight Management Dashboard"
      },
      {
        name: "twitter:description",
        content: "Personal health and diet tracking dashboard for weight management journey"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://health.milind.app" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-white dark:bg-gray-950", children: [
      children,
      /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const API_URL = "https://opensheet.elk.sh/1-2ph8z7JpmSj_oR5GTwZFCbhUubvyrxmmQILY5bDt8k/Form%20responses%201";
const fetchHealthData_createServerFn_handler = createSsrRpc("5ad59667454d14f144b045241d237cb0787980c57ad245609fa9a54f0d724c35");
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
const $$splitErrorComponentImporter = () => import("./index-aRONYjVt.js");
const $$splitComponentImporter = () => import("./index-DnikEDR2.js");
const Route = createFileRoute("/")({
  loader: async () => fetchHealthData(),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  pendingComponent: () => /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "bg-sky-400/25 border border-sky-400/50 p-6", children: /* @__PURE__ */ jsx("p", { className: "text-sky-800 dark:text-sky-300 font-medium animate-pulse", children: "Fetching Milind's wellness journey 🥗" }) }) }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
