import Home from "./page/Home";
import Create from "./page/Create";
import { BrowserRouter } from "react-router-dom";

const router = () => {
  {
    path: "/";
    element: <Home />;
  }
  {
    path: "/Create";
    element: <Create />;
  }
};

export default router;
