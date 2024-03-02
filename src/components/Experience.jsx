import { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";

function Experience() {
  const [selectedObject, setSelectedObject] = useState("item-1");
  const { darkMode } = useDarkMode();

  // Define a function to handle item clicks
  const handleItemClick = (itemName) => {
    setSelectedObject(itemName);
  };

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType());
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [deviceType, setDeviceType] = useState(getDeviceType());

  function getDeviceType() {
    return window.innerWidth <= 768 ? "phone" : "pc";
  }

  function GetGridTemplateRow() {
    if (deviceType === "phone") {
      // Adjust for phone
      if (selectedObject === "item-1") {
        return "225px 70px 70px 70px";
      } else if (selectedObject === "item-2") {
        return "70px 230px 70px 70px";
      } else if (selectedObject === "item-3") {
        return "70px 70px 285px 70px";
      } else if (selectedObject === "item-4") {
        return "70px 70px 70px 150px";
      } else {
        return "70px 70px 70px 70px";
      }
    }
    if (deviceType === "pc") {
      // Adjust for PC
      if (selectedObject === "item-1") {
        return "230px 70px 70px 70px";
      } else if (selectedObject === "item-2") {
        return "70px 200px 70px 70px";
      } else if (selectedObject === "item-3") {
        return "70px 70px 285px 70px";
      } else if (selectedObject === "item-4") {
        return "70px 70px 70px 150px";
      } else {
        return "70px 70px 70px 70px";
      }
    }
  }

  const experienceInformation = [
    {
      name: "item-1",
      header: "Nackademin",
      info: "2019-2021. VR-Devoloper at Nackademin Stockholm. Mainly focusing on Unity, C#, Oculus SDK and Blender.",
      image: "/school.png",
    },
    {
      name: "item-2",
      header: "Flowtropolis",
      info: "2021-2023 (2.5 years). VR-Developer at www.flowtropolis.se. Great company, great poeple.",
      image: "/flow.png",
    },
    {
      name: "item-3",
      header: "Courses",
      info:
        "2018-2023:\n1: Complete js course (Jonas Schmedtmann).\n2: Three.js Journey by Bruno Simon\n3: The Odin Project, full stack.",
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
        <div className="flex flex-col justify-between text-gray-200 max-w-[25rem] overflow-hidden text-left text-xl mt-[0.3rem] w-full">
          <div>
            <a className="font-bold text-4xl">{header}</a>
          </div>
          <div className="flex-1 flex flex-col mt-6 ">
            {" "}
            {/* Center vertically */}
            {info.split("\n").map((course, index) => (
              <a key={index} className="body-text-medium font-bold md:text-xl text-[1rem] text-left">
                {course}
              </a>
            ))}
          </div>
        </div>
        <div className="font-bold text-gray-200 mt-[0.6rem]"></div>
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
      <div
        id="experience"
        className={`${
          darkMode ? "text-dark" : "text-light"
        } experience-header flex bg-transparent justify-center text-center flex-col `}
      >
        <div className="font-bold md:text-7xl text-4xl my-36 header-font">Experience & Education</div>
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
