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
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: "/timeline", element: <TimelinePage />
      },
      {
        path: "/stats",  element: <StatsPage />
      },
      {
        path: "/friendDetails/:id", element: <FriendDetailsPage />
      }
    ],
    
  },
]);
