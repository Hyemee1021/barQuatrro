import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the main component
    children: [
      {
        index: true, // Home is the default route
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
