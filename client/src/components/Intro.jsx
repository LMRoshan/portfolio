import React from "react";
import Me from "../assets/me1.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 py-10"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500 rounded-lg rotate-45 animate-float opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-cyan-400 rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-pink-500 rotate-12 animate-float opacity-70"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-28 h-28 border-2 border-green-400 rounded-lg animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-600 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-600 rounded-full blur-2xl opacity-25 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {/* <div className="mb-12">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={Me}
                  alt="Roshan - MERN Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div> */}

          <div className="mb-12">
            <div className="w-40 h-40 mx-auto mb-8 relative cursor-pointer group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full animate-spin-slow group-hover:animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <a href="/login" className="w-full h-full">
                  <img
                    src={Me}
                    alt="Roshan - MERN Stack Developer"
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in">
              Hey! I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Roshan
              </span>
            </h1>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-12 transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MERN Stack Developer
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                & UI/UX Designer
              </span>
              <span className="text-cyan-400 ml-2 animate-pulse">✨</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I craft{" "}
              <span className="text-purple-400 font-semibold">
                immersive & modern
              </span>{" "}
              web experiences with clean UI, smooth UX, and powerful backend
              logic.
              <br />
              As a passionate beginner, I'm constantly learning and leveling up
              in the development world!
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind & Bootstrap",
              "Next",
              "Figma",
            ].map((tech, index) => (
              <div
                key={tech}
                className={`px-5 py-3 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-700 text-gray-300 text-sm font-medium transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300 ${
                  ["F1", "Deutsch", "Tennis", "Rugby"].includes(tech)
                    ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/30"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;
