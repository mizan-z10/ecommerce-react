import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import About from "../page/About";
import { Store } from "../page/Store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]

    },
    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "store",
                element: <Store />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
}

export default AppRoutes