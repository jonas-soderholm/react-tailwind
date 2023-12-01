import { useState } from "react";

function ProjectsSecond() {
  const [selectedItem, setSelectedItem] = useState(1);

  // Define a function to handle item clicks
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  // Define a function to calculate gridTemplateRows based on selectedItem
  const getGridTemplateRows = () => {
    if (selectedItem === "item-1") {
      return "150px 50px 50px 50px";
    } else if (selectedItem === "item-2") {
      return "50px 120px 50px 50px";
    } else if (selectedItem === "item-3") {
      return "50px 50px 110px 50px";
    } else if (selectedItem === "item-4") {
      return "50px 50px 50px 80px";
    } else {
      return "50px 50px 50px 50px";
    }
  };

  const itemName = [
    {
      name: "item-1",
      header: "Nackademin",
      info: "2019-2021. VR-Devoloper at Nackademin Stockholm. Mainly focusing on Unity, C#, Oculus Api and Blender",
      image: "/sweden-flag.png",
    },
    {
      name: "item-2",
      header: "Flowtropolis",
      info: "2021-2023. VR-Developer at www.flowtropolis.se. Great company, great poeple.",
      image: "/ExWorkers.png",
    },
    {
      name: "item-3",
      header: "Online courses",
      info: "2020-2021. The Odin Project, full stack. Three.js Journey",
      image: "/sweden-flag.png",
    },
    {
      name: "item-4",
      header: "Books",
      info: "Clean Code, Pragmatic coder",
      image: "/ExWorkers.png",
    },
  ];

  const Item = ({ name, header, info, onClick }) => {
    return (
      <button
        onClick={() => onClick(name)}
        className={`${name} rounded-lg flex justify-between`}
      >
        <div className="text-gray-200 max-w-xs overflow-hidden text-left">
          <a className="font-bold">{header}</a>
          <br />
          <a className="font-thin">{info}</a>
        </div>
        <div className="font-bold text-gray-200">+</div>
      </button>
    );
  };

  console.log("selectedItem:", selectedItem);

  return (
    <>
      <div className="flex bg-transparent justify-center text-center flex-col ">
        <div className="font-bold pt-10 text-3xl text-gray-200">
          Experience and Education
        </div>
        <div className="text-1xl text-gray-200"></div>
      </div>
      <div
        className="e-container bg-transparent mt-4"
        style={{
          gridTemplateRows: getGridTemplateRows(),
        }}
      >
        {itemName.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            header={item.header}
            info={item.info}
            onClick={handleItemClick}
          />
        ))}
        <div className="item-5 rounded-lg">
          {selectedItem && (
            <img
              src={itemName.find((item) => item.name === selectedItem)?.image}
              alt=""
              className="rounded-md"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectsSecond;
