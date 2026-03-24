import { Star } from "lucide-react";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Khan",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?u=aisha",
    text: "Working with this team was seamless! Their insights transformed our product strategy. Highly recommended.",
  },
  {
    id: 2,
    name: "Sam Chen",
    role: "Lead Designer",
    image: "https://i.pravatar.cc/150?u=sam",
    text: "Innovative, fast, and creative! Our new branding is perfect. The process was incredible.",
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?u=maria",
    text: "The ROI we saw from this campaign was beyond expectations. Strategic and results-oriented.",
  },
  {
    id: 4,
    name: "Dr. Aris Thorne",
    role: "Chief Engineer",
    image: "https://i.pravatar.cc/150?u=aris",
    text: "Their technical expertise solved challenges we've faced for years. Absolutely brilliant engineers.",
  },
  {
    id: 5,
    name: "Chloe Dupuis",
    role: "HR Specialist",
    image: "https://i.pravatar.cc/150?u=chloe",
    text: "From recruitment to onboarding, their HR platform is a game-changer. So intuitive!",
  },
  {
    id: 6,
    name: "John Doe",
    role: "Software Architect",
    image: "https://i.pravatar.cc/150?u=john",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
  },
];

const TestimonialCard = ({ client }) => {
  return (
    <div className="relative w-full p-6 shadow-xl rounded-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ">
      <div className="text-center mb-4">
        <h3 className="italic font-serif text-3xl text-gray-800">Student</h3>
        <h2 className="text-4xl font-black text-green-600 uppercase tracking-tighter -mt-2">
          Testimonial
        </h2>
      </div>

      <div className="relative flex items-center justify-end mb-4 pr-2">
        <div className="absolute left-0 bg-zinc-800 text-white py-2 pl-6 pr-12 rounded-r-full z-10 shadow-lg border-r-4 border-green-500">
          <p className="font-bold text-lg leading-tight uppercase">
            {client.name}
          </p>
          <p className="text-xs text-gray-300 italic">{client.role}</p>
        </div>

        <div className="w-32 h-32 border-4 border-zinc-800 z-0 bg-white overflow-hidden">
          <img
            src={client.image}
            alt={client.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative bg-primary text-white p-6 rounded-2xl mb-4 text-sm leading-relaxed shadow-inner">
        <div className="absolute -top-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-bottom-[15px] border-primary transform rotate-180"></div>
        <p className="relative">
          <span className="text-2xl font-serif absolute -left-4 -top-2 opacity-50">
            “
          </span>
          {client.text}
          <span className="text-2xl font-serif absolute -bottom-4 opacity-50">
            ”
          </span>
        </p>
      </div>

      <div className="flex items-center justify-between bg-zinc-800 rounded-full p-1 pl-4 shadow-lg">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className=" text-xl">
              <Star className="text-yellow-600"></Star>
            </span>
          ))}
        </div>
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full transition-colors uppercase text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

const TestimonialGrid = () => {
  return (
    <div className=" container mx-auto overflow-hidden  ">
      <div className="flex animate-slide gap-8 w-max pause-on-hover">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} client={item} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
