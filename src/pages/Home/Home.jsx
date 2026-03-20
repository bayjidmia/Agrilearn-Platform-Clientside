import React from "react";
import Navbar from "../../components/shred/Navbar";
import Hero from "../Hero/Hero";
import Trust from "../Static/Trust";
import Feature from "../Static/Feature";
import FAQ from "../FAQ/Faq";
import HowItWorks from "../Static/HowItWorks";
import Footer from "../../components/shred/Footer";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Navbar></Navbar>
      <Hero></Hero>
      <Trust></Trust>
      <HowItWorks></HowItWorks>
      <Feature></Feature>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
