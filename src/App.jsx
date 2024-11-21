import Navbar from "./(components)/Navbar";
import WhoWeAreSection from "./(components)/WhoWeAreSection";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      {/* HEADER */}
      <Navbar />
      <WhoWeAreSection />
      <AboutPage />
      {/* FOOTER */}
      {/* 
      <h1 className="border_test">Hello world</h1>

      <img src={assets.Logo} alt="Logo" />
      <img src={assets.HeroBg} alt="Hero bg" /> */}
    </>
  );
}

export default App;
