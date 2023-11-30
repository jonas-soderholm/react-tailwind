import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Toolkit from "./Components/Toolkit.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Toolkit />
  </React.StrictMode>
);
