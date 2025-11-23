import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Connect from "../components/Connect";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen from-blue-50 to-indigo-100">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Connect />
      </div>
    </div>
  );
};

export default Home;
