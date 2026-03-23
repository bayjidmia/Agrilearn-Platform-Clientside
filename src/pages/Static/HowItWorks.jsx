import React from "react";
import { UserPlus, Sprout, BookOpen, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      description:
        "Join our community of modern farmers and agronomists to start your journey.",
      icon: <UserPlus className="w-10 h-10 text-green-700" />,
    },
    {
      id: 2,
      title: "Choose Course",
      description:
        "Select from organic farming, hydroponics, or advanced soil science modules.",
      icon: <Sprout className="w-10 h-10 text-green-700" />,
    },
    {
      id: 3,
      title: "Learn & Practice",
      description:
        "Access high-quality video lessons and hands-on field assignments daily.",
      icon: <BookOpen className="w-10 h-10 text-green-700" />,
    },
    {
      id: 4,
      title: "Get Certificate",
      description:
        "Boost your professional profile with our globally recognized credentials.",
      icon: <Award className="w-10 h-10 text-green-700" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFBF7] py-20 px-6">
      <div className="text-center mb-22">
        <h2 className="text-4xl md:text-5xl font-serif text-green-900 mt-4 mb-2">
          How It <span className=" italic text-primary">Works</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed ">
          Start your journey toward sustainable and tech-driven agriculture in
          four simple steps.
        </p>
      </div>

      <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 rotate-90 origin-left hidden lg:block">
        <h1 className="text-[120px] font-black text-gray-100 uppercase tracking-tighter opacity-40 select-none">
          Agriculture
        </h1>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/1187692/pexels-photo-1187692.jpeg"
              alt="Organic Produce"
              className="rounded-lg shadow-2xl lg:w-500 h-100 transform transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-md hidden md:block">
              <p className="font-bold text-xl italic text-center leading-tight">
                AgriLearn
                <br />
                <span className="text-sm font-normal opacity-80 uppercase tracking-widest">
                  Natural Learning
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-start group">
              <div className="mb-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:bg-green-50 group-hover:border-green-200 group-hover:-translate-y-1">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-green-600 text-sm">0{step.id}</span>
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
