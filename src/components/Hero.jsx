import React from "react";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24"
    >
      {/* Gradient overlay for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Arpan
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl">
                Full-Stack Developer & Computer Science Student
              </p>
              <p className="text-lg text-gray-400 max-w-xl">
                Passionate about creating innovative web applications and
                solving complex problems through code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/arpan-profile.jpg"
                  alt="Arpan Mehta"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ display: "none" }}
                >
                  AM
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-black font-bold text-xl">CS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <ChevronDownIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
