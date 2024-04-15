import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("../views/Login"));
const Dashboard = lazy(() => import("../views/Dashboard"));
export  const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<h2>加载中....</h2>}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path: "/signup",
    //     element: <Signup />,
    // }
])