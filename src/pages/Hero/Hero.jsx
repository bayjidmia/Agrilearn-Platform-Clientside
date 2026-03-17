import React from "react";
import { BiVideo } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <section className="relative   pt-35  flex items-center justify-center">
        <section className="relative container mx-auto  pt-16 pb-30 overflow-hidden">
          <div className=" px-4 sm:px-6 lg:px-8  relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="w-full lg:h-full order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-primary font-medium text-sm mb-6">
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
                  <Link className="bg-primary hover:bg-[#43a047] text-white px-8 py-3.5 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/30">
                    Explore Courses
                    <BsArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/instructor"
                    className="bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 px-8 py-3.5 rounded-full font-semibold text-lg flex items-center justify-center transition-all gap-2 "
                  >
                    Become Instructor
                    <BsArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative lg:block order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/20 to-[#03A9F4]/20 rounded-[3rem] transform rotate-3 scale-105"></div>

                <img
                  src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Agriculture"
                  className="relative rounded-[3rem] shadow-2xl object-cover lg:h-[600px] w-full"
                />

                {/* Floating Badge 1 */}
                <div
                  className="hidden lg:flex absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 animate-bounce"
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
                  className="hidden lg:flex absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 animate-bounce"
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
