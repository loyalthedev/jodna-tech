import { assets } from "../public/assets/images";
import Navbar from "./(components)/Navbar";
import WhatWeveDoneSection from "./(components)/WhatWeveDoneSection";
import WhoWeAreSection from "./(components)/WhoWeAreSection";

function App() {
  return (
    <>
      {/* HEADER */}
      <Navbar />
      <WhoWeAreSection />
      <WhatWeveDoneSection />
      {/* FOOTER */}
      {/* 
      <h1 className="border_test">Hello world</h1>

      <img src={assets.Logo} alt="Logo" />
      <img src={assets.HeroBg} alt="Hero bg" /> */}
    </>
  );
}

export default App;
