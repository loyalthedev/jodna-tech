import HeroSection from "../(components)/HeroSection";
import ImpactSection from "../(components)/ImpactSection";
import WhoWeAre from "../(components)/WhoWeAre";
import GetStarted from "../(components)/GetStarted";
import WhatWeOffer from "../(components)/WhatWeOffer";
import WWDone from "../(components)/WWDone";
import Testimonials from "../(components)/Testimonials";

function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <WhoWeAre />
      <WhatWeOffer />
      <WWDone />
      <Testimonials />
      <GetStarted />
    </>
  );
}

export default Home;
