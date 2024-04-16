import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  {
    path: "/detail/:no",
    element: <Detail />,
  },
  //   {
  //     path: "/create",
  //     element: <Create />,
  //   },
]);

export default router;
