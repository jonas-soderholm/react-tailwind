import React, { useRef } from "react";
import { useDarkMode } from "./DarkModeContext";

function Projects() {
  const containerRef = useRef(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const cards = [
    {
      title: "TrashTagger",
      description:
        // "Empower communities to report and manage trash efficiently. Tag trash locations for swift collection by responsible waste management authorities.",
        "TrashTagger",
      language: ["React", "Node.js", "Express", "MySql"],
      image: "/trash-tagger.png",
      url: "https://trashyu.netlify.app",
    },
    {
      title: "450 Showroom",
      description: "3D Showroom",
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
      <div>
        <div
          key={properties.title}
          className="card bg-[#1b1a1a] rounded-3xl md:w-[30rem] w-[18rem] hover:cursor-pointer hover:bg-stone-700 flex flex-col"
          onClick={() => handleCardClick(properties.url)}
        >
          <img
            src={properties.image}
            alt=""
            className="rounded-2xl md:w-[30rem] md:h-[20rem] w-[25rem] h-[12rem] object-cover"
          />
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <h2 className="md:text-3xl text-xl font-semibold text-gray-200 header-font">{properties.title}</h2>
          <p className="md:text-xl text-sm text-gray-200 flex-grow">{properties.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {properties.language.map((language, index) => (
              <button
                key={index}
                className="bg-stone-800 text-gray-200 mt-2 py-1 px-2 rounded-full md:text-sm text-[8px]"
              >
                {language}
              </button>
            ))}
          </div>
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
        className={`toolkit-header ${
          darkMode ? "text-dark" : "text-light"
        } project-header  flex justify-center text-center flex-col md:text-7xl text-4xl mt-36 mb-10`}
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
