import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Starter from "./layout/Starter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
