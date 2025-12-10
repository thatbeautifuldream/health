/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title:
          "Health Tracker - Diet & Weight Management Dashboard | Milind Mishra",
        description:
          "Personal health and diet tracking dashboard for weight management journey. Monitor progress, nutrition, and wellness goals.",
      }),
      {
        name: "keywords",
        content:
          "health tracking, diet management, weight loss, nutrition, wellness, fitness, milind mishra",
      },
      {
        name: "author",
        content: "Milind Mishra",
      },
      {
        property: "og:title",
        content: "Health Tracker - Diet & Weight Management Dashboard",
      },
      {
        property: "og:description",
        content:
          "Personal health and diet tracking dashboard for weight management journey",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://health.milind.app",
      },
      {
        property: "og:site_name",
        content: "Health Tracker",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Health Tracker - Diet & Weight Management Dashboard",
      },
      {
        name: "twitter:description",
        content:
          "Personal health and diet tracking dashboard for weight management journey",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://health.milind.app" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white">
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
