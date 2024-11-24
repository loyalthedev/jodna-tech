import Navbar from "./(components)/Navbar";
import WhoWeAreSection from "./(components)/WhoWeAreSection";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      {/* HEADER */}
      <Navbar />
      <WhoWeAreSection />
      <AboutPage />
      <ServicesPage />
      {/* FOOTER */}
      {/* 
      <h1 className="border_test">Hello world</h1>

      <img src={assets.Logo} alt="Logo" />
      <img src={assets.HeroBg} alt="Hero bg" /> */}
    </>
  );
}

export default App;
