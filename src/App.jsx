// import { assets } from "../public/assets/images";
// import Navbar from "./(components)/Navbar";
import Header from "./(components)/Navbar";
import { Footer } from "./(components)/Navbar";
// import { Resheader } from "./(components)/Navbar";
import Aboutus from "./(components)/blog";
import { Contact } from "./(components)/contact";

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* <Resheader /> */}
      <Aboutus />

      <Contact />

      <Footer />
      {/* <Navbar /> */}
      {/* FOOTER */}
    </>
  );
}

export default App;
