import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import { useDarkMode, DarkModeProvider } from "./components/DarkModeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Navbar />
      <Hero />
      <Toolkit />
      <Projects />
      <Experience />
      <Contact />
    </DarkModeProvider>
  </React.StrictMode>
);
