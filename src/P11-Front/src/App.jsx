import "./App.css";
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// todo: add sign in route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
