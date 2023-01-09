import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/:article",
    element: <BlogArticlePage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
