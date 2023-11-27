import {
    createBrowserRouter,
} from "react-router-dom";
import {Login, Register, Dashboard, Comm, SingleQuery} from '../pages'

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
        element: <SingleQuery />,
    },
]);

export default router