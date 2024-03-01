import React, { useContext, useRef, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import ScrollContainer from "react-indiana-drag-scroll";

function Projects() {
  const containerRef = useRef(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const cards = [
    {
      title: "TrashTagger",
      description:
        // "Empower communities to report and manage trash efficiently. Tag trash locations for swift collection by responsible waste management authorities.",
        "Share your marks!",
      language: ["React", "Node.js", "Express", "MySql"],
      image: "/trash-tagger.png",
      url: "https://trashyu.netlify.app",
    },
    {
      title: "3D Showroom",
      description: "See KTM EXC 450",
      language: ["Three.js", "React Fiber"],
      image: "/450.png",
      url: "https://jonas-450.netlify.app/",
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz", "sss"],
      image: "/phone-app.png",
      url: "https://trashyu.netlify.app",
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz"],
      image: "/phone-app.png",
      url: "https://trashyu.netlify.app",
    },
  ];

  const handleCardClick = (url) => {
    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  function RenderCards() {
    return cards.map((properties) => (
      <div className={`${darkMode ? "text-dark" : "text-light"}`} onClick={() => handleCardClick(properties.url)}>
        <div
          key={properties.title}
          className="card bg-[#1b1a1a] rounded-3xl md:w-[30rem] w-[18rem] hover:cursor-pointer hover:bg-stone-700 flex flex-col"
        >
          <img
            src={properties.image}
            alt=""
            className="rounded-2xl md:w-[30rem] md:h-[20rem] w-[25rem] h-[12rem] object-cover transition duration-300 ease-in-out transform hover:brightness-75 relative"
          />
          {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div> */}
        </div>
        <div className="p-3 flex flex-col flex-grow hover:cursor-pointer">
          <h2 className="md:text-3xl text-xl font-semibold header-font">{properties.title}</h2>
          <p className="md:text-xl text-smflex-grow">{properties.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {properties.language.map((language, index) => (
              <div key={index} className="bg-stone-800 text-gray-200 mt-2 py-1 px-2 rounded-full md:text-sm text-[8px]">
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  }

  function toggleClick(position, scrollOffset) {
    const container = containerRef.current;
    if (container) {
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollAmount = maxScroll / 1.7; // Adjust this value as needed
      const newScrollPosition = position === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  }

  function ScrollButton({ position, onClick }) {
    return (
      <button
        className={`toggle-buttons flex scroll-button bg-gray-100 rounded-full h-14 w-14
          hover:bg-gray-400 text-4xl items-center justify-center mx-8
          ${position === "right" ? "" : "rotate-180"}`}
        onClick={onClick}
        style={{
          transition: "background-color 0.3s ease-in-out", // Add transition for background-color
        }}
      >
        <img src="./arrow-right.svg" alt="" />
      </button>
    );
  }

  return (
    <>
      <div id="projects"></div>
      <div
        className={`toolkit-header ${
          darkMode ? "text-dark" : "text-light"
        } project-header  flex justify-center text-center flex-col md:text-7xl text-4xl mt-36 mb-10`}
      >
        <div className="font-bold header-font">Projects</div>
        <div className="text-2xl body-text-medium">Have a look at my latest work!</div>
      </div>
      <div className="toggle-buttons flex justify-center mt-4 mx-4">
        <ScrollButton position="left" onClick={() => toggleClick("left", 500)} />
        <ScrollButton position="right" onClick={() => toggleClick("right", 500)} />
      </div>

      <div
        className="card-container overflow-scroll mx-auto mt-8 scrollbar-hide md:w-300 body-text-medium"
        style={{ maxWidth: "1350px" }}
        ref={containerRef}
      >
        <ScrollContainer
          className={`containerZZ individual-cards flex m-5 gap-5 ml-4 mr-4 md:w-[2200px] w-[1000px]`}
          style={{ height: "auto" }}
        >
          <RenderCards />
        </ScrollContainer>
      </div>
    </>
  );
}

export default Projects;
