import "./App.css";
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import User from "./pages/user/user";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./utils/protected_route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <ProtectedRoute element={<User />} />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
