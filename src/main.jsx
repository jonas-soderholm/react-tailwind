import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Toolkit from "./Components/Toolkit.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Contact from "./Components/Contact.jsx";
import Test from "./Components/Test.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Test /> */}
    <Navbar />
    <Hero />
    <Toolkit />
    <Projects />
    <Experience />
    <Contact />
  </React.StrictMode>
);
