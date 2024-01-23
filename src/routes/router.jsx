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
import BookAProperty from "../pages/BookAProperty/BookAProperty";
import DashboardLayout from "./../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import UserProfilePage from "../pages/Dashboard/User/UserProfilePage";
import BookedProperties from "../pages/Dashboard/User/BookedProperties";

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
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookAProperty />
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "myProfile",
        element: <UserProfilePage />,
      },
      {
        path: "bookedProperties",
        element: <BookedProperties />,
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
