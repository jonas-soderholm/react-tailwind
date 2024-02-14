import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsList } from "react-icons/bs";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [IsBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [topValue, setTopValue] = useState("-100px");
  const [navOpacity, setNavOpacity] = useState(0);
  const [navPos, setNavPos] = useState(-80);

  //Fade in navbar
  useEffect(() => {
    setTimeout(() => {
      setNavOpacity(1);
      setNavPos(0);
    }, 0);
  }, []);

  //Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scroll down, hide navbar
        // setTopValue("-100px");
        //setNavOpacity("rgba(0, 0, 0, 0.5)");
      } else {
        // Scroll upp, show navbar
        //setTopValue("0px");
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

  function ClassicNavLinks({ href, children }) {
    return (
      <div className="  rounded-full py-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-md text-white hover:text-slate-400 mx-1"
        >
          {children}
        </a>
      </div>
    );
  }

  function DarkModeButton() {
    return (
      <a
        className="arkmode-icon mx-1 hover:text-slate-500 flex items-center px-3 text-xl "
        href="https://www.google.se"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFillMoonStarsFill />
      </a>
    );
  }

  return (
    <>
      <div
        className="navbar-container sticky flex justify-center items-center text-gray-200
         z-20 transition-top ease-in-out duration-300 body-text-medium"
        style={{
          top: "0",
          transform: `translateY(${navPos}px)`,
          //transform: `translateY(0px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="nav-links ">
          <ul className="flex">
            <a
              className="arkmode-icon hover:text-slate-500 flex "
              href="https://www.google.se"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <li
              className="navlinks-classic bg-gray-200 bg-opacity-5 rounded-full p-2 text-[0.85rem] backdrop-blur-xl mt-5"
              style={
                {
                  //top: topValue,
                  //backgroundColor: navOpacity,
                  //opacity: navOpacity,
                  //transition: "opacity 0.3s ease-in-out",
                }
              }
            >
              <div className="flex gap-0 items-center">
                <ClassicNavLinks href="https://www.google.se">Toolkit</ClassicNavLinks>
                <ClassicNavLinks href="https://www.google.se">Projects</ClassicNavLinks>
                <div className="darkmode-normal">
                  <DarkModeButton />
                </div>
                <ClassicNavLinks href="https://www.google.se">Experience</ClassicNavLinks>
                <ClassicNavLinks href="https://www.google.se">Contact</ClassicNavLinks>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
