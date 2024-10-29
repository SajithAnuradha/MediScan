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
import Check from "../pages/Check/Check";

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
    path: "/ct",
    element: <Check title={"CT SCAN"} />,
  },
  {
    path: "/mri",
    element: <Check title={"MRI SCAN"} />,
  },
  {
    path: "/skin",
    element: <Check title={"SKIN SCAN"} />,
  },
]);

export default router;
