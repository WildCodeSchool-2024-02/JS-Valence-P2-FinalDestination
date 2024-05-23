import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import db from "./db";

import App from "./App";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import SuggestionsPage from "./pages/SuggestionsPage";

import QuestionnairePage from "./pages/QuestionnairePage";

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
        path: "/survey",
        element: <QuestionnairePage />,
      },
      {
        path: "/destinations",
        element: <DestinationsPage />,
      },
      {
        path: "/destination/:id",
        element: <DestinationDetailsPage />,
        loader: ({ params }) => getCurrentDetails(params.id, db),
      },
      {
        path: "/suggestions",
        element: <SuggestionsPage />,
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
