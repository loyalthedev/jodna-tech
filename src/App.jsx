import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Routes from "../Routes";
// import { assets } from "../public/assets/images";
import Navbar from "./(components)/Navbar";
import WhoWeAreSection from "./(components)/WhoWeAreSection";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
      {/* HEADER */}
      <Navbar />
      <WhoWeAreSection />
      <AboutPage />
      <ServicesPage />
      {/* FOOTER */}
      {/* 

      <img src={assets.Logo} alt="Logo" />
      <img src={assets.HeroBg} alt="Hero bg" /> 
      
      */}
    </>
  );
}

export default App;
