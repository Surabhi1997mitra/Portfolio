// eslint-disable-next-line
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="text-gray-400 font-serif bg-gradient-to-r from-background-theme-start to-background-theme-end body-font">
      <Navbar />
      <About />
      <Projects />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}
