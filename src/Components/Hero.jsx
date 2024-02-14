import React, { useState, useEffect } from "react";

function AddStar({ positionX, positionY }) {
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Animate stars
    setTimeout(() => {
      setSize(5);
    }, 700);
  }, []);

  return (
    <div
      className="stars absolute"
      style={{
        top: positionY,
        left: positionX,
        width: `${size}vw`,
        height: `${size}vw`,
        transition: "width 1s, height 2s", // Apply the transition effect
      }}
    >
      <img src="./ai-star.svg" alt="" />
    </div>
  );
}

function Hero() {
  const [mainPosition, setMainPosition] = useState(40);
  const [headerPosition, setheaderPosition] = useState(400);
  const [underHeaderOpacity, setUnderHeaderOpacity] = useState(0);

  // Animate header and main
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setheaderPosition(0);
      setTimeout(() => {
        setUnderHeaderOpacity(1);
      }, 700); // Adjusted timing for opacity change
    }, 0); // Adjusted timing for initial header animation

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div
      className="main-container bg-transparent"
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: `translateY(-${0}px)`,
      }}
    >
      <div className="hero-content md:mx-[4rem]  text-white rounded-xl h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="w-full overflow-x-hidden"></div>
        <div className="p-0 flex justify-between gap-2 relative">
          <div className="text-center p-5 py-5 flex-1">
            <div className="mainHeaderpt-4 overflow-hidden">
              <h2
                className="header-text font-bold py-0 text-gray-200 mb-6 md:text-[7vw] text-5xl header-font"
                style={{
                  transition: "transform 0.6s ease-in-out",
                  transform: `translateY(+${headerPosition}px)`,
                }}
              >
                Hi. I'm Jonas <span style={{ display: "block" }}>A Developer</span>
              </h2>
            </div>
            <div
              className="underHeader"
              style={{
                opacity: underHeaderOpacity,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <h3 className="font-Heebo font-bold text-2xl py-0 text-green-500 md:text-3xl body-text-medium">
                An Agile Developer and Designer.
              </h3>
              {/* <p className="text-md py-2 dark:text-gray-200 max-w-xl mx-auto text-s font-bold">
                Former vr game developer pursuing his love for web development with 3D skills in his pockets.
              </p> */}
            </div>
          </div>
          <AddStar positionX="80%" positionY="20%" />
          <AddStar positionX="15%" positionY="45%" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
