import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SubmitRequest from "../pages/SubmitRequest/SubmitRequest";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/submit-request",
        element: <SubmitRequest />,
      },
    ],
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
