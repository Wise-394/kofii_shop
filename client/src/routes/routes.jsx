import { Layout } from "../pages/Layout.jsx";
import { Home } from "../pages/Home.jsx";
import { ErrorElement } from "../pages/ErrorElement.jsx";
import { Login } from "../pages/Login.jsx";

export const appRoutes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorElement />,
  },
];
