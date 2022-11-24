import React from "react";
import Aos from "aos"
// import animate on scroll
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CtaSecton from "./components/CtaSection";


Aos.init({
  duration: 1800,
  offset: 0,
});

const App = () => {
  return (
    <div className="overflow-hidden">

   
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CtaSecton />
    </div>
  );
};

export default App;
