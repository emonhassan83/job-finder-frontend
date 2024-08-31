import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplication from "../pages/MyApplication/MyApplication";
import AllApplications from "../pages/AllApplications/AllApplications";
import ProtectedRoute from "../components/layout/ProtectedRoute";

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
        path: "/jobs/:id",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-application",
        element: (
          <ProtectedRoute>
            <MyApplication />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-applications",
        element: (
          <ProtectedRoute>
            <AllApplications />
          </ProtectedRoute>
        ),
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
