import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Starter from "./layout/Starter";
import ChatArea from "./pages/ChatArea";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
