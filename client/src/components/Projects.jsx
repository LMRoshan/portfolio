import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "🛒 E-commerce Platform",
      description:
        "A full-featured online shopping experience with user auth, product listing, cart, payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "🛍️",
      bgColor: "bg-gradient-to-br from-blue-600 to-purple-800",
      liveDemo: "https://intern-project-ivory-iota.vercel.app/",
      github: "https://github.com/LMRoshan/intern",
    },
    {
      title: "💳 POS System",
      description:
        "A point-of-sale system for restaurant with inventory listing, cart, and billing features.",
      tags: ["React", "Express", "MongoDB", "Node.js"],
      image: "📊",
      bgColor: "bg-gradient-to-br from-green-600 to-blue-800",
      liveDemo: "#",
      github: "https://github.com/LMRoshan/restaurant-POS",
    },
    {
      title: "📸 Photography Portfolio",
      description:
        "A stunning portfolio for photographers with gallery, portfolio, and contact features.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "🎨",
      bgColor: "bg-gradient-to-br from-pink-600 to-red-800",
      liveDemo: "https://boundless-moments.vercel.app/",
      github: "https://github.com/LMRoshan/Boundless-Moments",
    },
    {
      title: "🌱 Smart Krishi",
      description:
        "An agricultural solution connecting farmers with resources, crop solutions, and expert advice.",
      tags: ["React", "Node.js", "MySQL", "APIs", "Java", "Python"],
      image: "🚜",
      bgColor: "bg-gradient-to-br from-emerald-600 to-green-800",
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Dark Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-900/20 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Projects <span className="text-green-400">🚀</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Check out some of the cool stuff I've built! Each project was a
              fun challenge.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-gray-700 h-full">
                  {/* Project Image/Icon */}
                  <div
                    className={`${project.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium transform hover:scale-110 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-3 px-6 rounded-xl font-bold transform hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border ${
                          project.liveDemo !== "#"
                            ? "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white border-blue-500/30"
                            : "bg-gray-600 text-gray-400 border-gray-500 cursor-not-allowed"
                        }`}
                        onClick={(e) =>
                          project.liveDemo === "#" && e.preventDefault()
                        }
                      >
                        Live Demo 🚀
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-3 px-6 rounded-xl font-bold transform hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border ${
                          project.github !== "#"
                            ? "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-gray-600"
                            : "bg-gray-600 text-gray-400 border-gray-500 cursor-not-allowed"
                        }`}
                        onClick={(e) =>
                          project.github === "#" && e.preventDefault()
                        }
                      >
                        GitHub 💻
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-md"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
