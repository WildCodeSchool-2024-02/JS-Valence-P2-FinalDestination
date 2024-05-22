import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import db from "./db";

import App from "./App";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationPage from "./pages/DestinationPage";
import ErrorPage from "./pages/ErrorPage";

function getCurrentDetails(id, arr) {
  const current = arr.filter((destination) => destination.id === Number(id))[0];
  return current;
}

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/destinations",
        element: <DestinationsPage />,
      },
      {
        path: "/destination/:id",
        element: <DestinationPage />,
        loader: ({ params }) => getCurrentDetails(params.id, db),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
