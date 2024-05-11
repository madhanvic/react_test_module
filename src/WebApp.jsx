import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Starter from "./layout/Starter";
import ChatArea from "./pages/ChatArea";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <ChatArea />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" replace />,
  },
]);
function WebApp() {
  return <RouterProvider router={router} />;
}

export default WebApp;
