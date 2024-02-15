import React, { useState, useRef, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";

function Projects() {
  const containerRef = useRef(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const cards = [
    {
      title: "Three.js, 3D scroller23",
      description: "My three.js project",
      language: ["zz", "sss"],
      image: "/phone-app.png",
    },
    {
      title: "Three.js2, 3D scroller2",
      description: "My three.js project2 asdasdasd asd asd as das da d",
      language: ["zz", "sss"],
      image: "/phone-app.png",
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz", "sss"],
      image: "/phone-app.png",
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz"],
      image: "/phone-app.png",
    },
  ];

  const handleCardClick = (title) => {
    console.log(`Card clicked: ${title}`);
  };

  function RenderCards() {
    return cards.map((properties) => (
      <div
        href:key={properties.title}
        className="card bg-stone-800 rounded-3xl  hover:cursor-pointer hover:bg-stone-700"
        onClick={() => handleCardClick(properties.title)}
      >
        <img src={properties.image} alt="" className="rounded-t-2xl " />
        <div className=" p-3">
          <h2 className="text-xl font-semibold text-gray-200 header-font">{properties.title}</h2>
          <div className="flex gap-2">
            {properties.language.map((language, index) => (
              <button key={index} className="bg-blue-500 text-gray-200 py-0 px-1 rounded-full mt-1 text-l ">
                {language}
              </button>
            ))}
          </div>
          <p className="text-l mt-2 text-gray-200 ">{properties.description}</p>
        </div>
      </div>
    ));
  }

  function toggleClick(position, scrollOffset) {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Scroll
    if (container) {
      if (position === "left") {
        container.scrollTo({
          left: container.scrollLeft - maxScroll / 1.7,
          behavior: "smooth",
        });
      } else if (position === "right") {
        container.scrollTo({
          left: container.scrollLeft + maxScroll / 1.7,
          behavior: "smooth",
        });
      }
    }

    // Button visuals
    if (container.scrollLeft === 0) {
    }
    if (container.scrollLeft > maxScroll - 2) {
    }
  }

  function ScrollButton({ position, onClick }) {
    return (
      <button
        className={`toggle-buttons flex scroll-button bg-gray-100 rounded-full h-14 w-14 
          hover:bg-gray-400 text-4xl items-center justify-center mx-8 
          
          ${position === "right" ? "" : "rotate-180"}
           `}
        onClick={onClick}
      >
        <img src="./arrow-right.svg" alt="" />
      </button>
    );
  }

  return (
    <>
      <div id="projects"></div>
      <div
        className={`toolkit-header ${darkMode ? "text-dark" : "text-light"} project-header  flex justify-center text-center flex-col md:text-7xl text-4xl mt-36 mb-10`}
      >
        <div className="font-bold header-font">Projects</div>
        <div className="text-2xl body-text-medium">Have a look at my latest work!</div>
      </div>
      <div className="toggle-buttons flex justify-center mt-4 mx-4">
        <ScrollButton position="left" onClick={() => toggleClick("left", 200)} />
        <ScrollButton position="right" onClick={() => toggleClick("right", 200)} />
      </div>

      <div
        className="card-container overflow-scroll mx-auto mt-8 scrollbar-hide md:w-300 body-text-medium"
        style={{ maxWidth: "1350px" }}
        ref={containerRef}
      >
        <div
          className="individual-cards flex m-5 gap-5 ml-4 mr-4 md:w-[2200px] w-[1000px]"
          style={{
            height: "auto",
          }}
        >
          <RenderCards />
        </div>
      </div>
    </>
  );
}

export default Projects;
