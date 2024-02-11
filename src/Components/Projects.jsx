import React, { useState } from "react";

function Projects() {
  const [toggleXPosition, setToggleXPosition] = useState(1);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);

  const CategoryButtons = [
    { name: "All" },
    { name: "2D" },
    { name: "3D" },
    { name: "VR" },
  ];

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

  function toggleClick(position) {
    if (position === "left" && toggleXPosition !== 1) {
      setToggleXPosition(toggleXPosition + 30);
      setIsRightButtonVisible(true);
    } else if (position === "right" && toggleXPosition !== -29) {
      setToggleXPosition(toggleXPosition - 30);
      setIsRightButtonVisible(false);
    }
  }

  const TypeOfCardsButtons = () => {
    return (
      <div className="card-information flex gap-1 ml-4 mr-4 justify-center">
        {CategoryButtons.map((names, index) => (
          <button
            key={index}
            className="git-btn mr-1 bg-gray-200 text-black p-2 ml-1 rounded-sm font-Heebo font-bold border-1"
          >
            {names.name}
          </button>
        ))}
      </div>
    );
  };

  const ScrollButton = ({ position, onClick }) => {
    return (
      <button
        className={`scroll-button bg-gray-100 absolute top-1/2 ${
          position === "right"
            ? "right-0 -translate-x-5"
            : "left-0 translate-x-5"
        } -translate-y-1/2
          rounded-full h-14 w-14 flex items-center justify-center text-4xl hover:bg-gray-300 ${
            position === "left" ? "rotate-180" : ""
          }`}
        onClick={onClick}
        style={{
          visibility:
            position === "right"
              ? isRightButtonVisible
                ? "visible"
                : "hidden"
              : isRightButtonVisible
              ? "hidden"
              : "visible",
        }}
      >
        <img src="./public/arrow-right.svg" alt="" />
      </button>
    );
  };

  const handleCardClick = (title) => {
    console.log(`Card clicked: ${title}`);
  };

  const RenderCards = () => {
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
  };

  return (
    <>
      <div className="project-header flex justify-center text-center flex-col text-7xl mt-36 mb-10">
        <div className="font-bold text-gray-200">Projects</div>
        <div className="text-gray-200 text-2xl">
          Have a look at my latest work!
        </div>
      </div>
      {/* <TypeOfCardsButtons /> */}
      <div
        className="card-container overflow-hidden mx-auto relative mt-24"
        style={{ width: "600px" }}
      >
        <div
          className="boxer flex bg-white absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            height: "400px",
            width: "150px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0), #271c44)",
          }}
        ></div>
        <ScrollButton position="right" onClick={() => toggleClick("right")} />
        <ScrollButton position="left" onClick={() => toggleClick("left")} />
        <div
          className="individual-cards flex m-5 gap-5 ml-4 mr-4"
          style={{
            width: "1000px",
            height: "400px",
            transition: "margin 0.5s ease",
            marginLeft: `${toggleXPosition}rem`,
          }}
        >
          <RenderCards />
        </div>
      </div>
    </>
  );
}

export default Projects;
