import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";

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
      className="stars absolute "
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
  console.log(starSizer);
  let rotatingStar = document.getElementById("starRotator");
  const { darkMode } = useDarkMode();

  const starConfigurations = {
    phone: [
      {
        initialSize: starSizer,
        positionX: "40%",
        positionY: "-20%",
        scaleUpTime: 500,
        scaleDownTime: 900,
        remainVisible: false,
        id: "phoneStar1",
      },
      {
        initialSize: starSizer + 5,
        positionX: "70%",
        positionY: "-40%",
        scaleUpTime: 700,
        scaleDownTime: 1200,
        remainVisible: false,
        id: "phoneStar2",
      },
      {
        initialSize: starSizer + 2,
        positionX: "20%",
        positionY: "110%",
        scaleUpTime: 1000,
        scaleDownTime: 1500,
        remainVisible: false,
        id: "phoneStar3",
      },
      {
        initialSize: starSizer - 1,
        positionX: "46%",
        positionY: "122%",
        scaleUpTime: 1500,
        scaleDownTime: 2000,
        remainVisible: true,
        id: "starRotator",
      },
    ],
    nonPhone: [
      {
        initialSize: starSizer - 1,
        positionX: "80%",
        positionY: "20%",
        scaleUpTime: 500,
        scaleDownTime: 900,
        remainVisible: false,
        id: "nonPhoneStar1",
      },
      {
        initialSize: starSizer + 3,
        positionX: "70%",
        positionY: "-20%",
        scaleUpTime: 700,
        scaleDownTime: 1000,
        remainVisible: false,
        id: "nonPhoneStar2",
      },
      {
        initialSize: starSizer - 2,
        positionX: "48%",
        positionY: "110%",
        scaleUpTime: 800,
        scaleDownTime: 2000,
        remainVisible: true,
        id: "starRotator",
      },
    ],
  };

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
      }, 800);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div
      className="main-container pointer"
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: `translateY(-${0}px)`,
      }}
    >
      <div
        className={`${
          darkMode ? "text-dark" : "text-light"
        } hero-content md:mx-[4rem] rounded-xl h-[85vh] flex flex-col justify-center overflow-hidden `}
      >
        <div className="w-full overflow-x-hidden"></div>
        <div className="p-0 flex justify-between gap-2 relative">
          <div className="text-center p-5 py-5 flex-1 ">
            <div className="mainHeader header-font pt-4 overflow-hidden">
              <h2
                className=" font-bold py-0 mb-6 md:text-[7vw] text-5xl header-font"
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
              <h3 className="font-Heebo  max-w-4xl m-auto font-bold text-lg py-0 md:text-2xl body-text-medium">
                Focused on creating smooth, easy-to-use solutions. I code to solve problems and design for clarity.
              </h3>
            </div>
          </div>
          {/* // Staranimations */}
          {isPhone
            ? starConfigurations.phone.map((config) => <AddStar key={config.id} {...config} />)
            : starConfigurations.nonPhone.map((config) => <AddStar key={config.id} {...config} />)}
        </div>
      </div>
    </div>
  );
}

export default Hero;
