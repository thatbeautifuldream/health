import { jsx, jsxs } from "react/jsx-runtime";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "bg-red-400/25 border border-red-400/50 p-6", children: /* @__PURE__ */ jsxs("p", { className: "text-red-800 dark:text-red-300 font-medium", children: [
  "Error: ",
  error.message
] }) }) });
export {
  SplitErrorComponent as errorComponent
};
