import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Pages/Home";
import Portfolio from "./src/Pages/Portfolio";
import PortfolioDetails from "./src/Pages/PortfolioDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/details/:id",
    element: <PortfolioDetails />,
  },
]);

export default Routes;
