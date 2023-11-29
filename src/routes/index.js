import {
    createBrowserRouter,
} from "react-router-dom";
import {Login, Register, Dashboard, Comm, SubmitQuery, ViewQuery} from '../pages'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/comm",
        element: <Comm />,
    },
    {
        path: "/query",
        element: <SubmitQuery />,
    },
    {
        path: "/view",
        element: <ViewQuery />,
    },
]);

export default router