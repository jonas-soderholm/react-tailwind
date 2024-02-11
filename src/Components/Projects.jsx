import React from "react";

function Projects() {
  const buttons = [
    { name: "All" },
    { name: "2D" },
    { name: "3D" },
    { name: "VR" },
  ];

  const cards = [
    { Title: "Three.js, 3D scroller", Description: "My three.js project" },
    {
      Title: "Three.js2, 3D scroller2",
      Description: "My three.js project2 asdasdasd asd asd as das da d",
    },
    { Title: "Three.js3, 3D scroller3", Description: "My three.js project3" },
  ];

  return (
    <>
      <div className="flex bg-transparent justify-center text-center flex-col text-7xl my-36 mb-28">
        <div className="font-bold text-gray-200">Projects</div>
        <div className="text-gray-200 text-2xl">
          Have a look at my latest work!
        </div>
      </div>
      <div className="flex gap-1 ml-4 mr-4 justify-center">
        <div className="">
          {buttons.map((names, index) => (
            <button
              key={index}
              className="git-btn mr-1 bg-gray-200  text-black p-2 ml-1 rounded-sm font-Heebo font-bold border-1"
            >
              {names.name}
            </button>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div
        className="card-container bg-black overflow-hidden mx-auto "
        style={{ width: "600px" }}
      >
        <div
          className="flex m-5 gap-5 ml-4 mr-4"
          style={{
            width: "800px",
            height: "auto",
            transform: "translateX(-0px)",
          }}
        >
          {cards.map((properties) => (
            <div
              key={properties.Title}
              className="card bg-stone-900 p-4 rounded-md border border-gray-500"
            >
              <img src="/sweden-flag.png" alt="" className="rounded-md" />
              <div className="my-2">
                <h2 className="text-xl font-semibold text-gray-200">
                  {properties.Title}
                </h2>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-gray-200 py-0 px-1 rounded-full mt-1 text-xs">
                    JavaScript
                  </button>
                  <button className="bg-blue-500 text-gray-200 py-0 px-1 rounded-full mt-1 text-xs">
                    React
                  </button>
                </div>
                <p className="text-sm mt-1 text-gray-200">
                  {properties.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
