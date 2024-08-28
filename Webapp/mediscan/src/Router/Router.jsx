import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Signin from "../pages/Signin/Signin";
import Login from "../pages/Login/Login";
import History from "../pages/History/History";
import Prediction from "../pages/Prediction/prediction";
import Add from "../pages/Add/Add";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/prediction",
    element: <Prediction />,
  },
  {
    path: "/upload",
    element: <Add />,
  },
]);

export default router;
