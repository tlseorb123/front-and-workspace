import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Create from "./page/Create";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

export default router;
