import { Contact } from "./(components)/contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./layouts/MainLayout";
import ServicesPage from "./Pages/ServicesPage";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetails from "./Pages/PortfolioDetails";
import { useEffect } from "react";
import AboutPage from "./Pages/AboutPage";
import BlogSite from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
// import { assets } from "../public/assets/images";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/details/:id" element={<PortfolioDetails />} />
        <Route path="/blog" element={<BlogSite />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
