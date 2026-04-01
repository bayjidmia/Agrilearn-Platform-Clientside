import { Eye, Heart } from "lucide-react";
import React, { useState } from "react";

const BlogSection = () => {
  const categories = [
    "View all",
    "Design",
    "Product",
    "Development",
    "Customer Support",
    "Leadership",
    "Management",
    "Interviews",
  ];

  const posts = [
    {
      id: 1,
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Look no further.",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
      category: "Design",
      view: 100,
      likes: 20,

      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 200,
      likes: 25,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 100,
      likes: 25,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 100,
      likes: 25,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 300,
      likes: 30,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 200,
      likes: 15,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Best books on scaling your startup",
      description:
        "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      category: "Design",
      view: 100,
      likes: 25,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [activeTab, setActiveTab] = useState("View all");

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-white text-slate-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Untitled Blog
          </h1>
          <div className="flex w-full max-w-md items-center border border-gray-200 rounded-full p-1 shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full outline-none text-sm"
            />
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-gray-500 max-w-xs text-sm md:text-base leading-relaxed">
          New product features, the latest in technology, solutions, and
          updates.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-10 overflow-x-auto no-scrollbar">
        <nav className="flex space-x-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTab === cat
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-gray-500 hover:text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-sm">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Corner Accent for the first post style */}
              <div
                className="absolute top-0 right-0 w-8 h-8 bg-slate-900 clip-path-triangle"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              ></div>

              {/* Glass Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/20 backdrop-blur-md border-t border-white/30 flex items-center justify-between px-6">
                <div className="text-white">
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs opacity-80">{post.date}</p>
                </div>
                <div className="flex justify-center items-center text-center gap-4 ">
                  <div className="flex gap-2 items-center">
                    <p>{post.view}</p>
                    <Eye></Eye>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <p>{post.likes}</p>
                    <Heart></Heart>
                  </div>
                </div>
                <span className="text-white text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                {post.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base">
                {post.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 mt-4 group">
                Read post
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
