import React from "react";
import backgroundImage from "/grid.png";

const toolsData1 = [
  { logoSrc: "/react-logo.png", name: "React" },
  { logoSrc: "/threejs-logo.png", name: "Three.js" },
  { logoSrc: "/js-logo.png", name: "JavaScript" },
  { logoSrc: "/tailwind-logo.png", name: "Tailwind" },
  { logoSrc: "/css-logo.png", name: "CSS" },
  { logoSrc: "/html-logo.png", name: "HTML" },
  { logoSrc: "/csharp-logo.png", name: "C-Sharp" },
];

const toolsData2 = [
  { logoSrc: "/git-logo.png", name: "Git" },
  { logoSrc: "/github-logo.png", name: "GitHub" },
  { logoSrc: "/vs-logo.png", name: "VS Code" },
  { logoSrc: "/unity-logo.png", name: "Unity" },
  { logoSrc: "/meta-logo.png", name: "Oculus Api" },
  { logoSrc: "/blender-logo.png", name: "Blender" },
  { logoSrc: "/plastic-logo.png", name: "Plastic SCM" },
  { logoSrc: "/linux-logo.png", name: "Linux" },
  { logoSrc: "/illustrator-logo.png", name: "Illustrator" },
  { logoSrc: "/davinci-logo.png", name: "Davinci Resolve" },
  { logoSrc: "/fl-logo.png", name: "FL Studio" },
];

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Toolkit() {
  return (
    <>
      <div className="toolkit-header flex bg-transparent justify-center text-center">
        <div className="font-bold text-gray-200 items-center md:text-7xl text-4xl my-36 header-font">Toolkit</div>
      </div>
      <div className="toolkit-content1 md:flex flex-wrap flex justify-center text-center gap-4 gap ml-4 mr-4 ">
        <div className="font-bold text-gray-200 p-5 flex flex-wrap gap-5 items-center max-w-xl justify-center rounded-xl bg-stone-900 shadow-2xl">
          {toolsData1.map((tool, index) => (
            <div key={tool.name} className="font-bold rounded-xl border px-2 py-1 flex items-center">
              <div className="p-1">
                <img src={tool.logoSrc} alt="" className="w-4 h-auto" />
              </div>
              <div className="p-1">{tool.name}</div>
            </div>
          ))}
        </div>
        <div className="toolkit-content2 font-bold md:mt-0 mt-4 text-gray-200 p-5 flex flex-wrap gap-5 items-center max-w-xl justify-center rounded-xl bg-stone-900 shadow-2xl">
          {toolsData2.map((tool, index) => (
            <div key={tool.name} className="font-bold rounded-xl border px-2 py-1 flex items-center justify-center">
              <div className="p-1 flex items-center">
                <img src={tool.logoSrc} alt="" className="w-4 h-auto" />
              </div>
              <div className="p-1 flex items-center">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Toolkit;
