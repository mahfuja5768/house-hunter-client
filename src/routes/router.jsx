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
import BookedProperties from "../pages/Dashboard/User/BookedProperties/BookedProperties";
import MyAddedProperties from "../pages/Dashboard/Admin/MyAddedProperties/MyAddedProperties";
import AddNewProperty from "../pages/Dashboard/Admin/AddNewProperty";
import UpdateProterty from "../pages/Dashboard/Admin/UpdateProperty";
import UpdateProperty from "../pages/Dashboard/Admin/UpdateProperty";
import AllBookings from "../pages/Dashboard/Admin/AllBookings";

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
      {
        path: "adminAddedProperty",
        element: <MyAddedProperties />,
      },
      {
        path: "allBookings",
        element: <AllBookings />,
      },
      {
        path: "addProperties",
        element: <AddNewProperty />,
      },
      {
        path: "update/:id",
        element: <UpdateProperty />,
        loader: ({ params }) => getDetails(params.id),
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
