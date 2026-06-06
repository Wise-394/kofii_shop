import { createBrowserRouter, RouterProvider } from "react-router";
import { appRoutes } from "./routes/routes.jsx";

const routes = createBrowserRouter(appRoutes);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
