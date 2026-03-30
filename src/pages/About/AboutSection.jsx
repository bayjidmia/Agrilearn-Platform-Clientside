import React from "react";
import Navbar from "../../components/shred/Navbar";
import Footer from "../../components/shred/Footer";
import TeamSection from "./TeamSection";

const AboutSection = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-base-100 p-8 md:p-16 lg:p-24 font-sans text-[#333] mt-20 ">
        {/* Container to center and control max width */}
        <div className="container mx-auto space-y-20">
          {/* About Us Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#111]">
                About Us
              </h2>
              <p className="text-xl md:text-2xl text-[#555] leading-relaxed max-w-2xl">
                AgriLearn is a modern digital learning platform designed to
                empower farmers and agriculture enthusiasts with practical
                knowledge and skills.
              </p>
            </div>
            <div className="w-full h-auto rounded-3xl overflow-hidden shadow-lg border-2 border-dashed border-[#ddd] bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTM0MTd8MHwxfHNlYXJjaHwxNXx8Z3JvdXAlMjBwaG90b3xlbnwwfHx8fDE3MjM2MzIxMzB8MA&ixlib=rb-4.0.3&q=80&w=800"
                alt="HubSpot team smiling group photo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-36">
            <div className="space-y-6 md:order-last">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] leading-tight">
                Our Mission: To improve farmers’ productivity and income through
                accessible digital education.
              </h2>
              <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-2xl">
                Our goal is to make agriculture smarter, more productive, and
                sustainable through the use of technology. On this platform,
                users can learn about crop cultivation, soil management, modern
                farming techniques, pest control, and agricultural business
                strategies—all explained in a simple and easy-to-understand way.
                AgriLearn aims to bridge the knowledge gap and help farmers
                increase their productivity and income.
              </p>
            </div>
            <div className="w-full h-auto rounded-3xl overflow-hidden shadow-lg border-2 border-dashed border-[#ddd] bg-white p-2 md:order-first">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTM0MTd8MHwxfHNlYXJjaHwyMHx8bW9kZXJuJTIwY293b3JraW5nJTIwc3BhY2V8ZW58MHx8fHwxNzIzNjMyNDI4fDA&ixlib=rb-4.0.3&q=80&w=800"
                alt="People collaborating in a modern coworking space with Grow Better sign"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </section>
          <TeamSection></TeamSection>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutSection;
