import React, { useState, useRef, useEffect } from "react";

function Projects() {
  const containerRef = useRef(null);

  const cards = [
    {
      title: "Three.js, 3D scroller23",
      description: "My three.js project",
      language: ["zz", "sss"],
    },
    {
      title: "Three.js2, 3D scroller2",
      description: "My three.js project2 asdasdasd asd asd as das da d",
      language: ["zz", "sss"],
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz", "sss"],
    },
    {
      title: "Three.js3, 3D scroller3",
      description: "My three.js project3",
      language: ["zz"],
    },
  ];

  function RenderCards() {
    return cards.map((properties) => (
      <div
        href:key={properties.title}
        className="card bg-stone-900 p-4 rounded-md border border-gray-500 hover:cursor-pointer hover:bg-stone-800 "
        onClick={() => handleCardClick(properties.title)}
      >
        <img src="/sweden-flag.png" alt="" className="rounded-md" />
        <div className="my-2">
          <h2 className="text-xl font-semibold text-gray-200">
            {properties.title}
          </h2>
          <div className="flex gap-2">
            {properties.language.map((language, index) => (
              <button
                key={index}
                className="bg-blue-500 text-gray-200 py-0 px-1 rounded-full mt-1 text-xs"
              >
                {language}
              </button>
            ))}
          </div>
          <p className="text-sm mt-2 text-gray-200">{properties.description}</p>
        </div>
      </div>
    ));
  }

  const handleCardClick = (title) => {
    console.log(`Card clicked: ${title}`);
  };

  function toggleClick(position, scrollOffset) {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Scroll
    if (container) {
      if (position === "left") {
        container.scrollTo({
          left: container.scrollLeft - scrollOffset,
          behavior: "smooth",
        });
      } else if (position === "right") {
        container.scrollTo({
          left: container.scrollLeft + scrollOffset,
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
          hover:bg-gray-300 text-4xl items-center justify-center mx-8 
          
          ${position === "right" ? "" : "rotate-180"}
           `}
        onClick={onClick}
      >
        <img src="./public/arrow-right.svg" alt="" />
      </button>
    );
  }

  return (
    <>
      <div className="project-header flex justify-center text-center flex-col text-7xl mt-36 mb-10">
        <div className="font-bold text-gray-200">Projects</div>
        <div className="text-gray-200 text-2xl">
          Have a look at my latest work!
        </div>
      </div>
      <div className="toggle-buttons flex justify-center mt-4 mx-4 ">
        <ScrollButton
          position="left"
          onClick={() => toggleClick("left", 200)}
        />
        <ScrollButton
          position="right"
          onClick={() => toggleClick("right", 200)}
        />
      </div>

      <div
        className="card-container overflow-scroll mx-auto mt-8 scrollbar-hide md:w-300"
        style={{ maxWidth: "600px" }}
        ref={containerRef}
      >
        <div
          className="gradient-design flex absolute bg-white pointer-events-none"
          style={{
            height: "420px",
            width: "175px",
            transform: "translateY(10px)" + "translateX(430px)",
            background:
              "linear-gradient(to right, rgba(255,255,255,0), #271c44)",
          }}
        ></div>
        <div
          className="individual-cards flex m-5 gap-5 ml-4 mr-4"
          style={{
            width: "1000px",
            height: "400px",
          }}
        >
          <RenderCards />
        </div>
      </div>
    </>
  );
}

export default Projects;
