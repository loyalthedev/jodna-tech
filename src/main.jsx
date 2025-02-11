// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./(components)/Navbar.jsx";
import Aboutus from "./(components)/blog.jsx";
import { Contact } from "./(components)/contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import "./styles/custom.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={<Header />}
      />
      <Route
        path="blog"
        element={<Aboutus />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      
    </Routes>
  </BrowserRouter>
);
