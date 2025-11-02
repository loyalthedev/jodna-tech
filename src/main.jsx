// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import "./styles/custom.scss";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
);
