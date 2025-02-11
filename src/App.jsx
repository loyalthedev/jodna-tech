import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Routes from "../Routes";
// import { assets } from "../public/assets/images";
import Navbar from "./(components)/Navbar";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
      {/* HEADER */}
      <Navbar />

      {/* FOOTER */}
      {/* 

      <img src={assets.Logo} alt="Logo" />
      <img src={assets.HeroBg} alt="Hero bg" /> 
      
      */}
    </>
  );
}

export default App;
