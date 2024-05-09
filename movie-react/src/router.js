import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Select from "./pages/Select";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/select",
    element: <Select />,
  },
]);

export default router;
