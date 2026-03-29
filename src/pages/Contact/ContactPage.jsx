import React from "react";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 md:p-12"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Information */}
        <div className="text-white space-y-12">
          <header>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              You Have Questions, <br /> We Have Answers
            </h1>
            <p className="mt-6 text-gray-200 max-w-md leading-relaxed">
              Discover experiences you won't find anywhere else — thoughtfully
              designed to immerse you in the heart of the destination. Soulful
              stories waiting to be lived.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/20">
            <div>
              <h3 className="text-xl font-medium mb-2">Location</h3>
              <p className="text-gray-300 text-sm leading-6">
                Anantara Oceanfront Resort
                <br />
                123 Serenity Bay Road
                <br />
                Koh Samui, Thailand 84320
              </p>
              <p className="mt-4 text-gray-300 text-sm italic">
                Monday - Sunday | 08:00 - 22:00 (local time)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Social Media</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li className="hover:text-white cursor-pointer transition">
                  Instagram
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  LinkedIn
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Facebook
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Tiktok
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="text-gray-300 text-sm hover:text-white cursor-pointer transition">
                stay@anantararesort.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Contact</h3>
              <p className="text-gray-300 text-sm">+66 77 123 456</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className=" rounded-3xl p-8 md:p-10 shadow-2xl max-w-xl ml-auto w-full">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Our team is ready to assist you with every detail, big or small.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full  text-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full text-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 "
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Country"
                className="w-full text-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 "
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full text-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 "
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full text-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 "
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full text-white px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400  resize-none"
            ></textarea>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="updates"
                className="w-4 h-4  text-white rounded border-gray-300 accent-black"
              />
              <label htmlFor="updates" className="text-sm text-gray-200">
                I'd like to receive exclusive offers and updates
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-full mt-4 hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
