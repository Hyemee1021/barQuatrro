import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
// redux
import { Provider } from "react-redux";
import { store } from "./store";
import Functions from "./pages/Functions";
import Careers from "./pages/Careers";
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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/functions",
        element: <Functions />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
