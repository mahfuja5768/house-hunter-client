import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Career from "../pages/Career/Career";
import OurGoal from "../pages/OurGoal/OurGoal";
import { getDetails } from "../api/api";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import AllProperties from "../pages/AllProperties/AllProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getDetails(params.id),
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career />
          </PrivateRoute>
        ),
      },
      {
        path: "/ourGoal",
        element: <OurGoal />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>{/* <DashboardLayout /> */}</PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        // element: <DashboardHome></DashboardHome>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
