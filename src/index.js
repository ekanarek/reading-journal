import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddForm from "./pages/AddForm";
import Journal from "./pages/Journal";
import SearchResults from "./pages/SearchResults";
import SavedBooks from "./pages/SavedBooks";
import "./index.css";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Journal />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/new",
        element: <AddForm />,
      },
      {
        path: "/saved",
        element: <SavedBooks />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
