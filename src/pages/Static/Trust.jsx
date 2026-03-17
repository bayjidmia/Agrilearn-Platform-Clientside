import React from "react";
import { Users, BookOpen, Award, Star } from "lucide-react";

const Trust = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-primary" />,
      value: "10,000+",
      label: "Active Students",
    },
    {
      id: 2,
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      value: "500+",
      label: "Online Courses",
    },
    {
      id: 3,
      icon: <Award className="w-10 h-10 text-primary" />,
      value: "100+",
      label: "Expert Instructors",
    },
    {
      id: 4,
      icon: <Star className="w-10 h-10 text-primary" />,
      value: "4.8/5",
      label: "Average Rating",
    },
  ];

  return (
    <section className="bg-neutral">
      <div className="container mx-auto  py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Icon Container */}
              <div className="p-2">{stat.icon}</div>

              {/* Value */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-sm md:text-base text-primary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
