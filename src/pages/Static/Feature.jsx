import React from "react";

const Feature = () => {
  const sections = [
    {
      title: "Smart Learning Experience for Farmers",
      color: "border-green-500",
      dot: "bg-green-500",
      features: [
        "User-Friendly Interface: Simple and intuitive design for all users.",
        "Localized Content: Easy-to-understand lessons tailored for learners.",
        "Structured Learning: Step-by-step courses from beginner to advanced.",
        "Mobile Accessible: Learn anytime, anywhere using your phone.",
      ],
      visual: (
        <div className="relative w-full h-64 bg-gray-800/50 rounded-xl border border-white/10 p-6 overflow-hidden">
          <div className="absolute top-4 right-4 bg-gray-900 border border-white/20 p-4 rounded-lg shadow-2xl">
            <p className="text-3xl font-bold">1000+</p>
            <p className="text-sm text-gray-400">Active Learners</p>
          </div>

          <div className="mt-8 space-y-2 opacity-50">
            <div className="h-4 w-32 bg-gray-700 rounded" />
            <div className="h-4 w-48 bg-gray-700 rounded" />
            <div className="h-4 w-40 bg-gray-700 rounded" />
          </div>

          <div className="absolute bottom-4 left-4 bg-green-600/20 border border-green-500/50 px-3 py-1 rounded-full text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Recorded Video
          </div>
        </div>
      ),
    },
    {
      title: "Modern Agriculture Techniques",
      color: "border-emerald-500",
      dot: "bg-emerald-500",
      features: [
        "Smart Farming Methods: Learn modern agricultural practices.",
        "Irrigation Systems: Optimize water usage effectively.",
        "Crop Management: Improve yield with proven techniques.",
        "Pest Control: Protect crops with smart solutions.",
      ],
      visual: (
        <div className="relative flex items-center justify-center h-64">
          <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-800 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="75"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray="471"
                strokeDashoffset="120"
                className="text-green-500"
              />
            </svg>
            <div className="text-center">
              <p className="text-3xl font-bold">75%</p>
              <p className="text-[10px] text-gray-400 uppercase">
                Success Rate
              </p>
            </div>
          </div>

          <div className="absolute top-4 left-10 w-8 h-8 bg-white/10 rounded-lg backdrop-blur-md border border-white/20" />
          <div className="absolute bottom-10 right-10 w-10 h-10 bg-white/10 rounded-full backdrop-blur-md border border-white/20" />
        </div>
      ),
    },
    {
      title: "Analytics & Growth Insights",
      color: "border-lime-500",
      dot: "bg-lime-500",
      features: [
        "Real-Time Data: Track farming and learning performance.",
        "Progress Monitoring: Measure your improvement over time.",
        "Smart Suggestions: Get AI-powered farming insights (future scope).",
        "Detailed Reports: Analyze productivity and results easily.",
      ],
      visual: (
        <div className="w-full h-64 bg-gray-800/30 rounded-xl p-6 flex flex-col justify-between border border-white/5">
          <div>
            <p className="text-xs text-gray-400">Growth Increase</p>
            <p className="text-2xl font-bold">+45%</p>
          </div>

          <div className="h-24 w-full flex items-end gap-1">
            {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-green-600/50 to-green-400 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" bg-[#183a37]  conatiner border-2 mt-20 text-white py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif  mt-4 mb-2">
            <span className="text-white"> Why Choose</span>{" "}
            <span className="italic font-normal text-primary">
              KrishiLearn?
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            KrishiLearn empowers farmers and learners with modern agricultural
            knowledge, practical skills, and technology-driven insights.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#121216] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className={`border-l-2 ${section.color} pl-8 relative`}>
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${section.dot} ring-4 ring-[#121216]`}
                  />
                  <h3 className="text-2xl font-semibold mb-6">
                    {section.title}
                  </h3>

                  <ul className="space-y-4">
                    {section.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div
                          className={`mt-1.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border ${section.color}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${section.dot}`}
                          />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                          {feat}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {section.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
