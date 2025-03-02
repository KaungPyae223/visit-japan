import { createBrowserRouter } from "react-router";
import HomePage from "../features/Home/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
