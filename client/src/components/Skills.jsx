import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Magic 🎨",
      icon: "💻",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind", level: 85 },
        { name: "Next", level: 20 },
      ],
    },
    {
      title: "Backend Wizardry ⚡",
      icon: "🔧",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 50 },
        { name: "REST APIs", level: 70 },
        { name: "Authentication", level: 87 },
        { name: "JWT", level: 85 },
      ],
    },
    {
      title: "Tools & Others 🛠️",
      icon: "🚀",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Git", level: 82 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "ThunderClient", level: 88 },
        { name: "Figma", level: 80 },
        { name: "Agile", level: 80 },
      ],
    },
  ];

  const techStats = [
    {
      number: "4+",
      label: "Projects Done",
      emoji: "🚀",
      color: "text-purple-400",
    },
    {
      number: "∞",
      label: "Cups of Coffee",
      emoji: "☕",
      color: "text-orange-400",
    },
    {
      number: "100%",
      label: "Dark Mode Fan",
      emoji: "🌙",
      color: "text-green-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600 rounded-full blur-2xl opacity-5 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech Arsenal <span className="text-cyan-400">⚡</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I wield to craft digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-500 border border-gray-700/50 group-hover:border-cyan-500/30 h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-cyan-400 text-xs font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-y-125`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>

          {/* Tech Stack Visualization */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Tech Stack Mastery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "React", icon: "⚛️", level: 85 },
                { name: "Node.js", icon: "🟢", level: 70 },
                { name: "MongoDB", icon: "🍃", level: 50 },
                { name: "Express", icon: "🚂", level: 70 },
                { name: "Tailwind", icon: "🎨", level: 85 },
                { name: "Next", icon: "📘", level: 20 },
              ].map((tech) => (
                <div key={tech.name} className="text-center group">
                  <div className="relative inline-block mb-2">
                    <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-gray-600">
                      {tech.icon}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div className="text-white text-sm font-medium mb-1">
                    {tech.name}
                  </div>
                  <div className="text-cyan-400 text-xs font-mono">
                    {tech.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30 group"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {stat.emoji}
                </div>
                <div
                  className={`text-3xl font-bold mb-2 ${stat.color} font-mono`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Coding Activity */}
          <div className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Current Focus</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Active</span>
              </div>
            </div>
            <div className="font-mono text-sm text-gray-300 space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-purple-400">const</span>
                <span className="text-cyan-400">currentProject</span>
                <span className="text-white">=</span>
                <span className="text-yellow-400">"Smart Krishi"</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-purple-400">let</span>
                <span className="text-cyan-400">status</span>
                <span className="text-white">=</span>
                <span className="text-green-400">"Coding in the dark..."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
