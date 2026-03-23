import React from "react";
import Navbar from "../../components/shred/Navbar";
import Hero from "../Hero/Hero";
import Trust from "../Static/Trust";
import Feature from "../Static/Feature";
import FAQ from "../FAQ/Faq";
import HowItWorks from "../Static/HowItWorks";
import Footer from "../../components/shred/Footer";
import MeetOurTeachers from "../Static/MeetOurTeachers";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Navbar></Navbar>
      <Hero></Hero>
      <Trust></Trust>
      <HowItWorks></HowItWorks>
      <Feature></Feature>
      <FAQ></FAQ>
      <MeetOurTeachers></MeetOurTeachers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
