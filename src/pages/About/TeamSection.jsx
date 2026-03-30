import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "Md.Bayjid Mia",
      role: "Founder & CEO(Tech Lead)",
      bio: "Full stack developer experience in building scalable web applications.",
      image: "https://i.ibb.co.com/qMLjgyfr/1000072045-removebg-preview-1.png",
    },
    {
      name: "Ashwin Santiago",
      role: "MEAN Stack Developer",
      bio: "Experienced in building robust web applications using MongoDB, Express.js, Angular, and Node.js.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Caitlyn King",
      role: "Backend Developer",
      bio: "Experienced in building scalable backend systems and APIs.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Owen Garcia",
      role: "Frontend Developer",
      bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1D2939] mb-6">
            We are the people who <br className="hidden md:block" /> make up
            Agri <span className="italic font-normal text-primary">Learn.</span>
          </h2>
          <p className="text-lg text-[#475467] max-w-2xl mx-auto">
            Our philosophy is simple; hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container */}
              <div className="aspect-[4/5] mb-6 overflow-hidden rounded-2xl bg-[#F2F4F7]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold text-[#101828] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#6941C6] font-medium mb-3">{member.role}</p>
                <p className="text-[#475467] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
