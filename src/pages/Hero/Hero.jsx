// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { MdCheckCircle } from "react-icons/md";

// const Hero = () => {
//   const benefits = ["Efficiency", "Sustainability", "Growth"];
//   const clientAvatars = [
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop", // Male 1
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop", // Female 1
//     "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&h=100&auto=format&fit=crop", // Male 2
//   ];
//   return (
//     <div>
//       <section className="relative mx-auto bg-sky-50 pt-28 pb-10 flex items-center justify-center">
//         {/* Background Image Container with Gradient Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/17693614/pexels-photo-17693614.jpeg" // Placeholder: replace with actual field/tractor image
//             alt="Field with tractor spraying"
//             className="w-full h-full object-cover"
//           />
//           {/* Darkening Gradient Overlay (to make light text legible) */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>
//         </div>

//         {/* Hero Content (Centered) */}
//         <div className="relative z-10 text-center max-w-4xl px-6">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-poppins">
//             Learn Modern <br />
//             <span className="text-[#4CAF50]">Agriculture</span> Today
//           </h1>
//           <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-12">
//             Biotechnology enables smarter, sustainable agriculture by improving
//             crop yields, boosting resistance.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-center gap-6 mb-20">
//             <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold  transition-colors">
//               Explore Our Solutions
//               <IoIosArrowRoundForward className="text-3xl" />
//             </button>
//             <button className="bg-transparent text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border border-gray-400 hover:bg-white/40 transition-colors">
//               Learn More
//             </button>
//           </div>

//           {/* Footer Overlays within Hero */}
//           <div className="relative flex items-end justify-between w-full">
//             {/* Client Count Overlay (Bottom Left) */}
//             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 border border-white/20">
//               <div className="flex -space-x-3">
//                 {clientAvatars.map((url, index) => (
//                   <img
//                     key={index}
//                     src={url}
//                     alt={`Client ${index}`}
//                     className="w-10 h-10 rounded-full border-2 border-white object-cover"
//                   />
//                 ))}
//               </div>
//               <div>
//                 <p className="text-gray-900 font-semibold text-lg">
//                   Already helped
//                 </p>
//                 <p className="text-gray-600 text-base">over 10K+ clients</p>
//               </div>
//             </div>

//             {/* Key Benefits Overlay (Bottom Right) */}
//             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-6 border border-white/20">
//               {benefits.map((benefit) => (
//                 <div key={benefit} className="flex items-center gap-3">
//                   <MdCheckCircle className="text-2xl text-gray-700" />
//                   <span className="text-xl font-medium text-gray-900">
//                     {benefit}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { BiVideo } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosStarOutline } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-[#F3FBF4] mx-auto pt-28 pb-10 flex items-center justify-center">
        {/* Background Image with Dark Gradient */}
        {/* <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17693614/pexels-photo-17693614.jpeg"
            alt="Field with tractor spraying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>
        </div> */}

        {/* Hero Content */}
        <section className="relative container pt-16 pb-30 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#4CAF50] font-medium text-sm mb-6">
                  <IoIosStarOutline className="w-4 h-4 fill-current" />

                  <span>#1 Agriculture Learning Platform</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-poppins">
                  Learn Modern <br />
                  <span className="text-[#4CAF50]">Agriculture</span> Today
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Connect with expert farmers and agronomists worldwide. Master
                  new techniques, increase your yield, and build a sustainable
                  farming future through high-quality video courses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link className="bg-[#4CAF50] hover:bg-[#43a047] text-white px-8 py-3.5 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/30">
                    Explore Courses
                    <BsArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/instructor"
                    className="bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 px-8 py-3.5 rounded-full font-semibold text-lg flex items-center justify-center transition-all"
                  >
                    Become Instructor
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/20 to-[#03A9F4]/20 rounded-[3rem] transform rotate-3 scale-105"></div>
                <img
                  src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Agriculture"
                  className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
                />

                {/* Floating Badge 1 */}
                <div
                  className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#FFA726]">
                    <FaUserSecret className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Expert Mentors
                    </p>
                    <p className="text-lg font-bold text-gray-900">Top 1%</p>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div
                  className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#03A9F4]">
                    <BiVideo className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Video Lessons
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      HD Quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
