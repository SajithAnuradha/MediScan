import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Signin from "../pages/Signin/Signin";
import Login from "../pages/Login/Login";
import History from "../pages/History/History";
import Prediction from "../pages/Prediction/Prediction";
import Add from "../pages/Add/Add";
import Start from "../pages/Start/Start";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
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
    path: "/ct",
    element: <Add title={"CT SCAN"} />,
  },
  {
    path: "/mri",
    element: <Add title={"MRI SCAN"} />,
  },
  {
    path: "/skin",
    element: <Add title={"SKIN SCAN"} />,
  },
]);

export default router;