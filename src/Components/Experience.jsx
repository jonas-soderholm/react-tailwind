import { useState, useEffect } from "react";

function Experience() {
  const [selectedObject, setSelectedObject] = useState("item-1");

  // Define a function to handle item clicks
  const handleItemClick = (itemName) => {
    setSelectedObject(itemName);
  };

  // Define a function to calculate gridTemplateRows based on selectedItem
  function GetGridTemplateRow() {
    if (selectedObject === "item-1") {
      return "270px 70px 70px 70px";
    } else if (selectedObject === "item-2") {
      return "70px 200px 70px 70px";
    } else if (selectedObject === "item-3") {
      return "70px 70px 190px 70px";
    } else if (selectedObject === "item-4") {
      return "70px 70px 70px 160px";
    } else {
      return "70px 70px 70px 70px";
    }
  }

  const experienceInformation = [
    {
      name: "item-1",
      header: "Nackademin",
      info: "2019-2021. VR-Devoloper at Nackademin Stockholm. Mainly focusing on Unity, C#, Oculus Api and Blender",
      image: "/school.png",
    },
    {
      name: "item-2",
      header: "Flowtropolis",
      info: "2021-2023. VR-Developer at www.flowtropolis.se. Great company, great poeple.",
      image: "/flow.png",
    },
    {
      name: "item-3",
      header: "Courses",
      info: "2020-2021. The Odin Project, full stack. Three.js Journey",
      image: "/courses.png",
    },
    {
      name: "item-4",
      header: "Books",
      info: "Clean Code, Pragmatic coder",
      image: "/books.png",
    },
  ];

  function Item({ name, header, info, onClick }) {
    return (
      <button
        onClick={() => onClick(name)}
        className={`${name} rounded-lg flex justify-between bg-stone-800 mx-4 md:hover:bg-stone-700 header-font`}
        style={{ overflow: "hidden" }}
      >
        <div className="text-gray-200 max-w-xs overflow-hidden text-left text-xl mt-1">
          <a className="font-bold text-4xl">{header}</a>
          <br />
          <a className="font-Heebo flex font-thin mt-3 body-text-medium">{info}</a>
        </div>
        <div className="font-bold text-gray-200"></div>
      </button>
    );
  }

  function MyExperiences() {
    return (
      <>
        {experienceInformation.map((item) => (
          <Item key={item.name} name={item.name} header={item.header} info={item.info} onClick={handleItemClick} />
        ))}
        <div className="item-5 rounded-lg">
          {selectedObject && (
            <img
              src={experienceInformation.find((item) => item.name === selectedObject)?.image}
              alt=""
              className="rounded-md"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div id="experience" className="experience-header flex bg-transparent justify-center text-center flex-col ">
        <div className="font-bold text-gray-200 md:text-7xl text-4xl my-36 header-font">Experience & Education</div>
        <div className="text-1xl text-gray-200"></div>
      </div>
      <div
        className="experience-container bg-transparent"
        style={{
          gridTemplateRows: GetGridTemplateRow(),
        }}
      >
        <MyExperiences />
      </div>
    </>
  );
}

export default Experience;
