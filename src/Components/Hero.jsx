import React, { useState, useEffect } from "react";

function AddStar({ initialSize, positionX, positionY, scaleUpTime, scaleDownTime, remainVisible, id }) {
  const [size, setSize] = useState(0);

  // Animate stars
  useEffect(() => {
    setTimeout(() => {
      setSize(initialSize);
    }, scaleUpTime);

    setTimeout(() => {
      if (!remainVisible) {
        setSize(0);
      }
    }, scaleDownTime);
  }, []);

  return (
    <div
      id={id}
      className="stars absolute"
      style={{
        top: positionY,
        left: positionX,
        width: `${size}vw`,
        height: `${size}vw`,
        transition: "width 1s, height 2s",
      }}
    >
      <img src="./ai-star.svg" alt="" />
    </div>
  );
}

function Hero() {
  const [headerPosition, setheaderPosition] = useState(400);
  const [underHeaderOpacity, setUnderHeaderOpacity] = useState(0);
  const isPhone = window.innerWidth < 768;
  const starSizer = isPhone ? 10 : 5;
  let rotatingStar = document.getElementById("starRotator");

  // Scroll rotate visual star
  useEffect(() => {
    const handleScroll = () => {
      if (rotatingStar === null) {
        rotatingStar = document.getElementById("starRotator");
      } else {
        rotatingStar.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate header and main
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setheaderPosition(0);
      setTimeout(() => {
        setUnderHeaderOpacity(1);
      }, 700);
    }, 0);

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
          <div className="text-center p-5 py-5 flex-1 ">
            <div className="mainHeader pt-4 overflow-hidden">
              <h2
                className="header-text font-bold py-0 mb-6 md:text-[7vw] text-5xl header-font"
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
              <h3 className="font-Heebo font-bold text-2xl py-0 text-gray-200 md:text-3xl body-text-medium">
                An Agile Developer and Designer.
              </h3>
            </div>
          </div>
          {/* // Staranimations */}
          {isPhone ? (
            <>
              <AddStar
                initialSize={starSizer}
                positionX="40%"
                positionY="-20%"
                scaleUpTime={500}
                scaleDownTime={900}
                remainVisible={false}
                id="star"
              />
              <AddStar
                initialSize={starSizer + 5}
                positionX="70%"
                positionY="-40%"
                scaleUpTime={700}
                scaleDownTime={1200}
                remainVisible={false}
                id="star"
              />
              <AddStar
                initialSize={starSizer + 2}
                positionX="20%"
                positionY="110%"
                scaleUpTime={1000}
                scaleDownTime={1500}
                remainVisible={false}
                id="star"
              />
              <AddStar
                initialSize={starSizer - 1}
                positionX="46%"
                positionY="145%"
                scaleUpTime={1500}
                scaleDownTime={2000}
                remainVisible={true}
                id="starRotator"
              />
            </>
          ) : (
            <>
              <AddStar
                initialSize={starSizer - 1}
                positionX="80%"
                positionY="20%"
                scaleUpTime={500}
                scaleDownTime={900}
                remainVisible={false}
                id="star"
              />
              <AddStar
                initialSize={starSizer + 3}
                positionX="70%"
                positionY="-20%"
                scaleUpTime={700}
                scaleDownTime={1050}
                remainVisible={false}
                id="star"
              />
              <AddStar
                initialSize={starSizer - 2}
                positionX="46%"
                positionY="110%"
                scaleUpTime={800}
                scaleDownTime={2000}
                remainVisible={true}
                id="starRotator"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
