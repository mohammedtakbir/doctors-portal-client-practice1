import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment /></AdminRoute>
            }
        ]
    }
])