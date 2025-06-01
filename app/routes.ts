import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

const categoryRoute = route("category/:categoryId", "pages/CategoryPage.tsx")
const streamerRoute = route("streamer/:streamerId", "pages/StreamerPage.tsx")
const profileRoute = route("profile/:profileId", "pages/ProfilePage.tsx")

export default [
  layout("pages/layout.tsx", [
    index("pages/streamPanels.tsx"),
    route("browse", "pages/BrowsePage.tsx"),
    categoryRoute,
    streamerRoute,
    profileRoute,
  ])
] satisfies RouteConfig;
