import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Binary Code Animation */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full font-mono text-green-400 text-sm leading-6 animate-scroll">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 40 }).map((_, j) => (
                <span key={j} className="opacity-70">
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me <span className="text-cyan-400">🧑‍💻</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences in the dark
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Main Content */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Hey there! I'm an enthusiastic MERN stack developer who loves
                  creating digital experiences that make people{" "}
                  <span className="text-purple-400 font-bold glow-text">
                    smile in the dark
                  </span>
                  . I believe coding should be both powerful and visually
                  stunning!
                </p>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  As a passionate newcomer to the development world, I'm
                  building everything from e-commerce platforms to creative web
                  solutions. I'm always excited to learn new technologies and
                  tackle challenging problems with fresh energy and creativity.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new tech,
                  diving into virtual worlds or exploring the cosmos! 🌌
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Interests & Hobbies Section */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Beyond Coding 🎯
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* F1 McLaren Component */}
                  <div className="p-5 group bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-4 border-2 border-orange-500/30 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-2">🏎️</div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      F1 McLaren Fan
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Lando Norris & Oscar Piastri supporter! 🏁
                    </p>
                    <div className="mt-2 flex justify-center space-x-1">
                      <span className="text-xs bg-orange-500/30 text-orange-300 px-1 py-0.5 rounded">
                        #Papaya
                      </span>
                    </div>
                  </div>

                  {/* Rugby Component */}
                  <div className="p-5 group bg-gradient-to-br from-black/40 to-gray-700/40 rounded-xl p-4 border-2 border-gray-600/30 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-2">🏉</div>
                    <h4 className="text-white font-bold text-lg mb-1">Rugby</h4>
                    <p className="text-gray-300 text-sm">
                      Supporting All Blacks! 🇳🇿
                    </p>
                    <div className="mt-2 flex justify-center space-x-1">
                      <span className="text-xs bg-gray-700 text-gray-300 px-1 py-0.5 rounded">
                        #AllBlacks
                      </span>
                    </div>
                  </div>

                  {/* Deutsch Component */}
                  <div className="p-5 group bg-gradient-to-br from-yellow-500/20 to-black/40 rounded-xl p-4 border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-2">🇩🇪</div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Deutsch Learner
                    </h4>
                    <p className="text-gray-300 text-sm">
                      B1 level. Viel Spaß! ✨
                    </p>
                    <div className="mt-2 flex justify-center space-x-1">
                      <span className="text-xs bg-yellow-500/30 text-yellow-300 px-1 py-0.5 rounded">
                        #Deutsch
                      </span>
                    </div>
                  </div>

                  {/* Tennis Component */}
                  <div className="p-5 group bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-4 border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-2">🎾</div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Tennis Enthusiast
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Love watching tennis legends!
                    </p>
                    <div className="mt-2 flex justify-center space-x-1">
                      <span className="text-xs bg-green-500/30 text-green-300 px-1 py-0.5 rounded">
                        #Tennis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(192, 132, 252, 0.5);
        }
      `}</style>
    </section>
  );
};

export default About;
