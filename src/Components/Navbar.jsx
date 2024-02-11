import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsList } from "react-icons/bs";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [IsBurgerMenuOpen, setOpenBurgerMenu] = useState(false);
  const [topValue, setTopValue] = useState("-100px");
  const [navOpacity, setNavOpacity] = useState("rgba(0, 0, 0, 0)");

  const burgerClicked = () => {
    setOpenBurgerMenu((prevCheck) => !prevCheck);

    if (IsBurgerMenuOpen) {
      setNavOpacity("rgba(0, 0, 0, 0.5)");
      document.body.style.overflow = "auto";
    } else {
      setNavOpacity("rgba(0, 0, 0, 0)");
      document.body.style.overflow = "hidden";
    }

    if (window.scrollY === 0) {
      setNavOpacity("rgba(0, 0, 0, 0)");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scroll down, hide navbar
        setTopValue("-100px");
      } else {
        // Scroll upp, show navbar
        setTopValue("0px");
        setNavOpacity("rgba(0, 0, 0, 0.5)");
      }

      // If navbar at top, hide navbar background
      if (window.scrollY === 0) {
        setNavOpacity("rgba(0, 0, 0, 0)");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className=""></div>
      <div
        style={{
          top: topValue,
          backgroundColor: navOpacity,
        }}
        className="Navbar flex justify-between items-center p-5
        text-gray-200 sticky z-20 transition-top ease-in-out duration-300"
      >
        <div className="flex items-center">
          <img src="/sweden-flag.png" alt="" className="w-11 h-auto" />
          {/* <div className="ml-2">
            <h2 style={{ fontSize: "10px" }}>Stockholm</h2>
          </div> */}
        </div>
        <div className="nav-links">
          <ul className="flex gap-4 text-1xl items-center ">
            <li className="">
              <BsFillMoonStarsFill />
            </li>
            <li className="flex">
              {/* <div className=" flex items-center gap-1">
                <a href="gap-2">Toolkit,</a>
                <a href="">Projects,</a>
                <a href="">Experience,</a>
                <a href="">Contact</a>
              </div> */}
              <button className="resume-btn bg-transparent text-gray-200  p-1.5 ml-3 rounded-lg border-2 border-gray-200  ">
                Resume
              </button>
              <button className="repo-btn bg-gray-200  text-black p-2 ml-3 rounded-lg ">
                Git repo
              </button>
            </li>
            <li>
              <button
                onClick={burgerClicked}
                style={{
                  fontSize: "35px",
                  border: "2px solid white",
                  borderRadius: "10px",
                  background: "none",
                  cursor: "pointer",
                }}
                className="z-30 relative"
              >
                <BsList className="burger-btn" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(4, 4, 4, 0.9)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          height: IsBurgerMenuOpen ? "100%" : "0%",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
          transition: "height 0.3s ease-in-out",
          overflow: "hidden",
        }}
        className="dropdown-menu"
      >
        <ul className="">
          <li className="flex flex-col font-bold text-white text-3xl gap-10 z-40 mt-32">
            <button>Toolkit</button>
            <button>Projects</button>
            <button>Experience</button>
            <button>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
