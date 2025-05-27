import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("pages/layout.tsx", [
    index("pages/streamPanels.tsx"),
  ])
] satisfies RouteConfig;
