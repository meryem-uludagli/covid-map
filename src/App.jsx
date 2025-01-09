import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:code", element: <Detail /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
