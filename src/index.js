import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";
import { PhotosPage } from "./pages/PhotosPage";
import { AlbumsPage } from "./pages/AlbumsPage";
import { JMTPage } from "./pages/jmt/JMTPage";
import { JMTDayPage } from "./pages/jmt/JMTDayPage";

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
  {
    path: "jmt",
    element: <JMTPage />,
  },
  {
    path: "jmt/:day",
    element: <JMTDayPage />,
  },
  {
    path: "photos",
    element: <AlbumsPage />,
  },
  {
    path: "photos/:album",
    element: <PhotosPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
