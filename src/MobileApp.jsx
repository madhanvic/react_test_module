import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Starter from "./layout/Starter";
import ChatArea from "./pages/ChatArea";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starter />,
  },
  {
    path: "/:id",
    element: <ChatArea />,
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
const MobileApp = () => {
  return <RouterProvider router={router} />;
};

export default MobileApp;
