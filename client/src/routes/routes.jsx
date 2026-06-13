import { Layout } from "../pages/Layout.jsx";
import { Home } from "../pages/Home.jsx";
import { ErrorElement } from "../pages/ErrorElement.jsx";
import { Login } from "../pages/Login.jsx";
import { LayoutCMS } from "../pages/CMS/LayoutCMS.jsx";
import { HomeCMS } from "../pages/CMS/HomeCMS.jsx";

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
  {
    path: "/admin",
    element: <LayoutCMS />,
    children: [
      {
        index: true,
        element: <HomeCMS />,
      },
    ],
  },
];
