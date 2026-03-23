import React from "react";

const instructors = [
  {
    name: "Tom Smith",
    role: "Spanish Agronomist",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/047/265/476/small/a-young-farmer-inspects-the-quality-of-wheat-sprouts-in-the-field-the-concept-of-agriculture-photo.jpg",
  },
  {
    name: "Thomas Müller",
    role: "German Soil Scientis",
    image:
      "https://img.freepik.com/free-photo/middle-view-man-cornfield_23-2148233437.jpg?semt=ais_rp_progressive&w=740&q=80",
  },
  {
    name: "Aiko Tanaka",
    role: "Japanese Instructor",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  },
];

const InstructorCard = ({ instructor }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden mb-6 transition-transform duration-300 group-hover:-translate-y-2">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        style={{
          clipPath:
            "polygon(100% 0%, 100% 85%, 85% 85%, 80% 100%, 70% 85%, 55% 85%, 50% 100%, 40% 85%, 25% 85%, 20% 100%, 10% 85%, 0% 85%, 0% 0%)",
        }}
      />

      <div className="absolute bottom-4 right-4 bg-primary rounded-full p-2 shadow-sm border border-gray-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </div>

    <h3 className="text-xl font-medium text-gray-900">{instructor.name}</h3>
    <p className="text-gray-500 text-sm">{instructor.role}</p>
  </div>
);

export default function MeetOurTeachers() {
  return (
    <section className="py-20 px-6 container mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-green-900 mt-4 mb-2">
          Meet Our <span className="text-primary italic  ">Instructors</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Our teachers bring international experience and a passion for
          Agriculture. With their guidance, students gain the skills and
          confidence to succeed in real-world communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((teacher, index) => (
          <InstructorCard key={index} instructor={teacher} />
        ))}
      </div>

      <button className="mt-16 bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-950 transition-colors">
        See All Instructors
      </button>
    </section>
  );
}
