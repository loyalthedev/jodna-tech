// import { assets } from "../public/assets/images";
// import Navbar from "./(components)/Navbar";
import Header from "./(components)/Navbar";
// import { Resheader } from "./(components)/Navbar";
import Aboutus from "./(components)/blog";
import { Contact } from "./(components)/contact";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./layouts/MainLayout";
// import { assets } from "../public/assets/images";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
