import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
