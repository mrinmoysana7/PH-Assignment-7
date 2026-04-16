import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../component/pages/homePage/HomePage";
import TimelinePage from "../component/pages/timelinePage/TimelinePage";
import StatsPage from "../component/pages/statsPage/StatsPage";
import FriendDetailsPage from "../component/pages/freindDetails/FriendDetailsPage";
import ErrorPage from "../component/pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: "true", Component: HomePage
      },
      {
        path: "/timeline", Component: TimelinePage
      },
      {
        path: "/stats", Component: StatsPage
      },
      {
        path: "/friendDetails", Component: FriendDetailsPage
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);
